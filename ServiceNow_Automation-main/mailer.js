import nodemailer from 'nodemailer';

async function sendEmail(to, subject, text) {
    console.log('Creating transporter...');
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'prosperatest45@gmail.com',
            pass: 'jfla alfx jsoh gfcz' // Use the app password here
        }
    });

    console.log('Setting up email data...');
    let mailOptions = {
        from: 'ayush.nimkar@nephostechnologies.com',
        to: to,
        subject: subject,
        text: text
    };

    console.log('Sending email...');
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
}

// Example usage
sendEmail('wintershield05@gmail.com', 'Test Email', 'Hello! This is a test email.');
// Import the Twilio module and create a REST client
import twilio from 'twilio';
const accountSid = 'ACddfe629c7d1d8e93aa6ff7702cdf7b95'; // Your Account SID from www.twilio.com/console
const authToken = 'd9a7854e3636703d630ea61b49770f50';   // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

async function makeCall(to, from, messageUrl) {
    try {
        const call = await client.calls.create({
            url: messageUrl, // URL of the TwiML file with the message
            to: to,         // The phone number to call
            from: from      // Your Twilio phone number
        });
        console.log('Call initiated with SID:', call.sid);
    } catch (error) {
        console.error('Error making call:', error);
    }
}

// Example usage
const to = '+919021668284'; // The recipient's phone number
const from = '+919209583790'; // Your Twilio phone number
const messageUrl = 'http://demo.twilio.com/docs/voice.xml'; // URL of the TwiML file with the message

makeCall(to, from, messageUrl);

import fs from 'fs';
import { parse } from 'csv-parse';

const readColumnFromCSV = (filePath, columnName) => {
    const parser = fs.createReadStream(filePath).pipe(parse({ columns: true }));

    parser.on('data', (row) => {
        const state = row[columnName];
        const incidentNumber = row['number'];
        const incidentDate = new Date(row['sys_updated_on']);
        const currentTime = new Date();
        const timeDifference = (currentTime - incidentDate) / (1000 * 60 * 60); // Difference in hours
        if(state == 'Closed' && timeDifference>24){
            console.log(`Incident Number: ${incidentNumber}, State: ${state}`);
            if(row['assigned_to'] == 'Swamy Yerri'){
                console.log('Send email to swamy.yerri@nephostechnologies.com');
            }
            if(row['assigned_to'] == 'Suhas Salve'){
                console.log('Send email to suhas.salve@nephostechnologies.com');
            }
            if(row['assigned_to'] == 'Abhishek Pandey'){
                console.log('Send email to abhishek.pandey1@nephostechnologies.com');
            }
            if(row['assigned_to'] == 'Ubedulla Pathikonda'){
                console.log('Send email to ubedulla.pathikonda@nephostechnologies.com');
            }
            if(row['assigned_to'] == 'Manikanta Nallagopu'){
                console.log('Send email to manikanta.nallagopu@nephostechnologies.com');
            }
        }
    });

    parser.on('end', () => {
        console.log('CSV file successfully processed');
    });

    parser.on('error', (err) => {
        console.error('Error reading CSV file:', err);
    });
};

// Usage example
const filePath = './Swamy - incident - (Aug-Sep).csv';
const columnName = 'state';
readColumnFromCSV(filePath, columnName);
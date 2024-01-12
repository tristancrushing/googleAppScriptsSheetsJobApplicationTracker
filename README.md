# Google Apps Scripts Sheets Job Application Tracker

## Overview
This repository contains a Google Apps Script for creating and managing a job application tracker in Google Sheets. The script automatically generates a spreadsheet with multiple columns to efficiently track job applications, interviews, and their statuses. It's designed to help job seekers organize their job search process in a more structured and accessible way.

## Features
- **Job Application Tracking**: Track job titles, company names, dates applied, and links to job postings.
- **Contact Management**: Keep a record of contact persons for each job application.
- **Application Status**: Update and monitor the status of each application (e.g., Applied, Interviewing, Offered, Rejected).
- **Interview Tracking**: Record up to four interviews per job application, including interview dates and statuses.
- **Customizable Layout**: Users can further customize the sheet for additional details as per their requirements.

## Setup Instructions
### Prerequisites
- Google account
- Basic understanding of Google Sheets and Google Apps Script

### Creating the Job Application Tracker
1. **Open Google Apps Script**:
   - Visit [Google Apps Script](https://script.google.com/) and click on “New Project”.

2. **Replace the Code**:
   - In the script editor, remove any default code.
   - Copy and paste the script provided in this repository.

3. **Save and Run the Script**:
   - Click the disk icon to save the script. Give it a meaningful name.
   - Execute the script by clicking the play button.

4. **Authorize the Script**:
   - When prompted, review the permissions and authorize the script to create and manage sheets in your Google Drive.

5. **Check Your Google Drive**:
   - After running the script, a new spreadsheet named "Job Application Tracker" will be created in your Google Drive.
   - Open it to view the predefined columns and layout.

### Customizing the Spreadsheet
- You can add more columns or modify the existing ones directly in Google Sheets.
- To alter the default setup script, edit the script in Google Apps Script.

## Script Description
The script `createJobApplicationTracker()` creates a new Google Sheet with specific columns to track various aspects of job applications. These columns include job details, application status, contact information, notes, and up to four interviews with their dates and statuses.

## Contributing
Contributions to this project are welcome! Feel free to fork this repository and submit pull requests with your improvements.

## License
This project is open-sourced under the [MIT License](LICENSE).

## Contact
For any queries or suggestions, please open an issue on this repository.

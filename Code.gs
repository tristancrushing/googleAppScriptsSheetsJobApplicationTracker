function createJobApplicationTracker() {
  var ss = SpreadsheetApp.create("Job Application Tracker");
  var sheet = ss.getActiveSheet();

  // Define the headers
  var headers = [
    "Job Title", "Company Name", "Date Applied", "Job Posting Link", 
    "Contact Person", "Status", "Notes", 
    "Interview Date 1", "Status 1", 
    "Interview Date 2", "Status 2", 
    "Interview Date 3", "Status 3", 
    "Interview Date 4", "Status 4"
  ];

  // Set the headers in the first row
  sheet.getRange("A1:O1").setValues([headers]);

  // Apply some basic formatting
  sheet.getRange("A1:O1").setFontWeight("bold");
  sheet.setColumnWidth(1, 200); // Job Title
  sheet.setColumnWidth(2, 200); // Company Name
  sheet.setColumnWidth(4, 300); // Job Posting Link
  sheet.setColumnWidth(7, 400); // Notes
  for (var i = 8; i <= 15; i++) {
    sheet.setColumnWidth(i, 120); // Interview Dates and Statuses
  }

  SpreadsheetApp.flush(); // Apply changes

  // Log the URL of the new spreadsheet
  Logger.log("Spreadsheet created: " + ss.getUrl());
}

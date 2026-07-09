/**
 * Adds a custom menu when the spreadsheet opens.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("File Tools")
    .addItem("List Drive Files", "getListOfFiles")
    .addToUi();
}


/**
 * Lists files from a Google Drive folder
 * and writes results into the spreadsheet.
 *
 * Version 3:
 * - Adds spreadsheet output
 * - Creates structured file inventory
 */
function getListOfFiles() {
  const folderId = "YOUR_FOLDER_ID";

  const parentFolder = DriveApp.getFolderById(folderId);
  const files = parentFolder.getFiles();

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();

  // Clear previous results
  sheet.clear();

  // Add headers
  sheet.appendRow([
    "File Name",
    "File ID",
    "File URL"
  ]);

  let fileCount = 0;

  while (files.hasNext()) {
    const file = files.next();

    sheet.appendRow([
      file.getName(),
      file.getId(),
      file.getUrl()
    ]);

    fileCount++;
  }

  SpreadsheetApp.getUi()
    .alert(fileCount + " files found.");
}
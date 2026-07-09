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
 * Lists files from a Google Drive folder.
 * Version 2: Triggered from a Google Sheets custom menu.
 */
function getListOfFiles() {
  const folderId = "YOUR_FOLDER_ID";

  const parentFolder = DriveApp.getFolderById(folderId);
  const files = parentFolder.getFiles();

  let filesList = "";

  while (files.hasNext()) {
    const file = files.next();

    filesList += file.getName() 
      + " | " 
      + file.getId()
      + "\n";
  }

  Logger.log(filesList);
}
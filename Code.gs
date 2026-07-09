/**
 * Adds a custom menu when the spreadsheet opens.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("File Tools")
    .addItem("List All Folders", "listAllFolders")
    .addItem("List Drive Files", "getListOfFiles")
    .addToUi();
}

/**
 * Starts recursive Drive inventory.
 *
 * Version 4:
 * - Searches subfolders
 * - Tracks folder path
 * - Writes complete inventory to Sheet
 */
function getListOfFiles() {
  const folderId = "YOUR_FOLDER_ID";

  const parentFolder = DriveApp.getFolderById(folderId);

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();

   // Clear previous results
  sheet.clear();

   // Add headers
   sheet.appendRow([
    "File Name",
    "File ID",
    "File URL",
    "Folder Path"
  ]);

  scanFolder(rootFolder, rootFolder.getName(), sheet);

  SpreadsheetApp.getUi()
    .alert("Drive inventory complete.");
}


/**
 * Recursively scans folders and subfolders.
 */
function scanFolder(folder, folderPath, sheet) {

  // List files in current folder
  const files = folder.getFiles();

  while (files.hasNext()) {
    const file = files.next();

    sheet.appendRow([
      file.getName(),
      file.getId(),
      file.getUrl(),
      folderPath
    ]);
  }


  // Search subfolders
  const subfolders = folder.getFolders();

  while (subfolders.hasNext()) {
    const subfolder = subfolders.next();

    scanFolder(
      subfolder,
      folderPath + "/" + subfolder.getName(),
      sheet
    );
  }
}
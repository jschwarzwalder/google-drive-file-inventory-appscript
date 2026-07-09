/**
 * File Tools - Google Drive Inventory
 *
 * Version 5:
 * - Adds Google Sheets custom menu
 * - Adds folder selection sidebar
 * - Allows browsing Drive folders before selection
 * - Stores selected folder using User Properties
 * - Recursively inventories files and subfolders
 *
 * Workflow:
 * Select Folder
 *       ↓
 * Browse Drive folders
 *       ↓
 * List Drive Files
 *       ↓
 * Export inventory to Sheet
 */
/**
 * Adds a custom menu when the spreadsheet opens.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("File Tools")
    .addItem("List All Folders", "listAllFolders")
    .addItem("Select Folder", "showFolderPicker")
    .addItem("List Drive Files", "getListOfFiles")
    .addToUi();
}


/**
 * Opens folder picker sidebar.
 */
function showFolderPicker() {

  const html = HtmlService
    .createHtmlOutputFromFile("FolderPicker")
    .setTitle("Select Drive Folder");

  SpreadsheetApp
    .getUi()
    .showSidebar(html);
}


/**
 * Returns top-level folders from My Drive.
 *
 * Version 5:
 * - Provides starting point for folder browser
 * - Used by FolderPicker.html
 * - Loads only current folder level
 *
 * Child folders are loaded using getChildFolders().
 */
function getFolders() {

  const rootFolder = DriveApp.getRootFolder();

  const folders = rootFolder.getFolders();

  const folderList = [];

  while (folders.hasNext()) {

    const folder = folders.next();

    folderList.push({
      name: folder.getName(),
      id: folder.getId()
    });
  }

  return folderList;
}


/**
 * Saves selected folder ID.
 */
function saveFolder(folderId) {

  PropertiesService
    .getUserProperties()
    .setProperty(
      "SELECTED_FOLDER_ID",
      folderId
    );
}

/**
 * Returns folders inside a selected folder.
 *
 * Version 5:
 * - Supports hierarchical folder browsing
 * - Prevents loading entire Drive at once
 * - Used by FolderPicker.html navigation
 */
function getChildFolders(folderId) {

  const folder =
    DriveApp.getFolderById(folderId);

  const folders =
    folder.getFolders();

  const folderList = [];


  while (folders.hasNext()) {

    const subfolder =
      folders.next();


    folderList.push({
      name: subfolder.getName(),
      id: subfolder.getId()
    });

  }


  return folderList;
}


/**
 * Starts recursive Drive inventory.
 *
 * Version 5:
 * - Uses selected folder from folder picker
 * - Searches subfolders
 * - Tracks folder path
 * - Writes complete inventory to Sheet
 */
function getListOfFiles() {

  const folderId = PropertiesService
    .getUserProperties()
    .getProperty("SELECTED_FOLDER_ID");


  if (!folderId) {

    SpreadsheetApp.getUi()
      .alert("Please select a folder first.");

    return;
  }


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


  scanFolder(
    parentFolder,
    parentFolder.getName(),
    sheet
  );


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
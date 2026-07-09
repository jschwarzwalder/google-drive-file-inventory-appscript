/**
 * Drive inventory functions.
 */


/**
 * Starts recursive Drive inventory.
 *
 * Version 6:
 * Uses the folder selected in FolderPicker.
 */
function getListOfFiles() {

  const folderId =
    PropertiesService
      .getUserProperties()
      .getProperty("SELECTED_FOLDER_ID");


  if (!folderId) {

    SpreadsheetApp.getUi()
      .alert("Please select a folder first.");

    return;

  }


  const parentFolder =
    DriveApp.getFolderById(folderId);


  const sheet =
    SpreadsheetApp
      .getActiveSpreadsheet()
      .getActiveSheet();


  sheet.clear();


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
 * Recursively scans folders.
 */
function scanFolder(
  folder,
  folderPath,
  sheet
) {

  const files =
    folder.getFiles();


  while (files.hasNext()) {

    const file =
      files.next();

    sheet.appendRow([
      file.getName(),
      file.getId(),
      file.getUrl(),
      folderPath
    ]);

  }


  const subfolders =
    folder.getFolders();


  while (subfolders.hasNext()) {

    const subfolder =
      subfolders.next();

    scanFolder(
      subfolder,
      folderPath + "/" + subfolder.getName(),
      sheet
    );

  }

}
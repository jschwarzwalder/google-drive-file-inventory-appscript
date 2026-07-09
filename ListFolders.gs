 /**
 * Lists all folders in My Drive.
 *
 * Helper utility for discovering Google Drive folder IDs.
 *
 * Output:
 * - Folder Name
 * - Folder ID
 * - Folder URL
 * - Folder Path
 */

function listAllFolders() {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();

  sheet.clear();

  sheet.appendRow([
    "Folder Name",
    "Folder ID",
    "Folder URL",
    "Folder Path"
  ]);

  const folders = DriveApp.getRootFolder();

  scanFolders(
    folders,
    "My Drive",
    sheet
  );

  SpreadsheetApp.getUi().alert(
    "Folder listing complete."
  );
}


/**
 * Recursively scans folders.
 */
function scanFolders(folder, path, sheet) {

  const subfolders = folder.getFolders();

  while (subfolders.hasNext()) {

    const subfolder = subfolders.next();

    const currentPath =
      path + "/" + subfolder.getName();


    sheet.appendRow([
      subfolder.getName(),
      subfolder.getId(),
      subfolder.getUrl(),
      currentPath
    ]);


    scanFolders(
      subfolder,
      currentPath,
      sheet
    );
  }
}
/**
 * Folder selection UI.
 */


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
 */
function getFolders() {

  const rootFolder =
    DriveApp.getRootFolder();

  const folders =
    rootFolder.getFolders();

  const folderList = [];

  while (folders.hasNext()) {

    const folder =
      folders.next();

    folderList.push({
      name: folder.getName(),
      id: folder.getId()
    });

  }

  return folderList;

}


/**
 * Returns folders inside a selected folder.
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
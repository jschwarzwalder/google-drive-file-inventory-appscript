/**
 * File Tools - Google Drive Inventory
 *
 * Version 6:
 * - Refactored into multiple Apps Script files
 * - No functional changes
 * - Improved maintainability
 */


/**
 * Adds a custom menu when the spreadsheet opens.
 */
function onOpen() {

  SpreadsheetApp.getUi()
    .createMenu("File Tools")
    .addItem("Select Folder", "showFolderPicker")
    .addItem("List Drive Files", "getListOfFiles")
    .addToUi();

}
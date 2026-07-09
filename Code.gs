function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("File Tools")
    .addItem("List Drive Files", "getListOfFiles")
    .addToUi();
}
function getListOfFiles(targetID) {
  filesList="";
  var parentFolder = DriveApp.getFolderById(targetID); 
  var files = parentFolder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    filesList += file.getName() + "|" + file.getId() + " ,";

  }
  var output = filesList.replace(/, \s*$/, ""); //removes last comma 
  return ContentService.createTextOutput(output);
}


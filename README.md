# Google Drive File Inventory for Google Sheets

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-JavaScript-yellow)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-Integration-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-green)
![Version](https://img.shields.io/badge/version-6-blue)

A Google Apps Script tool that creates a **Google Drive file inventory inside Google Sheets**.

This project started as a simple script to list files in a Drive folder and evolved into a lightweight file auditing tool with a custom Google Sheets menu.

It demonstrates iterative development in Google Apps Script:

* starting with a copied code sample
* debugging Apps Script parameters and permissions
* adding a Sheet UI
* exporting Drive metadata into structured rows

---

## Why this exists

Google Drive is excellent for storing files, but it can become difficult to answer simple questions:

* What files exist in this folder?
* What are the file IDs?
* Where are files located?
* How can I export a Drive inventory?
* How can I create a repeatable audit process?

This project turns Google Sheets into a simple interface for exploring and documenting Drive contents.

## Origin

This project started from the Google Apps Script tutorial:

[List Files in a Folder and Subfolder on Google Drive](https://technologydots.com/list-files-in-a-folder-and-subfolder-on-google-drive/)

The original script provided the foundation for recursively listing files from Google Drive folders. This project extends that foundation into a spreadsheet-based inventory workflow by adding:

- Google Sheets integration
- Recursive inventory output
- Folder path tracking
- Interactive folder selection UI
- Modular Apps Script architecture

---

## Project Overview

This project is maintained in GitHub and deployed through Google Apps Script.

### Source Code (GitHub)

https://github.com/jschwarzwalder/google-drive-file-inventory-appscript

### Apps Script Project

Private Google Apps Script deployment.

The live Apps Script project is maintained separately from this repository.

Script ID:

```
1pDQxaqzA0zow1F5ICrEUTJ4UnKMXybS2Q5wx_H4OW1jkbUbczZy8xQZM
```

The Script ID is provided for project tracking only. Access requires Google permissions.

## Status

Active development.

Current release: Version 6 — Project Refactoring.

---

## Features

* Adds a custom **File Tools** menu to Google Sheets
* Allows users to select a Google Drive folder from the Sheet UI
* Reads files from a selected Google Drive folder
* Searches subfolders recursively
* Extracts:

  * File name
  * File ID
  * File URL
  * Folder path
* Writes results directly into the spreadsheet
* Creates a repeatable Drive inventory workflow

---

## Project Structure

The Apps Script project is organized by responsibility:

Code.gs
  - Custom menu creation
  - Spreadsheet startup logic

FolderService.gs
  - Folder picker integration
  - Folder selection persistence

Inventory.gs
  - Drive scanning
  - Recursive inventory generation

FolderPicker.html
  - Sidebar folder selection interface

---

## Installation and Usage

1. Open a Google Sheet.

2. Open:

```text
Extensions → Apps Script
```

3. Add the Apps Script files from this repository to the Apps Script editor:

```text
Code.gs
FolderService.gs
Inventory.gs
FolderPicker.html
```

4. Save the project and reload the spreadsheet.

5. Open:

```text
File Tools → Select Folder
```

6. Choose the Google Drive folder you want to inventory.

7. Run:

```text
File Tools → List Drive Files
```

The spreadsheet will populate with the Drive inventory.

---

## Example Output

| File Name   | File ID | URL       |
| ----------- | ------- | --------- |
| Budget.xlsx | abc123  | Drive URL |
| Notes.docx  | xyz789  | Drive URL |

---

## Development

This project has evolved through several incremental releases, from a simple Google Drive file listing script to a recursive Drive inventory tool with an interactive folder picker and a modular codebase.

See [CHANGELOG.md](./CHANGELOG.md) for the complete development history and version details.

---

## Lessons Learned

This project highlighted several Google Apps Script concepts:

* Apps Script functions behave differently when run manually versus from triggers.
* Returned values are not automatically displayed in Sheets.
* Drive permissions must be authorized before accessing files.
* Custom menus provide a simple way to turn scripts into tools.

---

## Future Ideas

* File owner information
* Last modified timestamps
* File type filtering
* Export inventory to CSV
* Duplicate file detection
* Drive storage analysis

---

## Contributing

Suggestions, bug reports, and improvements are welcome.

Open an issue or submit a pull request with ideas for improving the workflow.

---

## License

This project is licensed under the MIT License.

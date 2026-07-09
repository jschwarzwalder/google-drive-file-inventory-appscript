# Google Drive File Inventory for Google Sheets

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-JavaScript-yellow)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-Integration-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-green)

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

---

## Project Overview

This project is maintained in GitHub and deployed through Google Apps Script.

### Source Code (GitHub)

https://github.com/jschwarzwalder/google-drive-file-inventory-appscript

### Apps Script Project

Add your Apps Script project URL here.

### Apps Script Project ID

```
ADD_PROJECT_ID_HERE
```

---

# Features

# Features

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

# Current Workflow

1. Open a Google Sheet
2. Select:

```
Extensions → Apps Script
```

3. Add the `Code.gs` file from this repository
4. Set your target Google Drive folder ID
5. Reload the spreadsheet
6. Use:

```
File Tools → List Drive Files
```

The spreadsheet will populate with the file inventory.

---

# Example Output

| File Name   | File ID | URL       |
| ----------- | ------- | --------- |
| Budget.xlsx | abc123  | Drive URL |
| Notes.docx  | xyz789  | Drive URL |

---
## Development

This project has evolved through several incremental releases, from a simple Google Drive file listing script to a recursive Drive inventory tool with an interactive folder picker and a modular codebase.

See [CHANGELOG.md](./CHANGELOG.md) for the complete development history and version details.

---

# Quick Start

1. Open Google Sheets
2. Go to:

```
Extensions → Apps Script
```

3. Copy `Code.gs`
4. Reload the spreadsheet
5. Use:

```
File Tools → List Drive Files
```

6. Choose the folder you want to inventory
7. Use:

```
File Tools → List Drive Files
```

---

# Lessons Learned

This project highlighted several Google Apps Script concepts:

* Apps Script functions behave differently when run manually versus from triggers.
* Returned values are not automatically displayed in Sheets.
* Drive permissions must be authorized before accessing files.
* Custom menus provide a simple way to turn scripts into tools.

---

# Future Ideas

* Recursive folder scanning
* Folder hierarchy output
* File owner information
* Last modified timestamps
* File type filtering
* Scheduled reports
* Export inventory to CSV
* Dashboard visualization

---

# Contributing

Suggestions, bug reports, and improvements are welcome.

Open an issue or submit a pull request with ideas for improving the workflow.

---

# License

This project is licensed under the MIT License.

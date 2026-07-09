# Changelog

All notable changes to this project are documented in this file.

This project follows a simple versioning approach where each version represents a meaningful milestone in the application's development.

---

## Version 6 — Project Refactoring

### Changed

* Refactored the Apps Script project into multiple source files.
* Moved menu initialization into `Code.gs`.
* Moved folder selection logic into `FolderService.gs`.
* Moved Drive inventory logic into `Inventory.gs`.
* Improved code organization and maintainability.

### Notes

* No functional changes were introduced.
* Existing workflows continue to operate as before.

---

## Version 5 — Interactive Folder Selection

### Added

* Folder selection sidebar using Google Apps Script HTML Service.
* Hierarchical folder navigation with support for browsing child folders.
* Support for browsing child folders.
* Selected folder is saved using `PropertiesService`.
* Custom **Select Folder** menu option.

### Changed

* Removed the requirement to manually edit the source code with a folder ID.
* Drive inventory now runs against the saved folder selection.

---

## Version 4 — Recursive Drive Inventory

### Added

* Recursive scanning of subfolders.
* Folder path tracking for every file.
* Spreadsheet output including:

  * File Name
  * File ID
  * File URL
  * Folder Path

### Changed

* Expanded inventory from a single folder to an entire folder hierarchy.

---

## Version 3 — Google Sheets Integration

### Added

* Output results directly to the active Google Sheet.
* Automatic worksheet clearing before each inventory run.
* Header row generation.

### Changed

* Replaced text-based output with structured spreadsheet results.

---

## Version 2 — Improved File Metadata

### Added

* File ID collection.
* File URL collection.

### Changed

* Expanded output beyond file names to include useful metadata.

---

## Version 1 — Initial Release

### Added

* Google Sheets custom menu.
* Ability to scan a single Google Drive folder.
* Listing of files from a specified folder using a manually supplied folder ID.

### Notes

* Initial implementation required editing the source code to change the target folder.

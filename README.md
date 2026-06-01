# WhatsApp Group Contacts Extractor & Downloader

A powerful and lightweight Google Chrome extension built to help you extract, view, and export members' contact information from your WhatsApp Web groups. It automatically identifies details like country names, country calling digits, phone numbers, and saving names, and organizes them into structured tables.

You can download your data in clean **CSV** or fully structured **Excel (.xls)** spreadsheet formats without facing formatting issues or broken long phone numbers.

## 🚀 Features

* **Detailed Data Extraction:** Extracts Group Name, Country Code Digit (e.g., `+92`), Country Code (e.g., `PK`), Country Name, Formatted Phone, Raw Phone, Saved Contact Name, Public Display Name, Business Status, Admin Status, and custom tags/labels.
* **Smart Country Detection:** Contains a built-in map database that automatically matches numbers to their correct country and prefix.
* **Format Protection for Excel:** Explicitly formats large phone numbers as Text strings inside Excel sheets so numbers do not get truncated or turned into scientific notation formulas (like `9.23E+11`).
* **Multi-Layer Extraction Engine:** 1. Primary: Fetches structured records instantly from WhatsApp's underlying IndexedDB storage tables.
2. Secondary: Accesses runtime browser memory models.
3. Fallback: Automated DOM UI scraping that reads loaded profile views directly from your screen layout if database storage blocks are locked.
* **Easy to Use Popup UI:** Clean user control window with live logging status reports showing exactly how many contact files have been successfully read and processed.

## 📁 Project Structure

* `manifest.json` — The extension configuration file defining permissions (`activeTab`, `scripting`, `downloads`), icon alignments, and setup contexts.
* `content.js` — The main engine script injected into WhatsApp Web that handles cross-source extractions, parses text strings, maps country arrays, and builds rows.
* `background.js` — The background worker script that manages standard file creation and downloading paths.
* `popup.html` & `popup.js` — The custom frontend window interface containing configuration options (CSV/Excel format options, logging window, control triggers).

## 🛠️ How to Install and Run Locally

1. **Download the Project:** Clone this repository or download the source code files into a single folder on your computer.
2. **Open Extensions Page:** Open your Google Chrome browser and type `chrome://extensions/` in your address bar.
3. **Turn on Developer Mode:** Toggle the **Developer mode** switch on the top right-hand side corner of the page.
4. **Load the Project:** Click the **Load unpacked** button visible in the top left-hand side section.
5. **Select Folder:** Select the source directory folder containing your extension files.
6. **Extract Data:** Open [web.whatsapp.com](https://web.whatsapp.com), select any group chat, open the extension icon from your browser tray toolbar, choose your desired file export format, and click **Extract**.

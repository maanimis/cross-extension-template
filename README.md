# Cross Extension Template

A cross-browser extension template using **Manifest V2 (MV2)** with TypeScript and Webpack.

## Features
- Uses **Manifest V2** for compatibility with legacy browsers.
- Supports **TypeScript** for better development experience.
- Bundles with **Webpack** for optimized output.
- Uses **browser-polyfill.js** for cross-browser support.
- Includes **Husky** for Git hooks integration.
- Supports **Prettier** for code formatting.
- Provides an easy build system with **npm scripts**.

## Installation

Clone this repository and install dependencies:
```sh
git clone https://github.com/maanimis/cross-extension-template
cd cross-extension-template
npm install
```

## Building

To build the extension for production:
```sh
npm run build
```
This will compile TypeScript, bundle the scripts, and clean the `dist/` folder.

## Loading the Extension in Chrome/Firefox
1. Go to `chrome://extensions/` (for Chrome) or `about:debugging#/runtime/this-firefox` (for Firefox).
2. Enable **Developer Mode** (Chrome) or click **Load Temporary Add-on** (Firefox).
3. Click **Load Unpacked** and select the `build/` directory.

## Manifest Details
This extension is built with **Manifest V2**, which includes:
- **browser_action**: Defines a popup UI.
- **background scripts**: Includes `background.js` for persistent background tasks.
- **content scripts**: Injects `content_script.js` into web pages.
- **permissions**: Uses `storage`, `activeTab`, `webRequest`, and more.

## Cross-Browser Support
This extension uses **browser-polyfill.js**, which provides a unified API across different browsers.

## License
This project is licensed under the MIT License.


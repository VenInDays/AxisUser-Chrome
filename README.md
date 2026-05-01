# AxisUser Chrome

Modified Chrome Android APK with user.js and Tampermonkey script support.

## Features

- **User.js Support** - Load `.user.js` scripts automatically from `/sdcard/AxisUser/scripts/`
- **Tampermonkey Compatibility** - Full GM_* API support including:
  - `GM_getValue()` / `GM_setValue()` / `GM_deleteValue()`
  - `GM_addStyle()` - Inject CSS into pages
  - `GM_xmlhttpRequest()` - Cross-origin HTTP requests
  - `GM_notification()` - Show notifications
  - `GM_openInTab()` - Open URLs in new tabs
  - `GM_setClipboard()` - Copy to clipboard
  - `GM_registerMenuCommand()` - Menu commands
  - `GM_info` - Script metadata
- **Extensions on Android** - Chrome extension support enabled via command-line flags
- **AxisUser Script Manager** - Built-in Activity to manage your scripts
- **Changed Package Name** - `com.axisuser.chrome` - No conflict with original Chrome
- **Full Signed** - APK Signature Scheme v2 + v3

## Installation

1. Download the latest APK from [Releases](https://github.com/VenInDays/AxisUser-Chrome/releases)
2. Enable "Install from unknown sources" in Android settings
3. Install the APK
4. You can install this alongside the original Chrome (different package name)

## Usage

### Method 1: Place scripts in the scripts folder
1. Create the folder `/sdcard/AxisUser/scripts/` on your device
2. Place your `.user.js` files there
3. Open AxisUser Chrome - scripts will be available

### Method 2: Use the AxisUser Activity
1. Open "AxisUser" from your app drawer
2. Tap "Create Scripts Directory"
3. Place your `.user.js` files in `/sdcard/AxisUser/scripts/`

### Using chrome://flags
Open `chrome://flags` in AxisUser Chrome and search for:
- `extensions` to manage extension-related flags
- `user scripts` to manage user script settings

## Chrome Flags Enabled

The following command-line flags are pre-configured in `assets/chrome-command-line`:

```
--extensions-on-android-2
--enable-features=ExtensionsToolbarMenu,ExtensionsMenu,ExtensionToolbarRedesign,ExtensionsSidebarUi
--disable-features=ExtensionsToolbarMenuHidden
--enable-extension-apis
--enable-user-scripts
--allow-file-access-from-files
--disable-extensions-file-access-check
--enable-webstore-extension-install
--load-extension=/sdcard/AxisUser/scripts
```

## Example Script

```javascript
// ==UserScript==
// @name         My First Script
// @namespace    axisuser
// @version      1.0
// @description  Example script for AxisUser Chrome
// @author       You
// @match        *://*.example.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('body { background: #1a1a2e !important; }');
    console.log('AxisUser script loaded!');
})();
```

## Mod Details

| Property | Value |
|----------|-------|
| Base Version | Chrome 138.0.7204.179 |
| Original Package | com.android.chrome |
| Modded Package | com.axisuser.chrome |
| Android Min SDK | 26 (Android 8.0) |
| Signature | v2 + v3 (Full Sign) |
| Mod Name | AxisUser |

## Disclaimer

This is a modified version of Google Chrome for Android. Chrome is a trademark of Google LLC. This modification is for educational and personal use only.

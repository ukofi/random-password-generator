# Random Password Generator

A clean, browser-based password generator built with vanilla HTML, CSS, and JavaScript. Generates a secure 12-character random password at the click of a button and copies it to the clipboard instantly.

## Features

- Generates a random 12-character password using uppercase letters, lowercase letters, numbers, and special characters
- One-click copy to clipboard using the copy icon
- Toast notification confirms when the password has been copied
- Fully responsive layout with clean UI
- No dependencies — pure HTML, CSS, and JavaScript

## Character Set

Passwords are generated from the following character pool:

```
0-9  a-z  A-Z  ! @ # $ % ^ & * ( )
```

This gives a character pool of 72 characters, producing over 19 trillion possible combinations for a 12-character password.

## How to Use

1. Clone or download the repository
2. Open `index.html` in your browser
3. Click **Generate Password** to create a new password
4. Click the **copy icon** to copy the password to your clipboard
5. A notification will confirm the password has been copied

## How to Run Locally

```bash
# Clone the repository
git clone https://github.com/ukofi/random-password-generator.git

# Navigate into the folder
cd random-password-generator

# Open in your browser
open index.html
```

No build tools or installations required.

## Project Structure

```
random-password-generator/
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
└── script.js       # Password generation and clipboard logic
```

## Code Highlights

**Password Generation Logic (`script.js`)**

The `createPassword()` function loops 12 times, each iteration selecting a random character from the full character set using `Math.floor(Math.random() * chars.length)`.

**Clipboard Copy (`script.js`)**

The copy icon uses the `navigator.clipboard.writeText()` API for modern browsers, with a `document.execCommand('copy')` fallback for older devices. The `setSelectionRange(0, 99999)` call ensures compatibility with mobile devices.

**Toast Notification (`style.css`)**

The alert container uses a CSS `right` property toggle — sliding off-screen at `-300px` when the `.active` class is applied, and sliding back into view when the class is removed. A `setTimeout` of 2000ms resets the state automatically.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Font Awesome 7 (copy icon)

## Author

**Unathi Kofi** — (https://github.com/ukofi)

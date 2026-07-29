const fs = require('fs');
const path = require('path');

// 1. Read the environment variables that GitHub Actions injected via secrets
const apiBaseUrl = process.env.API_BASE_URL || 'https://default-dev-api.com';
const registrationBaseUrl = process.env.REGISTRATION_BASE_URL || 'https://default-registration.com';

// 2. Define the target path where the frontend will look for this file
const targetPath = path.join(__dirname, '../src/assets/env.js');

// 3. Create the JavaScript content
// We attach these variables to the global `window` object so Angular can read them at runtime
const envConfigFile = `
(function (window) {
  window.__env = window.__env || {};
  window.__env.API_BASE_URL = '${apiBaseUrl}';
  window.__env.REGISTRATION_BASE_URL = '${registrationBaseUrl}';
})(this);
`;

// 4. Ensure the assets directory exists
const targetDir = path.dirname(targetPath);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 5. Write the file to disk
fs.writeFileSync(targetPath, envConfigFile, 'utf8');

console.log(`Environment file generated successfully at ${targetPath}`);

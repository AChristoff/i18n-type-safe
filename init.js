const fs = require('fs');
const path = require('path');

// Directory and file names
const folderName = '/';
const fileName = 'i18n.tsx';

// Create the folder
fs.mkdirSync(path.join(__dirname, folderName), { recursive: true });

// Create the file inside the folder
const filePath = path.join(__dirname, folderName, fileName);
fs.writeFileSync(filePath, `//content`);

console.log(`Created folder '${folderName}' and file '${fileName}'`);

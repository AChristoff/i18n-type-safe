const fs = require('fs');
const path = require('path');

// Function to create directory if it doesn't exist
function ensureDirSync(dirpath) {
    if (!fs.existsSync(dirpath)) {
        fs.mkdirSync(dirpath, { recursive: true });
    }
}

// Function to copy a file
function copyFileSync(source, target) {
    let targetFile = target;

    // If target is a directory, a new file with the same name will be created
    if (fs.existsSync(target) && fs.lstatSync(target).isDirectory()) {
        targetFile = path.join(target, path.basename(source));
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

// Paths for the files and directories
const projectDir = path.resolve(process.cwd());
const localesDir = path.join(projectDir, 'locales');
const typesDir = path.join(projectDir, '@types');
const sourceLocalesDir = path.join(__dirname, 'locales/en.ts');
const sourceTypesDirI18next = path.join(__dirname, '@types/i18next.d.ts');
const sourceTypesDirLocals = path.join(__dirname, '@types/locals.d.ts');

// Create directories and copy files
ensureDirSync(localesDir);
ensureDirSync(typesDir);
copyFileSync(sourceLocalesDir, localesDir);
copyFileSync(sourceTypesDirI18next, typesDir);
copyFileSync(sourceTypesDirLocals, typesDir);

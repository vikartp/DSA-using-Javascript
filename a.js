const fs = require('fs');
const path = require('path');

const folderName = 'test';
const fileName = 'example.json';  // Specify the filename with .json extension

// Combine __dirname, folderName, and fileName to get the full path
const filePath = path.join(__dirname, folderName, fileName);

// JSON content to write to the file
const jsonData = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

// Create the folder if it doesn't exist
if (!fs.existsSync(path.join(__dirname, folderName))) {
    fs.mkdirSync(path.join(__dirname, folderName));
}

// Write the JSON content to the file with indentation for readability
fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
        console.error('Error writing JSON file:', err);
    } else {
        console.log(`JSON file "${fileName}" has been created successfully at: ${filePath}`);
    }
});

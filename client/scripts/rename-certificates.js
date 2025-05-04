import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const certificatesDir = path.join(__dirname, '../public/certificates');

// Function to rename files
function renameFiles() {
  fs.readdir(certificatesDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach(file => {
      if (file.endsWith('.png')) {
        const newName = file.replace(/\s+/g, '-');
        const oldPath = path.join(certificatesDir, file);
        const newPath = path.join(certificatesDir, newName);

        if (oldPath !== newPath) {
          fs.rename(oldPath, newPath, (err) => {
            if (err) {
              console.error(`Error renaming ${file}:`, err);
            } else {
              console.log(`Renamed: ${file} -> ${newName}`);
            }
          });
        }
      }
    });
  });
}

renameFiles(); 
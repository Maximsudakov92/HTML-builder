const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');
 
fs.readdir(folderPath, { withFileTypes: true }, (err, items) => {
  items
    .filter(el => el.isFile())
    .forEach(item =>  fs.stat(`${folderPath}/${item.name}`, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`${path.basename(`${folderPath}/${item.name}`, `${path.extname(item.name)}`)} - ${path.extname(item.name).slice(1)} - ${stats.size / 1000}kb`);
    }));
});






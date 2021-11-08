const fs = require('fs');
const path = require('path');
const { copyFile } = require('fs/promises');

fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
  if (err) {
    fs.rmdir(path.join(__dirname, 'files-copy'), { recursive: true, force: true }, (err) => {
      if (err) {
        return console.log(err);
      }
    });
  }
});

fs.mkdir(path.join(__dirname, 'files-copy'), () => {});

fs.readdir(path.join(__dirname, 'files'), (err, items) => {
  
  items.forEach(elem => copyFile(`${__dirname}/files/${elem}`, `${__dirname}/files-copy/${elem}`));
});
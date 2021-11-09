const fs = require('fs');
const path = require('path');
const { mkdir, copyFile, rm } = require('fs/promises');

async function copyFolder() {
  await rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true });

  await mkdir(path.join(__dirname, 'files-copy'), () => {});

  fs.readdir(path.join(__dirname, 'files'), (err, items) => {
    items.forEach(elem => copyFile(`${__dirname}/files/${elem}`, `${__dirname}/files-copy/${elem}`));
  });
}

copyFolder();
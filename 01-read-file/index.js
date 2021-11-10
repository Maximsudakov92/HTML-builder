const fs = require('fs');
const path = require('path');
const { Stream } = require('stream');
const notes = './text.txt';
const notePath = path.join(__dirname, notes);


const readableStream = fs.createReadStream(notePath);
readableStream.on('readable', () => {
  console.log(`${readableStream.read()}`);
  
});

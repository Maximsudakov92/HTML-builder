const process = require('process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const notePath = path.join(__dirname);


fs.writeFile(`${notePath}/text.txt`, ``, function (err) {
  if (err) throw err;
});


const input = process.stdin;
const output = process.stdout;

const rl = readline.createInterface({ input, output });
const writeableStream = fs.createWriteStream(`${notePath}/text.txt`);

console.log('Write your message?');

rl.on('line', (text) => {
  if(text === 'exit') {
    console.log('Goodbye');
    rl.close();
  }
  writeableStream.write(`${text}\n`);
});

process.on('exit', () => {
  console.log(`Goodbye`);
});




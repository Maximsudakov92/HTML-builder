const fs = require('fs');
const path = require('path');


fs.access(`${__dirname}/project-dist/bundle.css`,  fs.constants.F_OK,  (err) => {
  if (!err) {
    fs.unlink(`${__dirname}/project-dist/bundle.css`, () => {});
  } 
});

fs.readdir(path.join(__dirname, 'styles'), (err, items) => {
  let concatData;
  
  items.filter(el => path.extname(`${__dirname}/styles/${el}`) === '.css')
    .forEach(item =>  fs.readFile(`${__dirname}/styles/${item}`,'UTF-8', (err, data) => {
      console.log(item,'forEach');
      concatData += data;
      fs.writeFile(`${__dirname}/project-dist/bundle.css`, concatData, function (err) {
        if (err) throw err;
      })
  }))
});



const fs = require('fs');
const path = require('path');

//File system
//add folder example
// fs.mkdir(path.join(__dirname, 'test_folder'), (err) => {
//   if (err) throw new Error(err);
//
//   console.log('folder added');
// });

//add file
// fs.writeFile(path.join(__dirname, 'test_folder', 'test_file.txt'), 'Hello from Node', err => {
//   if(err) throw new Error(err);
//
//   console.log('file created');
//
//   fs.appendFile(path.join(__dirname, 'test_folder', 'test_file.txt'), ' from append file', err => {
//     if (err) throw new Error(err);
//
//     console.log('file edited');
//   })
// });

//read file
// fs.readFile(path.join(__dirname, 'test_folder', 'test_file.txt'), {encoding: 'utf-8'}, (err, data) => {
//   if (err) throw new Error(err);
//
//   console.log(data);
// });

//rename
// fs.rename(
//   path.join(__dirname, 'test_folder', 'test_file.txt'),
//   path.join(__dirname, 'test_folder', 'test_file_renamed.txt'),
//   err => {
//     if (err) throw new Error(err);
//
//     console.log('file renamed');
//   }
// );

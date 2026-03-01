//3. CSV String to 2D Array
//
//Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array. 

//analysis;
// string with comma ---> 2D array.

//solution;
//
//Name,Age,Department
//John Doe,30,Sales
//Jane Smith,25,Engineering


const fs = require('fs');

const data = fs.readFileSync('./data.csv', 'utf8');
const rows = data.split('\n');

console.log(rows);
//this is the output.
//[
  'Name,Age,Department',
  'John Doe,30,Sales',
  'Jane Smith,25,Engineering',
  '',
  ''
]

// here we used fs as a package to get to the filename
// then we split the lines at each /n which means take rows put it as item inside the array that generated using split.




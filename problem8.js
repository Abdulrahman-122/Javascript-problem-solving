// Write a JavaScript program to
//  calculate multiplication and division of two numbers 
// (input from the user).  

//take two numbers from the user
// calculate ; multiplication + division for them

// node environment first
// let firstnum=parseInt(process.argv[2]);
// let secondnum=parseInt(process.argv[3])
// function Multi_divi(firstnum,secondnum){
//     let multiplication=firstnum*secondnum
//     let Division=firstnum/secondnum;
//     console.log(`After Multipy them the result is ;${multiplication}`);
//     console.log(`After divide them the result is ;${Division}`)

// }

// Multi_divi(firstnum,secondnum);

// output;
//  node problem8.js 1000 90
// After Multipy them the result is ;90000
// After divide them the result is ;11.11111111111111

// browser envionment second
function Multiplyby(){   
let firstnum=document.getElementById('Firstnumber').value  ;
let secondnum=document.getElementById('Secondnumber').value  ;

document.getElementById('result').innerHTML=firstnum*secondnum;
      }
function Divideby(){   
let firstnum=document.getElementById('Firstnumber').value  ;
let secondnum=document.getElementById('Secondnumber').value  ;

document.getElementById('result').innerHTML=firstnum/secondnum;
      }

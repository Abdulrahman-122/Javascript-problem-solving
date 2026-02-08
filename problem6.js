// 8. Random Integer Guess Game

// Write a JavaScript program where the program takes a random integer between 1 and 10
//and the user is then prompted to input a guess number. 
// The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  

// Algorthim;
// program takes ->random  integer between 1,10
// user enter a guess number
// if input number=guess number -> ouput('Good Work')
// this is if you want to run code inside node environment 
// const Guess=process.argv[2];
// const Match_input_guess=(Guess)=>{
//     const random_num=Math.floor(Math.random()*11);
//     console.log(random_num)
//     if (random_num===parseInt(Guess)){
//         console.log('Good Work')
//     }
//     else{
//         console.log('Try again man!!!!!');
//     }
// }
// Match_input_guess(Guess);

// if you want to run code in browser environment; you need to problem6.html  with below code ;
var num = Math.ceil(Math.random() * 10);
console.log(num);

var gnum = prompt('Guess the number between 1 and 10 inclusive');

if (gnum == num) {
  console.log('Matched');
} else {
  console.log('Not matched, the number was ' + num);
}

// Math.ceil -> return a number between 0,1
// Math.floor()=> return a number that near to the lowest integer number

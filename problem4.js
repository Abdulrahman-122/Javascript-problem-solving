// 6. Check Leap Year (Gregorian Calendar)

// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

// Year: 1900

// Divisible by 4? (so normally leap)

// Ends with 00? → cancel leap

// Divisible by 400? → no re-add
//  NOT a leap year

// Year: 2000

// Divisible by 4?

// Ends with 00? → cancel leap

// Divisible by 400? → add leap back
// Leap year

// Year: 2024

// Divisible by 4?

// Ends with 00?

// Leap year


// Rule;
// Rule 1 (basic rule)

// If a year is divisible by 4 → leap year

// Rule 2 (exception)

// If the year ends with 00 → NOT a leap year

// Rule 3 (exception to the exception)

// If the year ends with 00 AND is divisible by 400 → leap year



const input_year= process.argv[2];
function check_leap_year(input_year){
    if(input_year%4===0&&input_year%100!==0||(input_year%400===0)){
        console.log( `Yes this year ${input_year} is a leap year.`);
    }
    else{
        console.log( `No, this year ${input_year} isn't a leap year.`);
    }
}
check_leap_year(input_year)

// or we can simply do this;
// const input_year= process.argv[2];
// function check_leap_year(input_year){
//     return (input_year%100===0)?(input_year%400===0):(input_year%4===0);            
//     }                
// console.log(check_leap_year(input_year))

// // this condition is like this;
// if (input_year % 100 === 0) {
//   return input_year % 400 === 0;      //if it true => this means it's a leap year
// } else {
//   return input_year % 4 === 0;       // if it true => this means it's a  leap year
// }


// 
// output;
// node problem4.js 2036
    // Yes this year 2036 is a leap year.
// node problem4.js 2028
    // Yes this year 2028 is a leap year.



    
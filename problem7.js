// . Days Left Before Christmas

// Write a JavaScript program to calculate the days left before Christmas.  
//Christmas -> 25 december 
// how many days are lift untill 25 december
const  Left_days_to_christmas=()=> {
    const day=new Date();
    // console.log(day)
    const cmas=new Date(day.getFullYear(),11,25);   
    // console.log(cmas)
    // let's check if the day we search for(25 of decemeber) has passed then we need to set new year and estimate how many days are lift to get it
    if (day.getMonth()===11&&day.getDate()>25){
        cmas.setFullYear(cmas.getFullYear+1);  // here we add new year to the current year of cmas(christmas) to get the new lift day untill got it
    }
    const one_day_in_milliseconds=24*60*60*1000;   // 60 for minutes,60 for seconds,1000 for milliseconds
    console.log(Math.ceil((cmas.getTime()-day.getTime())/(one_day_in_milliseconds))+" days lift to get to chirstmas.");
    }
Left_days_to_christmas()

// this is the output without Math.ceil()=> 319.0847892708333 days lift to get to chirstmas 
// -------------------with it            => 320 days lift to get to chirstmas.

// in the line of new Date(day.getFullYear()....) => we got the whole date for the day 25 of month 12 which crossponding to christmas 
//day.getMonth-> return the month of ourday in number
//
// console.log(day.getMonth()) // this return the month from (0;11) 
//     console.log(day.getDay())     // getDay return the day of the week => 0;6
//     console.log(day.getTime())     // this function return time in millisecond at the moment I was write this code the time was; 1770581021061
//


// output; at the moment I was running this program.
//node problem7.js 
// 320 days lift to get to chirstmas.

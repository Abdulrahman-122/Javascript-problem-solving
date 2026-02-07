// Find Years When Jan 1 is Sunday (2014?2050)

// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 

// if 1st January===sunday  from 2014&&2050

// for year = 2014 to 2050 do
    // create a Date object for 1st January of year
    // if day of the week of Date object is Sunday then
        // print year
    // end if
// end for

console.log('------------------------')
for (var year=2014;year<=2050;year++){

    let d=new Date(year,0,1)    // this represent yearnumber from for loop,0 -> represent  first month(January) , 1 -> first day of the month
    if ( d.getDay()===0)           // d.getDay() return the number of the day of the week(0;6) -> 0 stands for Sunday
    {
        console.log(`This year ${year} its 1st Jan is Sunday`);
    }
    
}
console.log('------------------------')




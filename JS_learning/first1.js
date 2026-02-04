1. Display Current Day and Time

Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
----
    solution

var today=new Date();        // Date is the class contain ; year,month,day,hour,min,sec,milisecond

var day=today.getDate();    //this return the number of the day (0(sunday);6(saturday))

var daylist=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
console.log(`Today is ${daylist[day]}.`)

var hour=today.getHours()
var minute=today.getMinutes()
var second=today.getSeconds()
console.log(hour)
console.log(minute)
console.log(second)
var prepand=(hour>=12)?"PM":"AM";
console.log(prepand)
hour=(hour>=12)?hour-12:hour;
console.log(hour)  //render the hours from 0;12 instead of 0;24 
if(hour==='12'&&prepand==='PM'){
    if(minute===0&&second===0){
        hour=12;
        prepand='Noun';
    }
    else{
        hour=12;
        prepand='PM';
    }
}
if(hour===12&&prepand==="AM"){
    if(minute===0&&second===0){
        hour=12;
        prepand='midnight';
    }
    else{
        hour=12;
        prepand='AM';
    }
}
console.log(`Today is ${daylist[day]}.`);
console.log(`Current Time : ${hour} ${prepand} :${minute} :${second}.`);



notes to understand problem;

// Today is : Thursday.
// Current Time : 7 PM : 25 : 10
// 11:59:59 AM  → AM
// 12:00:00 PM  → NOON  ← first condition
// 12:00:01 PM  → PM    ← second condition
// 12:30:00 PM  → PM
// 12:59:59 PM  → PM










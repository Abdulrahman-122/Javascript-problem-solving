// the problem;
// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/y

//solution;

var date=new Date()
var day=date.getDay();
var month = date.getMonth();
var year=date.getFullYear();
if (month<10){
    month="0"+month;
}
if (day<10){
    day="0"+day;
}
console.log(`Current date:  ${month}-${day}-${year}.`)

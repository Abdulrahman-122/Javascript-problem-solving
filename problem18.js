//20. Check if One Integer is Positive and One is Negative
//
//Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

let Num1=(Number(process.argv[2]));
let Num2=(Number(process.argv[3]));

const  check_type=(Num)=>{
	if (Number.isNaN(Num)){
		return `${Num} This is invalid`;}
	if (Math.sign(Num)===1){
	  return `${Num} is positive`;}
	else if (Math.sign(Num)=== -1) {
	  return `${Num} is Negative`;}

	else {
	  return "Number is 0";
}
}
console.log(check_type(Num1));
console.log(check_type(Num2));


										        	
										        	

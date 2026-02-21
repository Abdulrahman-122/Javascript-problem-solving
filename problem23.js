//I25. Check if Number is Multiple of 3 or 7

//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  

//check if the number is multiple of 3 or 7

//
//


let number=Number(process.argv[2]);

let check_multiple= (num)=>{
	if(num%3===0 || num%7===0){
		console.log(`yeah actually this num ${num} is multiple`);}

	else{
		console.log('sorry this number is not multiple by either 3 or even 7');
}
}

check_multiple(number);








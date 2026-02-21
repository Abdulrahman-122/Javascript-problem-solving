//28. Check if Two Integers are in Range 50?99

//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range. 


// analysis;
//  two integer values between(50...99)
	// if yes return true
	// either return flase

let first_int=Number(process.argv[2]);
let second_int=Number(process.argv[3]);

const check_between=(int1,int2)=>{

	if((int1>=50 && int1<=99)||(int2>=50 &&int1<=99)){
	return true

}
	else{
	return "No,one of them located at the range";
	
}


}


console.log(check_between(first_int,second_int));




 

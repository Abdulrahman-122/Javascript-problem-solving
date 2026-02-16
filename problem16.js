//18. Check if Number or Sum is 50
//
//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  


let Num1=Number(process.argv[2]);
let Num2=Number(process.argv[3]);

const check_50=(Num1,Num2)=>{
	if (Num1===50 | Num2 ===50){
		return true}
	else if (Num1+Num2===50){
	return true;}
	else{
	return false;}
}

console.log(check_50(Num1,Num2));






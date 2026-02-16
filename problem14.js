//16. Sum Two Integers (Triple if Equal)
//
//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. 


let Num1=Number(process.argv[2]);
let Num2=Number(process.argv[3]);

const get_sum=(Num1,Num2)=>{
	if (Num1===Num2){
		return (Num1+Num2)*3;
}
	else{
		return Num1+Num2};
}
console.log(get_sum(Num1,Num2));





//17. Difference Between Number and 19 (Triple if >19)
//
//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  

let Num=Number(process.argv[2]);

const get_diff=(Num)=>{
	if (Num>19){
	return (Num-19)*3;}
	else{
	return 19-Num;
}
}

console.log(get_diff(Num));









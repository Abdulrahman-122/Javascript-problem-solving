//15. Difference Between Number and 13
//
//Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  


let Number=process.argv[2];
const get_difference= Number =>{
	if (Number >13){
		return (Number-13)*2
}
	else{
	return 13-Number ;
}


}
console.log(get_difference(Number));









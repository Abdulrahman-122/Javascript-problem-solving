//27. Check if String Starts with 'Java'
//
//Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise. 

//analysis;
// check if a string start with Java
// 


let string=process.argv[2];

const check_Java= (str)=>{

	if(str.length<4){
		return "Sorry Enter a string that start with Java";}
	if (str.slice(0,4)==="Java"){
	 	return true; 
}
	else{
		return false;
}
}
console.log(check_Java(string));














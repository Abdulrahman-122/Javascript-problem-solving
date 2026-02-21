//26. Add Last 3 Characters to Front and Back of String

//Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.  


// add last 3 chars to the fron+back of str
// string length >3 or more


let string=process.argv[2];

let add_3chars_back_front=(str)=>{
	if (str.length > 3){ 		
	         let last_3_chars=str.slice(-3);
	         return last_3_chars+str+last_3_chars;
}
       else{
		return "Sorry this string is less than 3 characters";	
}
}

console.log(add_3chars_back_front(string));





//24. Add First Character to Front and Back of String
//
//Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back. 


// add first character -> front,back of stri
// create string with first character of given string ->put these first character at back + front of that string.


let given_string=process.argv[2];

let add_front_back=(given_string)=>{
	let first_char=given_string.slice(0,1);
	let modified_string=first_char+given_string+first_char;
	return modified_string;
 }

console.log(add_front_back(given_string));







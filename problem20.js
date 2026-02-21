//22. Remove Character at Specified Position in String
//
//Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. 

// remove a character at specific position
// at a string
// return the modified string


let string=process.argv[2];
let position=Number(process.argv[3]);
const Modified_string=(string,postion)=>{
	return string.slice(0,position)+string.slice(position+1);
}
console.log(Modified_string(string,position));










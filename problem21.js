//23. Swap First and Last Characters in String
//
//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string le

// swap -> first , last char of the string
//new string -> from a given string 
// change the position of first with last character.


let string=process.argv[2];

let swap_word=(string)=>{
	return string.slice(-1)+string.slice(1,-1)+string.slice(0,1);
}

console.log(swap_word(string));




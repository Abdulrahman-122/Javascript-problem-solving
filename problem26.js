//2. Check Palindrome
//
//Write a JavaScript function that checks whether a passed string is a palindrome or not?
//
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


// check Palindrome
// palindrome -> word , phrase , sequence -> if you read it from backward it should be the same if you read  it from forward.

let string=process.argv[2];

let check_palindrome=(string)=>{
	let reverse_string=string.split('').reverse().join('')
	return string===reverse_string?'yes this string is palindrome':'No this is not palindrome';	
}
console.log(check_palindrome(string));

//output;
// node problem26.js WWWWWWW
//yes this string is palindrome








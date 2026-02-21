//1. Reverse Number
//
//Write a JavaScript function that reverses a number.
//
//Example x = 32243;
//Expected Output : 34223

let Num=Number(process.argv[2]);

function reverse_number(Num){
	return Number(String(Num).split('').reverse().join(''));

}

console.log(reverse_number(Num));

// String(num) --> convert num into string 
// split('') => split number at no space (split num into array of each number)
//  reverse() -> reverse the array that be made from this number
// join('') => join these array or reversed number in good  order.





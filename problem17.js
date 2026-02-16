//19. Check if Integer is Within 20 of 100 or 400
//
//Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

let Num=Number(process.argv[2]);

const  check_distance=(Num)=>{
	if(Math.abs(Num-100<= 20)) 
		{return 'Number is within 20 of 200';}

 	else if(Math.abs(Num-400<=20)){
		return 'Number is within 20 of 400';}
	else{
		return "this is number is invalid";}

}
console.log(check_distance(Num));



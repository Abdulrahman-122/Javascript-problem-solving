// 11. Convert Temperatures Between Celsius and Fahrenheit

// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C 

const temp=parseInt(process.argv[2])

function Fahrenheit_Celsius(temp){
  const c= (temp-32)*(5/9);
  console.log(`your Temp in Celsius= ${c}\xB0C degrees`)

}
function Celsius_Fahrenheit(temp){
    const f= (temp/5)*9+32;
    console.log(`your Temp in Fahrenheit= ${f}\xB0F degrees`)
    
}
Fahrenheit_Celsius(temp);
Celsius_Fahrenheit(temp);

// \xB0 -> degrees
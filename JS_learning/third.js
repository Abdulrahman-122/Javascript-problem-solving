// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

let side1,side2,side3;
function Area_Triangle(side1,side2,side3){
    let s=(side1+side2+side3)/2;
    let area=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
    console.log(area);
}

Area_Triangle(5,6,7)


// the output; 14.696938456699069



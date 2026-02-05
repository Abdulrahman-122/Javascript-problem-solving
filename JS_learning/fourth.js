//Rotate String 'w3resource' Periodically
//Write a JavaScript program to rotate
//the string 'w3resource' in the right direction.
//This is done by periodically removing one letter from the string end and attaching it to the front.  
// steps to run this program
    // run fourth.html in browser mode using live server or whatever server you want
    // then go to the fourth.js file and hover on it using your mouth then return to browser you will see how text is rotated in reverse direction like an animation .

    

      
// solution;

// function animate_string(id) {
//     var element = document.getElementById(id);

//     if (!element) {
//         console.error("Element with id '" + id + "' not found");
//         return;
//     }

//     var textNode = element.childNodes[0];   // this return the text inside the html element 
//     var text = textNode.data;  //return the data just as the textNode return text.data='data' so we want to return this data it self. so we use text.data
//     setInterval(() => {
//         text= text[text.length-1]+text.substring(0,text.length-1);  // this return  the last character + the rest of the string into the html element ; 
//         textNode.data=text;
//         return text;
//     },100);
// }
// animate_string('Abdulrahman');



// this solution is called using Algorithm  but this solution can't rotate the word on the screen of the browser it instead reverse it at once 
// let string='w3resource';
// string = 'Abdulrahman';
// function  rotate_string(string){

//     let new_string='';
//     for (let  i=string.length-1;i>=0;i--){
        
//         new_string+=string[i];

//     }
//     return new_string;
// }

// console.log(rotate_string(string));

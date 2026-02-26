// <!-- 4. Get Link Attributes

//Here is a sample HTML file with a submit button. 
//Write a JavaScript function to get the value of the href, hreflang, rel,
//target, and type attributes of the specified link. -->

function getAttributes(){
    let v=document.getElementById('w3r').href;
    alert('The value of the href attribute is:'+v)
   let u= document.getElementById('w3r').hreflang;
   alert("The value of the hreflang is :"+u) 
   let n=document.getElementById('w3r').rel;
   alert('The value of the rel is :'+n)
   let m=document.getElementById('w3r').target;
   alert('The value of the target:'+m) 
   let i=document.getElementById('w3r').type;
   alert('The value of type is :'+i)

   
}
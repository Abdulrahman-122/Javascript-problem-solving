// 2. Get Form Values

// Write a JavaScript function to get the values of First and Last names of the following form.


function get_form_value(){
    const x = document.getElementById('form1');
    for (var i=0;i<x.length;i++){
        if (x.elements[i].value!='submit'){
            alert(x.elements[i].value)
        }
    }
}


// 14. Get File Extension of Filename

// Write a JavaScript exercise to get the filename extension.

// extract 
    //filename extension 

const filename=process.argv[2]

function Extract_extension(filename){
    const split_filename=filename.split('.')
    console.log(split_filename)
    const extension=split_filename[1]
    console.log(`this is the extension of filename:${extension}`)
    
}
Extract_extension(filename)


// output;
//node problem11.js problem10.js
// [ 'problem10', 'js' ]
// this is the extension of filename:js
// 
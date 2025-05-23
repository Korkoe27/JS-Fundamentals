// Write a script that prints a message depending of the number of arguments passed:

// If no arguments are passed to the script, print “No argument”
// If only one argument is passed to the script, print “Argument found”
// Otherwise, print “Arguments found”
// You must use console.log(...) to print all output
// You are not allowed to use var


const { argv } = require('node:process');

// function checkArguments(args){
//     if (args.count() >= 2){
//         console.log("Arguments found")
//     }else if(args.count() === 1){
//         console.log("Argument found")
//     } else if(typeof args === undefined){
//         console.log("No Argument")
//     }
// }


function checkArguments(val){
    sol =  val + 1;

    return sol;
}
argv(checkArguments());
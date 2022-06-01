/*
1.
"==" : it is used to compare whether the variables are same or not.
"===" : it is used to compare whether the variables are same or not and it also 
checks the datatype 
*/ 



const a=10,b=20;
let c = 10 , d = '10';
if(a == b)
{
    console.log("a & b are same");
}
else
{
    console.log("a & b are not same");
}
if(c === d)
{
    console.log("c & d are same");
}
else
{
    console.log("c & d are not same");
}

/*
spread operator : 
spread operator is used to allows to expand the data into individual elements.
ex: arrays.
 */


let e = [2,4,1,3,5,6];

let res = e.filter(x => x%2 == 0);
console.log(...res);


/*
 var : var is a keyword which is accessible in the local and global scobe.
        
 let : let is a keyword which is used to create temporary variables.
        by usig let , we can re-declare and re-intialize values.
const : const is a keyword in which we can't redeclare and reinitialize values.
*/

var f = 10;
let g = 20;
const h = 20;

f = 20;
g = 30;
// h = 30;

var f = 30;
// let g = 40; Cannot redeclare block-scoped variable 'g'.
console.log(f); //30
console.log(g); //30
console.log(h); //20
//d1js.js:60 Uncaught TypeError: Assignment to constant variable.

/*
execution context :
execution context is a place that contains the code that is currently running.
in this, the code runs line by line,parsed and stored in memory. after the execution done then the instructions will be removedd to save the space. 
*/


/* 
First class functions:
----------------------
first class functions are functions that we can treat them as variables i.e , 
    - we can pass them as arguments to other functions ,
    - assign them to other variables or 
    - return by other functions.
*/




function add()
{
    // a =10;
    // b =20;
    // return c = a+b;
    // console.log(c);
    return "hello";
    
}
function result(res)
{
    console.log(res());
}

result(add);

/*
Closures :
---------
       A closure is a combination of nested functions and having return.
       it is used to access the outer function's data from inner function.
*/

function add(a,b)
{
    c = a+b;
    return function()
    {
        console.log(c);
    }
}

let addition = new add(10,20);
addition();
function mernStack()
{
    let add = document.getElementById("mern");
    add.innerHTML = "MERN STACK";
}
// mernStack();

let g = document.getElementById("day").innerHTML;
console.log(g);

const d = new Date();

const hr = d.getHours()>12 ?  d.getHours() -12 : d.getHours();
const min = d.getMinutes();
const sec = d.getSeconds();

// var time = document.getElementById("time").innerHTML;
document.write(hr,":"+min,":"+sec);

function changeT()
{
    let change = document.getElementById("change");
    change.innerHTML = "Welcome to elevation academy";
}

function hideText()
{
    let hide = document.getElementById("change");
    hide.style.display = "none";
}


var arr = [0,1,2,3,0,2,0,4,0];

const findZero = arr.filter(x => x == 0);
console.log(findZero.length);

var arr = [1,2,3,4,5,6,7,8,9,10];
let Ecount =0,Ocount=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        Ecount++;
    }
    else
    {
        Ocount++;
    }
}
console.log(Ecount);  //5
console.log(Ocount);  //5

// var str = ["hello"];





let c1 = 0;

// v = [ "a","e","i","o","u"];

let findVowel = string => [...string].filter(c1 => 'aeiou'.includes(c1.toLowerCase())).length;

console.log("vowel count of 'hello':",findVowel('hello'));  //
console.log("vowel count of 'how are you':",findVowel('how are you'));
console.log("vowel count of 'fine':",findVowel('fine'));

//op:vowel count of 'hello': 2
// vowel count of 'how are you': 5
// vowel count of 'fine': 2

//pass by value
function Passbyvalue(a, b) 
{
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass by value 
        function -> a = ${a} b = ${b}`);
}
  
let a = 1;
let b = 2;
console.log(`Before calling Pass by value 
        Function -> a = ${a} b = ${b}`);
  
Passbyvalue(a, b);
  
console.log(`After calling Pass by value 
       Function -> a =${a} b = ${b}`);


//op:
/*Before calling Pass by value 
        Function -> a = 1 b = 2
Inside Pass by value 
        function -> a = 2 b = 1
After calling Pass by value 
       Function -> a =1 b = 2*/

//pass by reference
function PassbyReference(obj) 
{
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;
  
    console.log(`Inside Pass By Reference 
        Function -> a = ${obj.a} b = ${obj.b}`);
}
  
let obj = 
{
    a: 10,
    b: 20
  
}
console.log(`Before calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);
  
PassbyReference(obj)
  
console.log(`After calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);

    //op
/* Before calling Pass By Reference 
    Function -> a = 10 b = 20
 Inside Pass By Reference 
        Function -> a = 20 b = 10
 After calling Pass By Reference 
    Function -> a = 20 b = 10*/

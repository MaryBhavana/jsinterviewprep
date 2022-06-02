//promise

var promise = new Promise(function(resolve, reject)
 {
    const x = "prepbytes";
    const y = "prepbytes"
    if(x === y)
    {
      resolve();
    } 
    else 
    {
      reject();
    }
  });
  promise.then(function () 
  {
          console.log('Success, You are a prepbytian');
  }).catch(function ()
  {
          console.log('Some error has occurred');
 });

 //op :Success, You are a prepbytian

//async and await
 function resolveAfter2Seconds()
  {
    return new Promise(resolve => 
    {
        setTimeout(() =>
        {
            resolve('resolved');
        }, 2000);
    });
  }
  
  async function asyncCall()
  {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
  }
  
  asyncCall();  
  //op: calling "resolved"

  //hoisting example - function hoisting
catName("chase");

function catName(name) {
  console.log("My cat's name is " + name);
}
//op:My cat's name is chase

//hoisting example - variable hoisting
console.log(num); 
var num; 
num = 22; 
console.log(num);
//op: 'undefined'  22

//DOM example
document.getElementById("hello").innerHTML = "hello!!";

//undefined
console.log(s);
var s = 5;
console.log(s); //5
//not defined
// console.log(b);
//NaN
let t = NaN;
console.log(t); //NaN

//arithmetic
var x = 5, y = 10;
var z = x + y;
console.log(z); //15
z = y - x; 
console.log(z);// 5
z = x * y;
console.log(z); // 50
z = y / x; 
console.log(z);//2
z = x % 2;
console.log(z);//1

//comparision
var a = 5, b = 10, c = "5";
var x = a;

console.log(a == c); //true
console.log(a === c); //false
console.log(a == x);//true
console.log(a != b);//true
console.log(a > b);//false
console.log(a < b);// true
console.log(a >= b);//false
console.log(a <= b); //false

if((a != b) && (a < b))
{
    console.log("true 1");
} 
else if((a > b) || (a == b))
{
    console.log("false 1");
}
else if((a < b) || (a == b))
{
    console.log("true 2");
}
else if(!(a < b))
{
    console.log("false 2");
}
else if(!(a > b))
{
    console.log("true 3");
}
//true

//assignment 
console.log(x = y) //10
console.log(x += 1);//11
console.log(x -= 1);//10
console.log(x *= 5);//50
console.log(x /= 5);//10
console.log(x %= 2);//0

//ternary
var c = a > b? a : b; 
console.log(c);
var d = a > b? b : a;
console.log(d);
//10   5

//increment and decrement
var x = 5;
console.log(x++); //5
console.log(++x); //7 
console.log(x--);//7
console.log(--x); //5

//pure functions
function calculatePrice( productPrice ) {
    productPrice * 0.05;
    console.log(productPrice);
}
calculatePrice(10);
//op:10

//callback Hell
function CallbackHell()
{
    setTimeout(()=>
    {
        console.log("function 1");
        setTimeout(()=>
        {
            console.log("function 2");
            setTimeout(()=>
            {
            console.log("function 3");
        
            },5000)
        
        },6000)
    },7000)
}
//op : function 1  function 2  function 3
CallbackHell();

//promise chaining
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result * 3;
});

//op: 10 20

//arrow functions
let myFunction = (a, b) => 
{
    console.log(a * b);

} 
myFunction(3,10);
//op:30
hello = () => {
    console.log("Hello World!");
  }
  hello();
  //op: Hello World!
  

 


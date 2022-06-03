//null undefined

var stu = null;
console.log(stu===stu);
console.log(stu==stu);
console.log(stu);
stu = 10;
console.log(stu);
console.log(stu===stu);
var stu;
console.log(stu===stu);
console.log(stu==stu);
console.log(null==undefined)
console.log(null===undefined)

//local scope ; block scope ; functional scope ; scope chain 

const nameof = "prepbytes";  //global variable
  
function introduceMyself(greet) {
  const audience = "Everyone";  //local variable of introduceMyself
  
  function introduce() {
    console.log(`${greet} ${audience}, This is ${nameof} Learning`);
  }
  
  introduce();
}
  
introduceMyself("Hello");
//op: Hello Everyone, This is prepbytes Learning

//6th

let obj1 =
{
    name: "example1",
    value: [1,2,3,4,5]
}

let obj2 =
{
    name: "example1",
    value: [1,2,3,4,5]    
}
console.log(obj1.name,obj1.value);
console.log(obj2.name,obj2.value);

if(obj1 == obj2)
{
    console.log("true");
}
else
{
    console.log("false");
}

function check()
{
    let a1 = obj1.value;
    let a2 = obj2.value;
    if(a1.length === a2.length)
    {
        let a=0;
        for(let i=0;i<a1.length;i++)
        {
            for(let j=0;j<a2.length;j++)
            {
                if(a1[i]===a2[j])
                {
                    console.log("true");
                    a=a++;
                }
            }
        }
        console.log(a);
        if(a === a1.length)
        {
            console.log("same");
        }
        else
        {
            console.log("not same");
        }
    }
    else
    {
        console.log("not");
    }
}
check();

//self invoking function
//iife - immediately invoking function expression
(function()
{
    document.getElementById("ex").innerHTML = "hello";
})();

//temporal dead zone

// console.log(beforeDeclaration);

let beforeDeclaration = "value";

//for in
const student = {
    name: 'Monica',
    class: "MCA",
    age: 24
}
for ( let key in student )
{
    console.log(`${key} => ${student[key]}`);
}

//op:
//name => Monica
//97 class => MCA
//97 age => 24

//map and filter
var numbers= [1,2,3,4,5];
var doubled  = numbers.map(n => n * 2);
console.log(...doubled);
//op: 2 4 6 8 10

//filter
var numbers = [1,2,3,4,5];
var greaterThan2 = numbers.filter(n => n > 2);
console.log(...greaterThan2);
//op: 3 4 5
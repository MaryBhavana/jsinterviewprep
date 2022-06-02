/*
1.
What is creation phase and execution phase?
    Creation phase - Compiler runs through the entire code for 2 time before actually executing the code,
        In the first run, It picks all function declarations and stores them in memory with their reference.
        In the second run, It picks all variables and assign undefined to them. In the event of a conflict between
         variable and function declaration name then that variable is ignored.

    Execution phase - 1.variables assigned with values.
                      2.functions executed.
*/



/*
2.
What are objects in javascript?
    In JavaScript, an object is an unordered collection of key-value pairs.
       Each key-value pair is called a property.
       The key of a property can be a string. And the value of a property can be any value, 
     e.g., a string, a number, an array, and even a function.
    JavaScript provides you with many ways to create an object. The most commonly used one 
     is to use the object literal notation.
 */
let student = {
    name:"vishnupriya",
    rollno : 56,
    college : "SKET"
}
console.log(student);
console.log(student.name);



/* 
3.
What are function constructors?
The Function constructor creates a new Function object. Calling the constructor directly can create 
functions dynamically, but suffers from security and similar (but far less significant) performance issues 
to Global_Objects/eval. However, unlike eval, the Function constructor creates functions which execute in 
the global scope only.
*/
const func = new Function('a', 'b', 'console.log (a + b)');
func(2, 6);


/*
4.
Explain prototypes
The prototype is an object that is associated with every functions and objects by default 
in JavaScript, where function's prototype property is accessible and modifiable and object's prototype 
property is not visible.
*/
const studentPrototype = {
    calcAge(){
        console.log(2022 -this.bYear);
    },
    initialise(fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
}

const name1 = Object.create(studentPrototype);
console.log(name1);
name1.initialise("vishnu","priya",1999);
console.log(name1);
name1.calcAge();

console.log(name1.__proto__);//studentprototype
console.log(name1.__proto__.__proto__);//obj
console.log(name1.__proto__.__proto__.__proto__);//null



/*
5.
What is prototype chain?

Each object has a private property which holds a link to another object called its prototype. 
That prototype object has a prototype of its own, and so on until an object is reached with 
null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
*/
console.log(name1.__proto__);//studentprototype
console.log(name1.__proto__.__proto__);//obj
console.log(name1.__proto__.__proto__.__proto__);//null



/*
5.Give an example of call(), apply(), bind()
*/
let employee1 = {

    name : "Rahul",
    designation : "CSE",
    id : 111,
}

let employee2 = {

    name : "Karan",
    designation : "IT",
    id : 112,

}

let employee3 = {

    name : "Raju",
    designation : "ECE",
    id : 113,
    
}

function showDetails(age,gender) {
    console.log(this.name, this.id, this.designation,age,gender);
}

showDetails.call(employee1,21,"M");
showDetails.call(employee2,22,"M");
showDetails.call(employee3,23,"M");

showDetails.apply(employee1,[21,"M"]);
showDetails.apply(employee2,[22,"M"]);
showDetails.apply(employee3,[23,"M"]);


showDetails.bind(employee1)(21,"M");

let res2 =showDetails.bind(employee2);
res2(22,"M");
let res3 =showDetails.bind(employee3);
res2(23,"M");


/*
6.
Give an example of inheritance using function constructor
*/
function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function Developer(name, age, gender, id, 
specialization) {

    
    Employee.call(this, name, age, gender, id);

    this.specialization = specialization;
}
console.log(Employee.prototype);
console.log(Developer.prototype);



/*
7.
What are callbacks?
Definition - Any function that is passed as an argument to another function so that 
             it can be executed in that other function is called as a callback function.
Callbacks make sure that a function is not going to run before a task is completed but will 
run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps 
us safe from problems and errors.
*/
function myFirst() {
  console.log("Hello");
  }
  
  function mySecond() {
    console.log("Goodbye");
  }
  
  mySecond();
  myFirst();


/*
8.
What is the use of setTimeout?
Definition - The global setTimeout() method sets a timer which executes a function or 
             specified piece of code once the timer expires.
The setTimeout function is a native JavaScript function. It sets a timer (a countdown set in milliseconds) 
for an execution of a callback function, calling the function upon completion of the timer.
*/
setTimeout(() => {
    console.log("setTimeout")
}, 1000);




/*
9.
What is callback hell
Definition - Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute 
             multiple asynchronous operations one after the other.
In this, each callback takes arguments that have been obtained as a result of previous callbacks. 
This kind of callback structure leads to lesser code readability and maintainability. 
We can avoid the callback hell with the help of Promises. Promises in javascript are a way 
to handle asynchronous operations in Node.
*/
const callbackhell = () => {
   
    setTimeout(() => {
        console.log("call");

        setTimeout(() => {
            console.log("back");
            
            setTimeout(() => {
                console.log("hell");
           
            }, 4000);
        
        }, 3000)
  
    },2000);
}

callbackhell();



/* 
10.
What is an event loop and call stack
Call Stack - A call stack is a mechanism for an interpreter (like the JavaScript interpreter in 
    a web browser) to keep track of its place in a script that calls 
    multiple functions — what function is currently being run and what 
    functions are called from within that function, etc.
The call stack is a LIFO queue (Last In, First Out). The event loop continuously checks the call stack 
to see if there's any function that needs to run. While doing so, it adds any function call it finds to 
the call stack and executes each one in order.
*/


/*
11.
Explain call(), apply() and, bind() methods
Call  : binds the this value, invokes the function, and allows you to pass a list of arguments. 
Apply : binds the this value, invokes the function, and allows you to pass arguments as an array.
Bind  : binds the this value, returns a new function, and allows you to pass in a list of arguments.
*/



# Hand in Period 1

## Explain the differences between Java and JavaScript.

### You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

| | Java | JavaScript|
- | - | -
Compiled vs Interpreted | Java is a compiled language and need to be compiled to bytecode before it can be run on a virtual machine. | Javascript is an Interpreted scripting language, which means it can be directly interpreted directly by a browser.
Static vs Dynamic Type Checking |Java uses static type checking, where the type of a variable is checked at compile-time. The programmer must specify the type (integer, double, string, etc.) of any variable they create. | JavaScript, like most scripting languages, uses dynamic typing, where type safety is verified at runtime. It is not required for a programmer to specify the type of any variable they create.
Concurrency | Java makes use of multiple threads to perform tasks in parallel. | JavaScript, particularly as it exists as Node.js in server-side applications, handles concurrency on one main thread of execution via a queue system called the event loop.
Class Based vs Prototype Based | Java follows class based inheritance. a top down, hierarchical, class-based relationship whereby properties are defined in a class and inherited by an instance of that class (one of its members). | In JavaScript, inheritance is prototypal. all objects can inherit directly from other objects. Hierarchy is accomplished in JavaScript by assigning an object as a prototype with a constructor function.

## Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. 
### What does it require to use these technologies: In our backend with Node and in (many different) Browsers

*ES6(es2015) + ES7*

ES6 and ES7 is newer implementations of JavaScript, which implements some new features, like async/await. Our browsers don’t understand these new implementations, which means that in order for the browser to understand our code, it has to be transpiled into ES5, which all modern browser understand. The most used transpilers for JavaScript is Babel or Webpack.

*TypeScript*

TypeScript is a strict syntactical superset of JavaScript, and adds optional static typing to the language. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution. TypeScript supports definition files that can contain type information of existing JavaScript libraries, this enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. The TypeScript compiler, named `tsc`, is written in TypeScript. As a result, it can be compiled into regular JavaScript and can then be executed in any JavaScript engine (e.g. a browser). The compiler package comes bundled with a script host that can execute the compiler. It is also available as a Node.js package that uses Node.js as a host.

### Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.  
It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Node vs Java - similarities
- Runs on a Virtual Machine
- Runs on multiple platforms
- You must include packages before you can use them
- You must obtain packages not included in the base installation before you can use them

npm (short for Node.js package manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website.

Many modules is designed to do one thing, the Node echo system encourages to use such modules instead of one module that does everything

### Explain about the Event Loop in Node.js

Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for the event to occur.

In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.

Although events look quite similar to callbacks, the difference lies in the fact that callback functions are called when an asynchronous function returns its result, whereas event handling works on the observer pattern. The functions that listen to events act as Observers. Whenever an event gets fired, its listener function starts executing.

### Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

***Babel***

Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones).

It makes available all the syntactical sugar that was added to JavaScript with the new ES6 specification, including classes, fat arrows and multiline strings.

***WebPack***

ES6 modules allow the JavaScript developer to break their code up into manageable chunks, but the consequence of this is that those chunks have to be served up to the requesting browser, potentially adding dozens of additional HTTP requests back to the server — something we really ought to be looking to avoid. This is where webpack comes in.

Webpack is a module bundler. Its primary purpose is to process your application by tracking down all its dependencies, then package them all up into one or more bundles that can be run in the browser.

### Explain the purpose of “use strict” and Linters, exemplified with ESLint

The "use strict" directive was new in ECMAScript version 5. It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.

"Use strict" and linters are tools to protect us form ourselves. They warn us when our code contains a syntax error, and tells us if the variable we defined or assigned a value isn't being used. This improves the quality of our code, and may save time we would have use on debuging.

## Explain using sufficient code examples the following features in JavaScript

***Variable/function-Hoisting***

Hoisting means lifting up. In JavaScript a `var` declaration is hoisted to the top of its scope.
```js
console.log(x)
var x = 10
```
is equivalent to
```js
var x
console.log(x)
x = 10
```
output
```
undefined
```
The declaration is hoisted not the assignment.  
Function declarations is also hoisted to the top of its scope
```js
sayHi()
function sayHi(){
    console.log('Hi')
}
```
is equivalent to
```js
function sayHi(){
    console.log('Hi')
}
sayHi()
```
output
```
Hi
```

### This in JavaScript and how it differs from what we know from Java/.net.

`This` in JavaScript typically refers to the function it is called in, while in Java it refers to the class.

```js
function Car(make,model) {
    this.make = make;
    this.model = model;
    this.show = function(){setTimeout(function(){ //This function gets it's own "this"
        console.log(this.make + ", " + this.model);
    },0)};
}
var car = new Car("Volvo","V70");
car.show();
```
output
```
undefined, undefined
```
if a function is defined as a arrow function it does not get its own `this`
```js
function Car(make,model) {
    this.make = make;
    this.model = model;
    this.show = function(){setTimeout(()=>{ //This function doesn't gets it's own "this"
        console.log(this.make + ", " + this.model);
    },0)};
}
var car = new Car("Volvo","V70");
car.show();
```
output
```
Volvo, V70
```

### Function Closures and the JavaScript Module Pattern

***Closures***

A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.  
The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.

```js
function showName (firstName, lastName) {
    var nameIntro = "Your name is ";
        // this inner function has access to the outer function's variables, including the parameter
    function makeFullName () {
        return nameIntro + firstName + " " + lastName; 
    }
    return makeFullName ();
}
showName ("Michael", "Jackson");
```
output
```
Your name is Michael Jackson
```

***Module Pattern***

The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering.  
In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope. What this results in is a reduction in the likelihood of our function names conflicting with other functions defined in additional scripts on the page.

```js
var modularpattern = (function() {
    // your module code goes here
    var sum = 0 ;

    return {
        add:function() {
            sum = sum + 1;
            return sum;
        },
        reset:function() {
            return sum = 0;    
        }  
    }   
}());
console.log(modularpattern.add())
console.log(modularpattern.add())
console.log(modularpattern.reset())
```
output
```
1
2
0
```

### Immediately-Invoked Function Expressions (IIFE)

Immediately-Invoked Functions are functions that are invoked when the script reaches that part of the code.
```js
(function iife(){
    console.log('I am an Immediately-Invoked Function Expression')
})()

!(() => {
 console.log('I too am an Immediately-Invoked Function Expression')
})()
```
output
```
I am an Immediately-Invoked Function Expression
I too am an Immediately-Invoked Function Expression
```

### JavaScripts Prototype

```js
const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']
names.prototype.myMap = function(callback){
    let arr = []
    for(let i = 0; i < this.length; i++){
            arr.push(callback(this[i]))
    }
    return arr
}
```
```js
const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']
names.prototype.myFilter = function(callback){
    let arr = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            arr.push(this[i])
        }
    }
    return arr
}
```

### User-defined Callback Functions (writing your own functions that take a callback)

```js
function myFilter(callback){
    let arr = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            arr.push(this[i])
        }
    }
    return arr
}
```
```js
function myMap(callback){
    let arr = []
    for(let i = 0; i < this.length; i++){
            arr.push(callback(this[i]))
    }
    return arr
}
```

### Explain the methods map, filter and reduce

`Array.prototype.map()`: The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.
```js
const numbers = [2, 3, 4, 5]
const mappedNumbers = numbers.map((e) => e * 2)
console.log(mappedNumbers);
```
output
```
[4, 6, 8, 10]
```

`Array.prototype.filter()`: The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
```js
const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']
const filteredNames = names.filter(name => name.length <= 3)
console.log(filteredNames)
```
output
```
["Jan", "Bo"]
```

`Array.prototype.reduce()`: The `reduce()` method executes a reducer function (that you provide) on each member of the array resulting in a single output value.  

The reducer function takes four arguments:

1. Accumulator (acc)
2. Current Value (cur)
3. Current Index (idx)
4. Source Array (src)

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.
```js
const numbers = [2, 3, 4, 5]
const reducer = (acc, cur, idx, src) => accumulator + currentValue)
console.log(numbers.reduce(reducer);
```
Output
```
14
```

### Provide examples of user-defined reusable modules implemented in Node.js

```js
module.exports.makeCounter = function(){
    let privateCounter = 0
    function changeBy(val){
        privateCounter += val
    }
    return {
        increment: function(){
            changeBy(1)
        },
        decrement: function(){
            changeBy(-1)
        },
        value: function(){
            return privateCounter
        }
    }
}
```

## ES6,7,8... and TypeScript

### Provide examples and explain the es2015 features: 
***let and const***

With ES6 it is now possible to declare a variable that behaves more like we expect them to behave. While a `var` declaration is hoisted to the top of its scope a `let` or a `const` declaration is not hoisted and behaves like we know variable declarations from Java. The difference between a `let` and a `const` is that the `let` can be assigned a new value and the `const` can't.

***arrow functions and rest parameters***

```js
function listMaterials(str, ...materials) {
    console.log(str, materials.map(material => material.length))
}

listMaterials('this is not part of the array', 'Hydrogen', 'Helium', 'Lithium', 'Beryllium')
```
Output
```
> "this is not part of the array" Array [8, 6, 7, 9]
```

The `rest parameter` syntax allows us to represent an indefinite number of arguments as an array.

An `arrow function` expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the `this`, `arguments`, `super`, or `new.target` keywords. `Arrow function` expressions are ill suited as methods, and they cannot be used as constructors.

***this***

A function's `this` keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) and non-strict mode.

In most cases, the value of `this` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the `bind()` method to set the value of a function's `this` regardless of how it's called, and ES2015 introduced `arrow functions` which don't provide their own `this` binding (it retains the `this` value of the enclosing lexical context).

***de-structuring assignments***

```js
var a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log("a", a);

console.log("b", b);

console.log("rest", rest);
```
Output
```
> "a" 10
> "b" 20
> "rest" Array [30, 40, 50]
```

The `destructuring assignment` syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

***maps***
```js
var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
```
Output
```
> 0 = zero
> 1 = one
```

The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as 
either a key or a value.

***sets***
```js
let s = new Set()
s.add("hello").add("goodbye").add("hello")
s.size === 2 // no duplicate entries
s.has("hello") === true
for (let key of s.values()) // insertion order
    console.log(key)
``` 
Output
```
> "hello"
> "goodbye"
```
The `Set` object lets you store unique values of any type, whether primitive values or object references.

### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
```js
// exports a function declared earlier
export { myFunction }; 

import * as myModule from '/modules/my-module.js';
```

### Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

### Provide examples with es-next, running in a browser, using Babel and Webpack

### Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics

### Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)

||Stage|Purpose|Entrance Criteria|Acceptance Signifies|Spec Quality|Post-Acceptance Changes Expected|Implementation Types Expected*|
-|-|-|-|-|-|-|-
0|Strawman|Allow input into the specification|None|N/A|N/A|N/A|N/A
1|Proposal|<li>Make the case for the addition</li><li>Describe the shape of a solution</li><li>Identify potential challenges</li>|<li>Identifie “champion” who will advance the addition</li><li>Prose outlining the problem or need and the general shape of a solution</li><li>Illustrative examples of usage</li><li>High-level API</li><li>Discussion of key algorithms, abstractions and semantics</li><li>Identification of potential “cross-cutting” concerns and implementation challenges/complexity</li>|The committee expects to devote time to examining the problem space, solutions and cross-cutting concerns|None|Major|Polyfills / demos
2|Draft|Precisely describe the syntax and semantics using formal spec language|<li>Above</li><li>Initial spec text</li>|The committee expects the feature to be developed and eventually included in the standard|Draft: all major semantics, syntax and API are covered, but TODOs, placeholders and editorial issues are expected|Incremental|Experimental
3|Candidate|Indicate that further refinement will require feedback from implementations and users|<li>Above</li><li>Complete spec text</li><li>Designated reviewers have signed off on the current spec text</li><li>All ECMAScript editors have signed off on the current spec text</li>|The solution is complete and no further work is possible without implementation experience, significant usage and external feedback.|Complete: all semantics, syntax and API are completed described|Limited: only those deemed critical based on implementation experience|Spec compliant
4|Finished|Indicate that the addition is ready for inclusion in the formal ECMAScript standard|<li>Above</li><li>Test262 acceptance tests have been written for mainline usage scenarios, and merged</li><li>Two compatible implementations which pass the acceptance tests</li><li>Significant in-the-field experience with shipping implementations, such as that provided by two independent VMs</li><li>A pull request has been sent to tc39/ecma262 with the integrated spec text</li><li>All ECMAScript editors have signed off on the pull request</li>|The addition will be included in the soonest practical standard revision|Final: All changes as a result of implementation experience are integrated|None|Shipping

## Callbacks, Promises and async/await

### Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

A `Promise` is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A `Promise` is in one of these states:

* pending: initial state, neither fulfilled nor rejected.
* fulfilled: meaning that the operation completed successfully.
* rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

As the `Promise.prototype.then()` and `Promise.prototype.catch()` methods return promises, they can be chained.

### Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")

**Pyramid of Doom**
```js
doSomething(function(responseOne) {
    doSomethingElse(responseOne, function(responseTwo, err) {
        if (err) { handleError(err); }
        doMoreStuff(responseTwo, function(responseThree, err) {
            if (err) { handleAnotherError(err); }
            doFinalThing(responseThree, function(err) {
                if (err) { handleAnotherError(err); }
                // Complete
            }); // end doFinalThing
        }); // end doMoreStuff
    }); // end doSomethingElse
}); // end doSomething
```
**Solution**
```
doSomething()
    .then(doSomethingElse)
    .catch(handleError)
    .then(doMoreStuff)
    .then(doFinalThing)
    .catch(handleAnotherError)
```

### Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel

```js
var arrayOfPromises = [] // array containing promises

Promise.all(arrayOfPromises)
.then(function(arrayOfResults) {
    /* Do something when all Promises are resolved */
})
.catch(function(err) {
    /* Handle error is any of Promises fails */
})
```

### Example(s) that demonstrate how to implement our own promise-solutions.

```js
function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) { 
          resolve(req.response); /* PROMISE RESOLVED */
      } else { 
          reject(Error(req.statusText)); /* PROMISE REJECTED */
      }
    };
    req.onerror = function() { reject(Error("Network Error")); };
    req.send();
  });
}
```

### Example(s) that demonstrate error handling with promises
The `catch()` method returns a `Promise` and deals with rejected cases only. It behaves the same as calling `Promise.prototype.then(undefined, onRejected)` (in fact, calling `obj.catch(onRejected)` internally calls `obj.then(undefined, onRejected)`). This means, that you have to provide `onRejected` function even if you want to fallback to `undefined` result value - for example `obj.catch(() => {})`.
```js
get(url)
.then(function(response) {
    /* successFunction */
})
.catch(function(err) {
    /* errorFunction */
})
```

### Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.

`Async Await` is syntactic sugar that changes the .then notation to more readable syntax. Instead of making a . connection between the promises the keyword await can be used instead.

### Provide examples to demonstrate:
**Promise**
```js
const makeRequest = () =>
  getJSON()
    .then(data => {
        console.log(data)
        return "done"
    }).catch(error => {
        console.log(error)
        return "error"
    })
makeRequest()
```
**async/await**
```js
const makeRequest = async () => {
    try{
        const data = JSON.parse(await getJSON())
        console.log(data)
        return "done"
    }catch(error){
        console.log(error)
        return "error"
    }
}
makeRequest()
```
### Serial or parallel execution with async/await.
**Serial**
```js
async function serialFlow(){
    let result1 = await doJob(1,1);
    let result2 = await doJob(2,2);
    let result3 = await doJob(3,3);
    let finalResult = result1+result2+result3;
    console.log(finalResult);
    return finalResult; 
}
```
**Parallel**
```js
async function parallelFlow(){
    let result1 = doJob(1,1);
    let result2 = doJob(2,2);
    let result3 = doJob(3,3);
    let result1 = await result1;
    let result2 = await result2;
    let result3 = await result3;
    let finalResult = result1+result2+result3;
    console.log(finalResult);
    return finalResult; 
}
```
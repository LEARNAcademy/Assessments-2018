### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  Primitive: number, string, boolean
  Non-Primitive: object (including array)

  //Googled Answer (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
  Primitive: number, string, boolean, null, undefined, symbol (as of ES6)
  Non-Primitive: object


#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess:
The console will return undefined.

Then, past the code in your console and explain why you were right/wrong.
The console did return undefined. Since the variable text is re-declared inside the scope of logIt(), it is called before the console.log(text) due to hoisting. Only the "var text" portion of the line is hoisted, so at the point of the console.log(), the value of var is empty, or undefined. After the console.log() but still within logIt(), the text variable will then be re-assigned to 'inside' at which point it will have a value.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JSON is a file format that only contains text information in the form of JS objects composed of strings and arrays. JSON files typically live within the root folder of a JavaScript project and contain essential data about the project such as the author and version, as well as required dependencies and scripts. JSON is also a good format to exchange information with servers due to the fact that it only contains text.

  //Googled Answer (https://www.json.org/)
  JavaScript Object Notation. A lightweight data-interchange format, easy for humans to read and write, easy for machines to parse and generate. Composed of key/value pairs in the form of objects.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  Closures refer to the way a function declared within another functions remembers the other variables within its scope at the time of declaration. Even if the outer function has closed, the inner function can still use variables within the outer function, as long as they are in scope of the inner function.

  //Googled Answer (https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
  (There are lots of long convoluted explanations and examples out there, this was the most concise definition I could find.) "The closure is a collection of all the variables in scope at the time of creation of the function."

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = is used for assignment, e.g. const answer = 42;
  == is used for conditionals, it only checks for content not data type. "0" == 0 returns true
  === is used for strict conditionals, it checks for content and data type. "0" === 0 returns false

  //Googled Answer (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  Rather than == simply not checking for data type, it actually is performing type conversion first, then checking the same way that === does.

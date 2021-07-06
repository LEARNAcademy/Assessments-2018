### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  -Primitive - null, boolean, number, string, symbols, undefined
  -Object - collections of primitive data

  //Googled Answer
  Primitive:  null - the absence of any object value
              boolean - logical entity with exactly two values (true/false)
              undefined - variable that has not been assigned a value
              number - integers and floats
              string - letters and characters represents textual data within ""
              symbol - unique and immutable, can be used as the key of an objects
  Object - mutable, a collection of properties (primitive data types or other objects) made up of pairs of keys and values

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
It will return undefined because nothing is passed to the argument of the function.

Then, past the code in your console and explain why you were right/wrong.

Googled answer - It will return undefined as a result of variable hoisting and nothing in the placeholder position of the logIt function's argument.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
JavaScript Object Notation - converts everything into plain text

  //Googled Answer
It's very closely related as the syntax of JSON is derived from JS objects but can be used in many languages.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
Closures use the innate JavaScript structure to protect variables by making them local and returning them to the global scope when called.

  //Googled Answer
Closures are created by adding a function to another function. The inner function has access to the outer function's variables and parameters.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
= assigns a variable
== equates to the same thing, ex) 8 == "8"
=== is exactly the same thing within the same data type

  //Googled Answer
 = assigns a value, assignment operator
 == equality operator, doesn't have to be the same type
 === strict comparison, same type and the contents match

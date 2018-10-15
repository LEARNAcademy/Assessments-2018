### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  Array[], object:, key value, string'', boolean true/false,

  //Googled Answer
Primitives:
String	represents sequence of characters e.g. "hello"
Number	represents numeric values e.g. 100
Boolean	represents boolean value either false or true
Undefined	represents undefined value
Null	represents null i.e. no value at all

Non-Primitives:
Object	represents instance through which we can access members
Array	represents group of similar values
RegExp	represents regular expression

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
I don't think it'll print out "outside" or "inside". The code is being logged inside the function brackets.

Then, past the code in your console and explain why you were right/wrong.
I was right. It returned as 'undefined'. When I logged outside of the function brackets, it returned as 'outside'.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  It stands for JavaScript Object Notation. It can only handle text.


  //Googled Answer
  JSON stands for JavaScript Object Notation
  JSON is a lightweight data interchange format
  JSON is language independent *
  JSON is "self-describing" and easy to understand
JSON data is written as name/value pairs, just like JavaScript object properties.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
The end of a function.....

  //Googled Answer
A closure is created when you define a function — not when you execute it. Then, every time you execute that function, its already-defined closure gives it access to all the function scopes available around it.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
 = -> you're assigning something to equal it. i.e var pets = corgi
 ==  -> I forgot...
 === -> type and value are the same

  //Googled Answer
== equal to
=== equal value and equal type

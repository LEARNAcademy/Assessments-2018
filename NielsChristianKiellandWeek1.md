### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer

  Primitive: number, string, boolean, null, undefined

  Objects, Arrays(which are objects)

  //Googled Answer
  The latest ECMAScript standard defines seven data types:

  Six data types that are primitives:
    Boolean
    Null
    Undefined
    Number
    String
    Symbol (new in ECMAScript 2015)

  and Object


#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: undefined

Then, past the code in your console and explain why you were right/wrong.

The variable text is scoped outside of the function, and the function has no parameters to be passed in, so when console logging text has no value;

//Googled Answer
In JavaScript, variables are "hoisted" to the top of the function. That is, unlike some other languages (such as C), a variable declared within a function is within scope throughout the function. So the compiler sees your function like this:

function logIt(){
    var text;
    console.log(text);
    text = 'inside';
}


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JavaScript Object Notation - it's data formatted like JS objects.


  //Googled Answer
  In computing, JavaScript Object Notation or JSON is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  Closure is {} to to wrap around and close off functions. The help give scope and compartmentalize programs.


  //Googled Answer
  A closure is the combination of a function and the lexical environment within which that function was declared. 

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  =, assigns value
  ==, compares to values in javascript and equates them regardless of data type
  ===, compares values and datatypes and only equates to true if both type and value are equal.


  //Googled Answer
  By using = you assign a value to something.

  x = 1 //x now equals 1
  x = 2 //x now equals 2
  By using == you check if something is equal to something else. This is not strict

  x == 1 //is x equal to 1? (False)
  x == 2 //is x equal to 2? (True)
  true == 1 //does the boolean value of true equal 1? (True)
  By using === you check if something is equal to something else. This is also strict.

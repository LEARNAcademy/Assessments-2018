### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  String -primitive
  number -primitive
  boolean -primitive
  null -primitive
  objects


  //Googled Answer

  According to MDN the following are data types in JavaScript...

  Six data types that are primitives:
    Boolean
    Null
    Undefined
    Number
    String
    Symbol (new in ECMAScript 6)

  Not primitive:
    Object



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
  outside

Then, past the code in your console and explain why you were right/wrong.

  I was completely wrong. the code ended up printing "undefined". Upon closer inspection, I realized what is happening here. So, let's go through the steps:

  1. we are declaring the variable "text" and setting it to the string 'outside' (aka initializing)
  2. we declare a function called logIt()
  3. we call logIt()
  4. We tell the console to print our variable text, but we get undefined because we are also declaring another variable called text within the function below the console log.

  since initialization in JavaScript aren't hoisted, the console log above the second declaration statement will show as undefined.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JSON is JavaScript Object Notation, which is a fancy way of saying that it is a collection on items (data) that can be referenced for later use. I believe it is similar to XML, but it doesn't have the same types of rules that XML requires.


  //Googled Answer
  According to w3Schools:
  JSON is used when we want to exchange data between our browser and a server. JavaScript uses the JSON items as objects without complicated parsing requirements.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  Closure is when you have a function within another function, and you use variables that have scoping only within that inner function.


  //Googled Answer
  I found a really great article on Medium that explains the importance of closure (especially when trying to get through a job interview). It states, "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time."

  Cool. So what does that mean? that means that the inner function has access to the outer function's variables. You can use the closure by passing it to another function. This is key in understanding privacy in JavaScript.  


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = is the assignment operator
  == is a comparison operator that checks for value
  === is a comparison operator that checks for type and value

  //Googled Answer
  Everything I found said basically what I wrote; however, there was an important thing noted in one of the articles about ==. That is, == makes type correction while === does not.   

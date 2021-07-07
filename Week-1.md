### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  String*
  integer*
  array
  float*
  object

  //Googled Answer
  Number (integer and float)*
  String*
  Boolean*
  null*
  undefined*
  objects
  symbol*

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
I was wrong, running logIt returns undefined. This is because the logIt function doesn't have an argument 'text' to console log.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JSON (Javascript Object Notation) is a way of storing data similar to XML and YAML. It uses the same structure as an object in javascript. We'd often find JSON when transferring data over an API or storing it in a database.

  //Googled Answer
  JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  To be honest I didn't understand this principal before I Googled it.

  //Googled Answer
  Functions, aren't just functions, they are also closures. The function body has
  access to variables that assigned outside the body of the function. This means
  you don't have to hand in global variables as arguments in your function as it
  can access them already. 

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = is used to assign
  == is used to compare the value
  === is used to compare the value and type

  //Googled Answer
  = - is used to assign
  == - equal to
  === - equal value and equal type

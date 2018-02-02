### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  numbers - primitive
  strings - primitive
  booleans - primitive
  undefined/null - primitive
  objects

  //Googled Answer
  undefined - primitive
  null - primitive
  symbol - primitive
#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt();

```

first Guess: "Outside"  this based on the fact that javascript will read functions top down


Then, past the code in your console and explain why you were right/wrong.
I was wrong, I am getting a response of undefined when I run the logIt() function.  
My thought is that when a global variable is redefined in a function, the logging of text is within the local scope of the functions
and is not yet defined.   


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  ??  Never reviewed JSON, my shot in the dark is that it might stand for something like
  JavaScript Object Notation, I know it's a file type, it could be a file used for storing object data or defining objects.


  //Googled Answer
  JSON is a text based format for storing JavaScript Object data.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer


  //Googled Answer


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = is used for storing values in variables
  == is used to loosely compare two values where data types are not strictly redefined
  === is a strict comparison between two elements

  //Googled Answer
  single = is an assignment operator and the other two are comparison operator

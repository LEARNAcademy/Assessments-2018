### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives. 

  //Your Answer: From the ones that I can remember there are 
  Booleans: which are true and false statements (primitive)
  Strings: denoted in Javascript with either "" or '' (primitive)
  Integers: which are numbers (primitive)
  Arrays: they store information and are denoted by [] (not primitive)
  
  
  //Googled Answer: 
  In addition there is null, undefined

  undefined corrsponds to a variable that has not been defined(primitive)
  null: corresponds to nothing
  

#### 2. Look at this Javascript and try to predict, what will the browser's console show? 

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: It will first print undefined when the function is called because the output is not being logged and there is no return statement on the function. When the function logged on the console it will then log "inside".

Then, past the code in your console and explain why you were right/wrong. 

Explanation: I was partially correct. The console did log undefined when ran as written. When the logIt() function was logged it still gave an undefined because there was no argument being passed. As the code is written however, the logIt() function needs to have an argument associated with it called text. The code will then log 'outside' as string rather than inside because it's the text argument inputed from the global scope prior to being logged. Calling the logIt() function will also give an undefined in addition to "outside" when logged because nothing is being returned in the function. We can fix this issue if change the console.log to return. Alternatively, can move the var text = 'inside' above the return to have the function log this instead of outside.


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer: Sorry, I remember hearing about it, but I don't really know what it is or what it does.
  
  
  //Googled Answer: JSON stands for javaScript Object Notation; It is a syntax for storing and exchanging data. While exchanging data betweeen a browser and serve the data has to be text. The text can be converted to javascript objects and any javascript object can be converted to JSON and sent to the server.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer: a closure describes where a block of code of part of the code ends. It helps create boundaries to perform certain functions. Thus, it adds order and structure to a code. It's recognized by closing of }.
  
  
  //Googled Answer: A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

  A closure is a function having access to the parent scope, even after the parent function has closed.
  

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer: This is what each of the following does in Javascript:

  =   :  Its associated with the assignment of new variables and const. It's also used in the let      
        statements. It's primary function is to assign. 
  ==  : It's primarily used for a more leniant comparision as it only looks for the data/value of 
        what it is comparing to.

  === : It's used for strict comparisons where both the data type and value have to be the same.     
  
  //Googled Answer

  == performs coercion. Added to above.

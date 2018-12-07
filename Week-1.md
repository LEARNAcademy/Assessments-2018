### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives. 

  //Your Answer : number, string, null, undefined, 
  
  
  //Googled Answer : six primitives - Boolean, Null, Undefined, Number, String, Symbol
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

first Guess: 'inside'


Then, past the code in your console and explain why you were right/wrong. 
 ===> undefined. I didn't realize that var text = 'inside' was not in front of console.log.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer : connect web
  
  
  //Googled Answer : JSON is JavaScript Object Notation, is lightweight data-interchange format. JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer : closure is function inside of function.
  
  
  //Googled Answer : A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
  

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer : '=' is assign value, '==' compare value regardless type, '===' compare value and type
  
  
  //Googled Answer : Double equals (==) is abstract equality comparison operator, which transforms the operands to the same type before making the comparison. Triple equals (===) are strict equality comparison operator, which returns false for different types and different content.

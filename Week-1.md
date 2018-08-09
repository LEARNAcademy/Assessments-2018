### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer :  Primitives:  numbers, strings, booleans, null, undefined, symbols.  
                   Non-primitive: object (made up of any of the primitive data types)


  //Googled Answer :  (from MDN)  The latest ECMAScript standard defines seven data types:

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

first Guess: 'outside'


Then, pass the code in your console and explain why you were right/wrong.  I was wrong.  It logs "undefined". I assumed the function would pass the global variable since the assignment of "inside" occurs after the console.log statement.  After some research, I believe the undefined is logged because the function is lacking a return statement. Functions without a return statement log "undefined".  I did add a return  after the function and 'inside' was then logged to the console.
#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer: a JSON document stores data in a way that is easy for both humans and computer to read. JSON is text and any JavaScript object can be converted to JSON and be sent to a server and vice-versa.


  //Googled Answer:  
  JSON is a text-based data format that follows JavaScript object syntax. A JSON object can be stored in its own file and can include the same basic data types as a JavaScript object. JSON exists as a string and has to be converted to a JavaScript object in order to access the data.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer:  A  closure consists of a function within a function which preserves the variable within the function. "It is based on the idea that scope of a function is create at it's declaration, rather than at it's execution." Closure is a way to protect a variable within a function.  This means if you declare a variable inside the inner function, it won't be available outside of that function, which can prevent accidental reassignment. Due to the JS principles of scope, the inner function has access to it's parent function variables, as well as to the global scope.  

  //Googled Answer:  
  A closure is an inner function that has access to the outer or enclosing function’s variables—scope chain - it has access to its own scope, to the outer function’s variables, and  to the global variables. The inner function also can access the outer function’s parameters. The inner function cannot call the outer function’s arguments object even though it can call the outer function’s parameters directly.


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer:  = is used for assignment
                  == is used to equate two data types (this is where type coercion comes in)
                  === compares if two data types are exactly identical (strict comparison)


  //Googled Answer:
   The assignment operator is (=), which assigns the value of its right operand to its left operand. JavaScript also uses a strict comparison ( ===), which is only true if the operands are of the same type and content and the "abstract comparison" ( ==), which converts the operands to the same type before making the comparison.

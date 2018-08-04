### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives. 

  //Your Answer
  Objects (not primitive) & Primitives: Numbers, Strings, Booleans, Null, Undefined, & Symbols
  
  //Googled Answer


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

Then, pass the code in your console and explain why you were right/wrong. 
Ok, so it took a fair bit of trial and error but I found out why it turned out undefined.  The function used another var inside the function to define "text" and because of that it didn't like the whole thing so returned "undefined".  Once I removed the var before "text = 'inside'" the function returned "outside." like I thought it would at first.  I just need to remember that when redefining a variable that has already been assigned that I should not include the var because that variable already exists and doesn't need to be assigned again, you can re-assign without the var.  

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JavaScript Object Notation...it's the bank of terms that deal with/work with objects in JS.
  
  //Googled Answer
In computing, JavaScript Object Notation or JSON is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  It's the end of a block; either a curly bracket, square bracket, end paranthesis, semicolon or any other notation that ends a line of code or a block of code.  
  
  //Googled Answer
  A closure is the combination of a function and the lexical environment within which that function was declared.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = is an assignment, assigns value to variables and the like
  == checks if two values are the same and can be responsible for type coercion if they are not the same type of data
  === checks if two values and the types of the values are the same
  
  //Googled Answer
By using = you assign a value to something.
By using == you check if something is equal to something else. This is not strict
By using === you check if something is equal to something else. This is also strict.
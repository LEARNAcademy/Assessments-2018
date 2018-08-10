### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  boolean
  number
  string
  symbol
  undefined

  //Googled Answer
  boolean
  number
  string
  symbol
  undefined
  null

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
'inside'

Then, past the code in your console and explain why you were right/wrong.
Wrong.  It was undefined because logIt() isn't calling anything.  If we have it call the variable "text", it actually logs "outside" because it's in the global scope; it would only log "inside" if we switched the order of the variable assignment and the console.log (so console.log is FIRST) within the function block.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer


  //Googled Answer


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer


  //Googled Answer


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
= is assignment
== is??? (a comparison?)
=== is strict equals

  //Googled Answer
By using = you assign a value to something.
By using == you check if something is equal to something else. This is not strict. (My additional Note: This is do they MEAN the same thing; ie, '1 == true' could be a correct statement)
By using === you check if something is equal to something else. This is also strict.  (My additional Note: This is are they equal verbatim; ie, '1 === true' is NOT a correct statement)

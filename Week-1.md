### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer:
  - boolean
  - string
  - null
  - undefined
  - number



  //Googled Answer
  - boolean
  - string
  - null
  - undefined
  - number
  - symbol (added in ES6)

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
I would have said "outside". I thought line 28 would have "run" by storing the variable for recall. Then 29 lets it know there's a function but does not call it. Then line 34 calls the function so you end up at line 30 which i would have thought then remembers line 28 defined the variable....


Then, past the code in your console and explain why you were right/wrong.
undefined is what comes back.
"undefined"

#### 3. What is JSON? How does it relate to javascript objects?
  //Your Answer


  //Googled Answer


#### 4. Describe a closure, what is it good for and how do you recognize one?
  //Your Answer:


  //Googled Answer:


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = : assigns a values
  == : compares value of two elements. excludes datatype.
  === : compares values of two elements including datatype.


  //Googled Answer

### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives. 

  //Your Answer
  there are 6 primatives: null, undefined, boolean, number, string, and ...arrays?
  in adition, there's a 7th data type: objects
  
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
I predict that the code will print 'outside' to the console. Maybe with an "undefined" before it, from running the function. It won't display inside. 

Then, past the code in your console and explain why you were right/wrong. 

I was wrong, it output 2 lines of undefined. Further testing seems to indicate that text became undefinined, because the var text = 'inside' seems to be causeing problems with it trying to assign two values to the same variable? 


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  
  
  //Googled Answer


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  
  
  //Googled Answer
  

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  
  = is an assignemnt statment, it sets the thing on the left to the stuff on the right
  == is an equality operator, it checks to see if the content of both sides are /equal/, but would work accross data types. I.e. 1 == '1' is true
  === is a parity operator, it checks that the type and content are exactly the same. i.e. 1 === '1' is false

  //Googled Answer

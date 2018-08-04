### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives. 

  //Your Answer
  there are 6 primitives: 
    null (a value which is never equal to anything, including itself), 
    
    undefined (a value which indicates that the value is unknown, like in the follwing question, where there is a variable collision), 
    
    boolean (a value that is either true (1) or false), 
    number (a....number),
    string (enclosed by "", can contain any collection of characters), 
    and ...arrays? 
    in adition, there's a 7th data type: objects, which can contain any other data types, as well as functions and other esoteric stuff
  
  //Googled Answer
  Arrays are not the 6th primitive, instead it's symbols, which are new. I'm confused about what they really do, but they seem to be some sort of user-defined data container that can be put inside objects to do....something, which I'm not entirely clear about the usage of


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

I was wrong, it instead outputs undefined. 

When javascript reads through a function it takes note of the variables available in it, and thus sees that text is declared, however since the log is before that line, a value for text hasn't actually been defined yet.


Further testing reveals that if the order is changed so that the local variable assigment is first, it instead outputs inside. Whereas if the var is removed from "text=inside", or the line is removed outright, it outputs as outside.  This indicates that the problem that is causing it to become undefinined is the action of declaring the local var, since it executes that first, whereas the actual assignment is processed sequentially 


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  Javascript object...something, I think it's something about being able to encapsulate an object so that it's more portable and able to be used elsewhere, sometimes in a non-javascript environment?
  
  //Googled Answer
  

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  I have noooooo idea.
  
  //Googled Answer
  from what I can gather, it's a way to pull what would otherwise be a local variable out into the global scope. This is done by using a function within a function, and returns a function. You then define another variable as a function, and then call them. This allows us to use variables from the local scope of the superfunction, even after it has finished being run. 

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  
  = is an assignemnt statment, it sets the thing on the left to the stuff on the right
  == is an equality operator, it checks to see if the content of both sides are /equal/, but would work accross data types. I.e. 1 == '1' is true
  === is a parity operator, it checks that the type and content are exactly the same. i.e. 1 === '1' is false

  //Googled Answer
  that was pretty much right
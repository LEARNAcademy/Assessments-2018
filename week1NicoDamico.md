### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer

I am legitemately unsure of what primitives are, but from context I think they are values that hold meaning but not functionality until they are applied inside of a function. As such I'm guessing the primitive data types are:
  string
  numbers
  booleans
While i'm not sure they cound as 'data types' I'm tempted to include the following as data types as well
  functions
  objects
  arrays
  loops

  //Googled Answer

Ok so the first part of my answer was on the right track then I went off the rails with the second part.

Six data types that are primitives:
Boolean
Null
Undefined
Number
String
Symbol (new in ECMAScript 6)

I totally missed Null, undefined, and symbol. And the thing that makes them 'primitives' is that they don't contain methods and aren't 'objects', and are considered immutable

Objects, are ALSO data types but are NOT primitive because they can be changed, and do contain methods.

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


Then, past the code in your console and explain why you were right/wrong.

---- I did this on the 2017 one, so i didn't go the first guess thing but here is my answer:

What will the browser's console show?
- I don't believe it will show anything because the console.log is not being returned. furthermore, even if it was being returned it would show outside, because the console.log is being executed before the text variable is being reasigned.
Run this in console and then try explain what you see.
- It showed up as undefined, which i guess is like saying 'nothing' is being reutrned, but as I learned from last question undefined IS something, since it is a primitive data type, so I should probably get in the habit of being more specific. I am curious about how undefined values would affect various functions...
- It also showed undefined twice, the first time when you defined the function, and then when you called the function.



#### 3. What is JSON? How does it relate to javascript objects?
//Your Answer

I honestly can't remember. I know we talked about it, but I can't even remember what JSON stands for, maybe something like Java Script Object... Nature? I'm admitting defeat and googling it.

//Googled Answer

JavaScript Object Notation
It's a system for converting objects into JSON, which is just text, which can then be easily sent to a server. We can also receive JSON from a server and convert it to Javascript. It is also language-independent, which as far as I can tell means that it can be used by several different languages that may be interracting with a server.

#### 4. Describe a closure, what is it good for and how do you recognize one?

//Your Answer

I don't know!!!!!!!!!!! I know that it's used to send information out of a function for later use. But we're literally about to learn it right now, so the /googled answer might be a little moot at this point ...

A closure is when you return an anonymous function from a named function or function expression then immediately call it to modify a variable defined inside of the function it was called from. Por ejemplo:

var call = function(){
  var number=0
  return function () {
    return number += 1
  }
} ()
call() // number == 1
call() // number == 2
call() // number == 3

//Googled Answer

didn't google it cause we just went over it

#### 5. What's the difference between =, ==, and === in JavaScript?

//Your Answer

= reassigns a value of the item before it to be equal to the item after it
== checks to see if the value of the two items is the same, ignoring datatype so 3 IS equal to "3"
=== checks to see if the value of the two items is the same, including datatype, so 3 is NOT equal to "3"

//Googled Answer

I did not realize that null and undefined and equal but NOT strictly equal, so null==undefined is true but null===undefined is false.

#### 6. What does it mean that Javascript is "dynamically" typed?

I realize there is actually no question number six, but since I did it i'm going to share my pain with you, hopefully you won't hate me...

  // Your Answer

I am unsure. I'm guessing, but I think it may refer to the fact that javascript is read from the top down, so if functions are called they are called sequentially

  // Googled Answer

I was totally wrong. Dynamically-typed doesn't refer to typing (like a keyboard), but rather refers to data types. A typed language is one that assigned a type to variables. Dynamically refers to the fact that that variables can change their value.

I found the following incredibly helpful.

Dynamically Typed

x = 12345;    // number
x = "string"; // string
x = { key: "value" }; // object
y = 123 + x; // error or implicit conversion must take place.

Statically typed

int x = 12345; // binds x to the type int
x = "string";  // too late, x is an integer - error
string y = 123; // error or implicit conversion must take place.

I was somewhat confused however by the apparent fact that some people use "untyped" as a synonym for "dynamically typed", though there seems to be a debate between the programming community and the academic community having to do with the roots of computer science in 'lamba calculus' which has something called 'type theory'. I'm guessing I went down the rabbit hole a little with this one.

### Javascript Course Assessment

## Week 1 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Name all of the data types in Javascript, say which are primitives.

primitives: Numbers, strings, boolean, null, undefined,

symbols, objects

  //Googled Answer
  The latest ECMAScript standard defines seven data types:

  Six data types that are primitives:
  Boolean
  Null
  Undefined
  Number
  String
  Symbol (new in ECMAScript 6)
  and Object


#### 2. If we execute this Javascript, what will the browser's console show? Run this in console and then try explain what you see.

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

the browser's console just shows undefined because we didn't pass anything through the function logit().  When I called the function it says 'undefined' 'undefined', because it is associating the console.log with the 'var text = 'inside'' and since it is on the line before the variable is only assigned a value of 'undefined'


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JavaScript Object Notation


  //Googled Answer

  JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

  The JSON format is syntactically identical to the code for creating JavaScript objects.

Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  a closure is a function inside of a function that is able to recall information from previously run functions.  It's good to run functions and not have to make global variables in order to have them recall the information.  They are recognizable because they are formatted as a function expression.


  //Googled Answer
A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables

Closures are frequently used in JavaScript for object data privacy, in event handlers and callback functions, and in partial applications, currying, and other functional programming patterns.

To use a closure, simply define a function inside another function and expose it. To expose a function, return it or pass it to another function.

The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

#### 5. What's the difference between =, ==, and === in JavaScript?

=== must equal exactly what comes after
== must equal but doesn't have to be as exact
= equals the value of what comes after


  //Googled Answer
  By using = you assign a value to something.

By using == you check if something is equal to something else. This is not strict

By using === you check if something is equal to something else. This is also strict.

What strict does, in case it wasn't clear there, is that it checks not only the equality of the two values, it compares the types of the two values too. Using == will try and convert one side of the expression to be the same type as the other. For example, boolean and integer. The boolean value for true is 1, therefore does 1 equal 1? Yes, true. When using strict however, it does not try and convert before doing the comparison, it checks if true equals 1, which is doesn't as they are two different data types, and returns false.


#### 6. What does it mean that Javascript is "dynamically" typed?

  // Your Answer
  It means that there are many ways to write JavaScript and it's not a strict language like some other ones.  It also means that there are things you can write that may have errors that can pass through Javascript that maybe shouldn't.

  // Googled Answer
In dynamically-typed languages, the errors occur only once the program is executed. That is, at runtime. This means that a program written in a dynamically-typed language (like JavaScript or Python) can compile even if it contains type errors that would otherwise prevent the script from running properly.

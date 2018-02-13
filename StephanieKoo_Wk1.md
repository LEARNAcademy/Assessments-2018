### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
The data types in JavaScript are number, string, boolean, null, undefined, symbols, and objects. There are 6 primitives JavaScripts which are number, string, boolean, null, undefined, and symbols.

  //Googled Answer

The latest ECMAScript standard defines seven data types:

Six data types that are primitives:
.Boolean
.Null
.Undefined
.Number
.String
.Symbol (new in ECMAScript 6)

.Object (not a primitive data type)

//Primitive does not have a method, it's not functional. But the object is wrapped in the string object and can call the function and method.
//Prototype is object that wraps a primitive. In JS, we are only working with Prototype.
//Use a method in an object and use it in the program

#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

//This is what we see.

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

//This is what JS sees. They foresee what is all declared and depending on the order, the answer is undefined.

var text;
text = 'outside';

function logIt(){
    var text, num, arr, person, version;
    console.log(text);
    text = 'inside';
};

logIt();

```
//This is an example of hoisting. When JS is running line by line, it looks ahead in the scope. How many var/memory will it be declared?

first Guess: inside


Then, past the code in your console and explain why you were right/wrong.

I was wrong because the answer was undefined. This was because first of all, the var text = 'outside' is outside of the function, thus cannot grab the 'outside' value. I thought the console log would be 'inside', but this also does not work because the value of the text is set after the console log. The console log would show up 'inside' if var text = 'inside' would be before console.log(text). However, since the console.log was looking for text and there was not a value set before the console.log in the function, the result was undefined.

#### 3. What is JSON? How does it relate to javascript objects?

//JSON Data transfer with method that looks a lot like Javascript objects. Can we transfer method in JS objects into JSON? No!
//menu.id ==> "File"
//menu.popup.menuitem[1].onclick
//menu.popup.menuitem ==> [Whole array] - you can break it down


  //Your Answer
JSON is known as JavaScript Object Notation. JSON is a structured text format to make it readable for humans and to grab database. JASON is related to JavaScript objects because objects have keys and values to contain specific data. They are noted in a way that is pretty easy for the users to see and use.

  //Googled Answer
JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language (the way objects are built in JavaScript). An example of where this is used is web services responses. In the 'old' days, web services used XML as their primary data format for transmitting back data, but since JSON appeared (The JSON format is specified in RFC 4627 by Douglas Crockford), it has been the preferred format because it is much more lightweight.

JSON is built on two structures:

A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer


  //Googled Answer


#### 5. What's the difference between =, ==, and === in JavaScript?

// 3 == "3" true
// 3 === "3" false
/ if (x === 0 && y !== "3") <- looking for a 3 inside of a string.

  //Your Answer
The difference between =, ==, and === in JavaScript is that:
  . = is meant to set a value, for example, setting an attribute value to an attribute name, etc. (e.g. var color: "red")
  . == is meant to equal a value to another value and see whether the value is indeed equal to one another, in another words if the value is equal to the second value, the result is true; if not, the result is false.
  . === is meant to check whether the value is a specific datatype, for example, whether it's a number, a string, etc.

  //Googled Answer
. = is assigning a value to something {i.e. x=3}
. == is defined as "loose equality compares two values for equality, after converting both values to a common type. After conversions (one or both sides may undergo conversions), the final equality comparison is performed exactly as === performs it.  Loose equality is symmetric: A == B always has identical semantics to B == A for any values of A and B (except for the order of applied conversions).  
. === is defined as "strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different types, the values are considered unequal. Otherwise, if the values have the same type and are not numbers, they're considered equal if they have the same value. Finally, if both values are numbers, they're considered equal if they're both not NaN and are the same value, or if one is +0 and one is -0."

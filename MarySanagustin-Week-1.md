### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer

  PRIMITIVES:
  1. number
  2. boolean
  3. string
  4. null
  5. undefined
  6. symbol
  ---
  7. object - a datatype made from primitives

  //Googled Answer

  There are 7 basic types in JavaScript.

1. Number for numbers of any kind: integer or floating-point.
2. String for strings. A string may have one or more characters, there’s no separate single-character type.
3. Boolean for true/false.
4. Null for unknown values – a standalone type that has a single value null.
5. Undefined for unassigned values – a standalone type that has a single value undefined.
6. Object for more complex data structures.
7. Symbol for unique identifiers.

A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol

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

When you call the function logIt, the computer is asked to log text, which at that
point, it will access the global variable declared before the function is written.
After "outside" is logged to the console, the variable "text" is reassigned a new value
of "inside." However, at that point the code is finished running and the console will
have only printed "outside."

Then, past the code in your console and explain why you were right/wrong.

I was wrong because I needed to understand how local scopes work a little better. When the function logIt is called, it is looking to log a variable called text within the scope of that function, as opposed to accessing the global variable "text." This is because in the local scope of the function, a new and separate variable called "text" is declared yet undefined. It has no value until after the console is asked to log it, therefore it logs "undefined." Only after the function is finished running is it assigned the value "inside."


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer

JSON stands for JavaScript Object Notation. It is a lightweight data transfer syntax that uses strings. It is similar to plain javascript objects in that it follows a "key: value" model, however it cannot store functions.

  //Googled Answer

JSON is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer

Closures are when you declare functions within the scope of another function. The "inner function" cannot be invoked directly from the global scope, and has privileged access to the variables stored in the scope of its parent function, or any scope outside of itself including the global scope. This "protects" the variables stored inside from being easily altered or reset by mistake. Closures are useful for private data.

  //Googled Answer

A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer

A single = assigns value to a variable. If you use "==" to check for equality, JavaScript will attempt to convert datatypes to force equality ie: "8" == 8 is true. Three "===" checks for strict equality where the two values need to be the same in datatype and value ie: 8 === 8.

  //Googled Answer

In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.
This is different from algebra. The following does not make sense in algebra:

  x = x + 5

In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

------


JavaScript has both strict and type-converting equality comparison. For strict equality the objects being compared must have the same type and:

    Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.

    Two numbers are strictly equal when they are numerically equal (have the same number value).

    NaN is not equal to anything, including NaN.

    Positive and negative zeros are equal to one another.

    Two Boolean operands are strictly equal if both are true or both are false.

    Two objects are strictly equal if they refer to the same Object.

    Null and Undefined types are == (but not ===). [I.e. Null==Undefined (but not Null===Undefined)]

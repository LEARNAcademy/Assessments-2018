### Week 1 Assessment

These are potential interview questions. Try your best to answer each question
on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer

  The primitive data types are string, number, boolean, null, undefined,
  and symbol.

  Object is another data type in JavaScript.


  //Googled Answer

  The latest ECMAScript standard defines seven data types:

  Six data types that are primitives:
  Boolean,
  Null,
  Undefined,
  Number,
  String,
  Symbol (new in ECMAScript 6),
  and Object.

  All types except objects define immutable values (values, which are incapable
  of being changed). For example and unlike to C, Strings are immutable. We
  refer to values of these types as "primitive values".


#### 2. Look at this Javascript and try to predict, what will the browser's
####    console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess:

I don't think `logIt()` has access to the first `text` variable. If the
function were console logging `text` after that inner `text` variable was
defined, then I think it would print `inside`. But as written, `text` is
probably `undefined`.

Then, past the code in your console and explain why you were right/wrong.

Variables that are defined outside of functions have global scope. If a
variable of the same name is defined inside a function, that variable's
local scope, in a way, overrides the globally-scoped variable.

However, in the above code, the function is trying to console log the
local `text` variable before it's even been defined.

I.e.,

``` javascript
var text = 'outside';
function logIt() {
  var text = 'inside';
  console.log(text);
}

logIt(); // inside
```


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer

  JSON stands for JavaScript Object Notation. Its syntax is very similar
  to that of an object. However, a JSON's key names must be enclosed in strings
  because one usage of JSONs is transferring data around as strings.

  For example, this is an object:
  ``` javaScript
  {
    breed: "Siberian Husky",
    name: "Kiba",
    age: 2
  }
  ```

  This is a JSON:
  ``` javascript
  {
    "breed": "Siberian Husky",
    "name": "Kiba",
    "age": 2
  }
  ```

  //Googled Answer

  JSON stands for JavaScript Object Notation. JSON is a format for storing and
  transporting data. JSON is often used when data is sent from a server to a
  web page.

  JSON data is written as name/value pairs, just like JavaScript object
  properties. A name/value pair consists of a field name (in double quotes),
  followed by a colon, followed by a value.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer

  A closure can be recognized when we see a function inside a function.

  Closures are helpful in giving inner functions access to variables located
  inside outside functions.

  //Googled Answer

  A closure is an inner function that has access to the outer (enclosing)
  function’s variables—scope chain. The closure has three scope chains: it has
  access to its own scope (variables defined between its curly brackets), it
  has access to the outer function’s variables, and it has access to the global
  variables.

  The inner function has access not only to the outer function’s variables, but
  also to the outer function’s parameters. Note that the inner function cannot
  call the outer function’s arguments object, however, even though it can call
  the outer function’s parameters directly.

  You create a closure by adding a function inside another function.

  Example:
  ``` javascript
  function showName(firstName, lastName) {
    var a = "Your name is ";

    function fullName() {
      return a + firstName + " " + lastName;
    }

    return fullName()
  }

  showName("Kiba", "Hallquist"); // Your name is Kiba Hallquist
  ```


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer

  `=` is an assignment operator. We use it to assign a value to a variable.
  For example, `let index = 0;` sets the variable called index to a value
  of 0.

  `==` is a comparison operator. We use it to check value equality.

  For example,
  ```
  let a = 6;
  let b = '6';

  console.log(a == b); // true because the values are equal
  ```

  `===` is another comparison operator, but this checks for both
  value and type equality.

  For example,
  ```
  let a = 6;
  let b = '6';

  console.log(a === b); // false because the values may be equal, but
                        // one variable is a number while the other
                        // is a string
  ```

  //Googled Answer
  
  An assignment operator assigns a value to its left operand based on the value
  of its right operand. The simple assignment operator is equal (=), which
  assigns the value of its right operand to its left operand. That is, x = y
  assigns the value of y to x.

  Double equals is officially known as the abstract equality comparison
  operator while triple equals is termed the strict equality comparison
  operator. The difference between them can be summed up as follows: Abstract
  equality will attempt to resolve the data types via type coercion before
  making a comparison. Strict equality will return false if the types are
  different.

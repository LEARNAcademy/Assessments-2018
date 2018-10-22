### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  1. string - primitives
  2. number - primitives
  3. undefined - primitives
  4. boolean - primitives
  5. null - primitives
  6. char - primitives
  7. objects - object
  8. arrays - object

  //Googled Answer
    Boolean.
    Null.
    Undefined.
    Number.
    String.
    Symbol (new in ECMAScript 6)


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
This function will log "inside" to the console. Even though the text variable is defined in the global scope first, the newly defined text variable is inside the function's scope and hoists itself to the top to run instead.

Then, past the code in your console and explain why you were right/wrong.
It looks like I was partially correct. The variable declaration does hoist itself to the top of the function's scope, but it doesn't take it's value with it. Therefore, at the time that text is console logged, it has been declared but not assigned a value.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
JSON is a basic language based on the concept of Javascript objects in that it stores information in a table-like format by using key value pairs so that it can be easily read by computer programs.

  //Googled Answer
JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
A closure is a way of using scope to hide information. It does this by putting a function inside of another (or multiple), and it uses the inner function's local scope to create variables that are "hidden" from the outer functions because they can't see them. By doing this, you can protect data that you don't wish to be seen or changed.

  //Googled Answer
  Languages such as Java provide the ability to declare methods private, meaning that they can only be called by other methods in the same class.

  JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
= - One equal sign is the assignment operator. It is used to assign values to variables or functions.
== - Two equal signs symbolize a comparison of logic that will return either true or false. It is used to compare values in if statements and loops. It does not account for the variable's type.
=== - Three equal signs also symbolize comparison, but it also evaluates the variable's type. For instance, the string '2' and the number 2 would return true with two equal signs, but would return false with three.

  //Googled Answer
Triple equal sign in javascript means equality without type coercion. For example: 1=="1" // true, automatic type coersion 1==="1" // false, not the same type. Three equal signs indicates both the value and type are equal.

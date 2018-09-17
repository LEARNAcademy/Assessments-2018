### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  Primitive(number, string, boolean, null, undefined, symbol), Object(object)

  //Googled Answer
  "              "

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
undefined

Then, past the code in your console and explain why you were right/wrong.
I was correct. The reason "undefined" gets logged is because the declaration of var text gets hoisted to the top of the code.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JSON stands for JavaScript Object Notation. It is useful for storing and transporting data across the internet.

  //Googled Answer
  A JSON exists as a string, and its format looks like a JavaScript object. It can be used in JavaScript, saved as a variable, one would access the data via dot/bracket notation. As JSON can contain essentially objects in objects, one could also access tiered information by chaining the proper names/indexes together.

  JSON can also be arrays, and in reality they can exist as other data types (e.g. strings, numbers, etc). They can also be utilized outside of a JavaScript environment. A key difference between JSON and javascript is that in JSON, properties must be quoted strings.

  Lastly, it is important to note that JSON is just a data format, and it contains no methods.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  A closure is based on the idea that a function's scope is decided at declaration, not at invocation.

  //Googled Answer
  "A closure is the combination of a function and the lexical environment within which that function was declared. The environment consists of any local variables that were in-scope at the time the closure was created." For example, for the following code:

  function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      alert(name);
    }
    return displayName;
  }

  var myFunc = makeFunc();
  myFunc();

  "myFunc is a reference to the instance of the function displayName created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use and "Mozilla" is passed to alert."

  If displayName was not returned and stored into myFunc, and instead of calling myFunc, we simply called makeFunc, we would not call displayName, and actually would be unable to call it from outside the function, and thus be unable to use its contents/return.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  =: variable assignment
  ==: value comparison
  ===:value and data type comparison

  //Googled Answer
  =: assignment
  ==: abstract comparison, performs type conversion before comparing values
  ===: strict comparison, does not perform type conversion and compares both type and value

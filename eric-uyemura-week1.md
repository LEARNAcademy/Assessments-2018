// ### Week 1 Assessment // These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

// #### 1. Name all of the data types in Javascript, mark which are primitives. // //Your Answer

numbers boolean strings objects undefined

// //Googled Answer

numbers boolean strings objects undefined null symbol

// #### 2. Look at this Javascript and try to predict, what will the browser's console show?

var text = 'outside';
function logIt(){
 console.log(text);
 var text = 'inside';

};
logIt();
first Guess:

I thought logIt() would print outside because the function can access the var text in the global scope. However, logIt() prints undefined because var text was declared again within the function before it was called.

Then, past the code in your console and explain why you were right/wrong.

3. What is JSON? How does it relate to javascript objects?
// //Your Answer

It has something to do with javascript objects, and it is important to react.

// //Googled Answer

javascript object notation is a way to structure data and easily transfer it between a server and a web application.

// #### 4. Describe a closure, what is it good for and how do you recognize one? // //Your Answer // // // //Googled Answer // // #### 5. What's the difference between =, ==, and === in JavaScript? // //Your Answer // // // //Googled Answer //

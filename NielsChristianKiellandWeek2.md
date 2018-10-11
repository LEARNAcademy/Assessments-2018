### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 <link rel="stylesheet" href="style.css">

 //Googled Answer
 <link rel="stylesheet" href="styles.css">


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
A CSS class is used in a css file to add custom styling to html elements Ex: <div class="some_class">. An id should be used when it applies to only one element or piece of your html. Classes can be reused for multiple elements.
 //Googled Answer
The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.

#### 3. The class "heading-box" exists in our html file - write the css code that would:
.heading-box {
##### 1) align this box to the center of its container,
display: flex; justify-content: center; align-items: center;
Or if not using flex. depending on its container. width: 50% or some percentage, and auto left right margins.
##### 2) give it a black border that is 5px wide,
border: 5px solid black;
##### 3) make its text appear in the center of the box
text-align: center;
#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
Bootstrap is a css framework, with an insane amount of built in classes and functionality.
It is great for its ease of use, and pre-built classes and styling.

 //Googled Answer
"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web."

#### 5. Name 4 semantic html tags.
<section><main><article><aside><header><footer>
#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.
 //Your Answer
 block scope is scoped inside a block or {}. Using let inside a block lets the variable exist only inside that block as opposed to the function scoped var for declaring variables. Var inside a function will be function scoped, but inside a loop or if block that var can still be accessed outside.

 //Googled Answer

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
Front end development is the user/client side. What they use, and interact with. Back end being the behind the scenes logic.

 //Googled Answer
Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.
//block scope
if(name){
  let name = "NAME";
  console.log(name);
}
console.log(name) will not work, because let name is scoped inside the if
Class SomeClass{
  constructor(someProperties){
    this.someProperties  = someProperties;
  }
}

 #### 9. What is the difference between a div and a span?

 //Your Answer
 a div is an html element that is a block to hold other elements, a span is similar but inline and meant for less content, and will span the content inside inline.  


 //Googled Answer
The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?

 //Your Answer
 Inheritance is lets sub/child classes inherit methods, and properties from parents classes. JS uses class syntax but is prototypal inheritance, where prototype objects inherit directly from other prototype objects.

 //Googled Answer
Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects.

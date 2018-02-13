### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 Place the code <link rel = 'stylesheet' href='./mainstyle.css' /> into the head tag.

 //Googled Answer

In the header section, add: <link rel="stylesheet" type="text/css" href="PATHTOCSSHERE">

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer

Class is a selector for the parent tag. To declare a class in html, it would something like <div className ="round"> </div>. You should use an id instead of a class if you wish to make a single specific selector for an element.

 //Googled Answer

 The .class selector selects elements with a specific class attribute. The #id selector styles the element with the specified id.


#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
box-sizing:border-box;
##### 2) give it a black border that is 5px wide,
border: 5px solid black;
##### 3) make its text appear in the center of the box
text-align:center;

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Bootstrap is a front-end template for responsive medium like tablet and mobile. Bootstrap would be best if the website would be used in a tablet or mobile medium. Bootstrap has their own library on their server and it is open source.  


 //Googled Answer

 Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.
 Bootstrap is completely free to download and use! It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.

#### 5. Name 4 semantic html tags.

<header>
<section>
<main>
<footer>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer

I forgot about this portion. I remember using variables var, let, and const.

 //Googled Answer

The variables that are block scoped are let and const. When writing JS using var, it’s difficult to immediately discern which variables are scoped locally vs. globally. It’s very easy to accidentally create a variable on the global object in JavaScript. This generally doesn’t affect simple demo apps but can cause problems for enterprise level applications as team members accidentally obliterate each other’s variables. The new ES6 keyword let allows developers to scope variables at the block level (the nearest curly brackets). Const is the other new ES6 keyword for declaring variables. Const works like a constant in other languages in many ways but there are some caveats. Const stands for ‘constant reference’ to a value. The values that const references are not immutable (their properties can be changed). So with const, you can actually mutate the properties of an object being referenced by the variable. You just can’t change the reference itself.    


 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
Front end development is development of the website to produce user interface and user design which is what the clients see physically on the web. Tools for front end development would be having the knowledge of the languages HTML, CSS, React, Javascript, etc.

 //Googled Answer


 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

// variable favAnimal is assigned to a dog
var favAnimal = "dog";

//In string interpolation, instead of double quotes, the tick mark can be used and the + is not needed anymore. To call the variable favAnimal, all we need to do is to place the variable inside of the ${}.
console.log(`My favorite animal is a ${favAnimal}!`);

 #### 9. What is the difference between a div and a span?


 //Your Answer
A div is an element that works as a container that contains a group of content. Span is known as a temporary element to place inline styling on an element.

 //Googled Answer
The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
 Inheritance is retrieving an set objects and values from another class and extending the class to the current class created. For example, if class Car is created which objects with 4 wheels and 2 headlights, I can extend the objects to a new class by declaring class Nissan extends Car {...}.

 //Googled Answer

 When creating a new class, we are essentially creating a function and assigning a new instance of another function as the prototype. This is the basis of ‘prototypal’ inheritance, ie. if you are dealing with ‘Dog’ type that inherits from an ‘Animal’ class, the template for your dog is a newly created instance of animal.

 http://desalasworks.com/article/object-oriented-javascript-inheritance/

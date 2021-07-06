### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 In the html file with a style sheet referencing the name of the CSS file.

 //Googled Answer
Link the CSS file in the head section of the HTML page by using <link type="text/css" rel="stylesheet" href="filename.css"/>

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 A CSS class is a notation linking an item in HTML to the stylesheet in CSS.
 A class is declared with a . and the name of the class, an id is declared with a # and the name of the id.
 A class is designed to be used multiple times, while an id is used only once.

 //Googled Answer
Both classes and ids are used as "hooks" to apply styling attributes.
Classes can be used for multiple elements and multiple classes can be used on the same element.

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box
.heading-box{
    1) align: center;
    2) border: 5px, solid black;
    3) There is no direct vertical align setting in CSS, using flexbox:
       display: flex;
       justify-content: center;
       align-items: center;

}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 Bootstrap is a tool used to style a webpage. It has built in design packages. It's an easy tool to make big design changes easily, it is customizable, ...

 //Googled Answer
 ...open-sourced, and responsive to changes in screen size.

#### 5. Name 4 semantic html tags.
<header>
<footer>
<table>
<nav>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
 Block scope is the term for the updated version of JS that uses specific variables (let and const) within loops and if statements.

 //Googled Answer
Block scope gave loops and if statements their own scope and variables to use within that scope. After the implementation of block scope the variable var used in if/loop will still have global scope.

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
 Front end development is writing/managing the code for the piece of the webpage that is visible and dynamic to the user. A front end developers needs to make the page look appealing, make the page user-friendly, and also make sure the page acts the way the user expects it to act - asking for and returning correct information.

 //Googled Answer
Front end developers need to make sure their sites are responsive over a number of different devices, ensure cross-browser compatibility, make sure the site is rendered quickly, and have the ability to fix bugs as they occur. The font end developer is responsible for the view aspect of the MVC.

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

String interpolation
//an arrow function using the variable sayHi that take a name as an argument
var sayHi = (name) => {
    //the function returns the phrase "Hi," with whatever name is passed into the function by using the back tick and ${} around the specific item to be changed
    console.log(`Hi, ${name}`)
}
//calling the function with "Sarah" passed into the function
    sayHi("Sarah")

 #### 9. What is the difference between a div and a span?

 //Your Answer
 A div is an HTML container, identifying and linking a particular piece of code.

 //Googled Answer
A span is an in-line element. It identifies a piece of text.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
One piece of the object will retain the attributes of the whole object, even after destructuring has occurred.

 //Googled Answer
Particular properties and methods of a class will be passed from the parent to the child component.

### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?
 
 //Your Answer
 By using a link tag with rel, type, and href attributes in the head element.
 
 //Googled Answer
 <head><link rel="stylesheet" type="text/css" href="theme.css"> </head>
 
 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?
 
 //Your Answer
 A class is an attribute that can be assigned in a tag to a html element.  One declares a class to a tag by assigning the class a value in the opening tag of the element.  A developer should use a class when the class is going to be used on multiple elements and an id when it is going to be used once.
 
 //Googled Answer
 The class attribute specifies one or more class names for an HTML element. The class name can be used by CSS and JavaScript to perform certain tasks for elements with the specified class name.

<div class="text-center"></div>

ID's are unique:  
    Each element can have only one ID
    Each page can have only one element with that ID 
Class' are not unique:
    You can use the same class on multiple elements.
    You can use multiple classes on the same element.

 
#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container, 
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

.heading-box {
    display: flex;
    border: 5px solid black;
    justify-content: center;
}


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?
 
 //Your Answer
 Bootstrap is an add in language that can be tied into existing html through the script tag that allows extended functionality for design.
 
 //Googled Answer
 Bootstrap is a free and open-source front-end framework for designing websites and web applications. 
 
 Bootstrap is responsive, mobile-first, prevailing, and front-end framework, which is developed along with CSS, JavaScript, and HTML. Bootstrap has many benefits from scratch for every web development project, and one such reason is the huge number of resources accessible for Bootstrap.
 
#### 5. Name 4 semantic html tags.

table, article, form, input

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped. 
 
 //Your Answer
 Block scope differs from JS' local and global scope because it is only accessible and by a specific element such as if, let, loops, and const.  For instance one would use let instead of var in loops so the i assignment is only accessible by that specific loop.
 
 //Googled Answer
 Block scopes are what you get when you use if statements, for statements, and the like. You can also use them stand-alone with a simple begin-end curly braces {}, not to be confused with empty object literals.

 Block scopes are different from function scopes in JavaScript. A function scope is created for every function. We often identify those scopes as local scopes and identify the top-level scope as the global scope. A variable declared with var in a block scope is available outside of that block scope. 
 
 Let & Const.
 
 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?
 
 //Your Answer
 Front End Development designs what the client side sees when interacting with a site or database.  

User experience design, graphic design, html, css, fontawesome, bootstrap, jQuery, JS, JS animation, AJAX, & mobile first design.
 
 //Googled Answer
 Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript.

HTML, CSS, JavaScript, jQuery, JavaScript Frameworks, Front End Frameworks, Experience with CSS Preprocessors, Experience with RESTful Services and APIs, Responsive and Mobile Design, Cross-Browser Development, Content Management Systems and E-commerce Platforms, Testing and Debugging, Git and Version Control Systems, and Problem Solving Skills.

 
 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on. 

 Vanilla (this would be vanilla right?)
//declare the function message
var message = function(name) { 
//function will remember to return a string with the argument name replaced by whatever is put into the ()    
    return "Hey there," + " " + name + "."
}
//function will return "Hey there, Annie."
message(Annie)

String Interpolation
//declare the function message
var message = function(name) { 
//function will remember to return a string with the argument name replaced by whatever is put into the () but by using the back ticks you don't have to remember to add the spaces or risk forgetting a plus somewhere 
    return `Hey there, ${name}.`
}
//function will return "Hey there, Annie."
message(Annie)
 
 
 #### 9. What is the difference between a div and a span? 
 
 
 //Your Answer
 div is a box to hold elements
 span puts elements in one line
 
 //Googled Answer
   The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.
   
#### 10. How would you explain the idea of "inheritance" in object oriented programming?
 
 
 //Your Answer 

 objects deeper in the code inherit the qualities of the objects that are further outward in scope
 
 //Googled Answer
It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods.
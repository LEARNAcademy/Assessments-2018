### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?
 
 //Your Answer : add link using link tag
 
 
 //Googled Answer : Checking CSS file path and inserting the line into an HTML document.
 
 
 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?
 
 //Your Answer : css class is set of definition of the html format. Using id, we can select indivisual tag.
 
 //Googled Answer : The .class selector selects elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the name of the class. You can also specify that only specific HTML elements should be affected by a class. Classes can be used as many times as needed within a document. IDs can only be applied once within a document.
 
 
#### 3. The class "heading-box" exists in our html file - write the css code that would:

<div class="heading-box">example</div>

##### 1) align this box to the center of its container, 
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

.heading-box{
	margin: auto;
	border: 5px solid black;
	text-align: center;

}


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?
 
 //Your Answer : Bootstrap is collection of pre-defined css classes. By using Bootstrap, we can save time to make project styling work.
 
 
 //Googled Answer : Bootstrap is a free and open-source front-end framework for developing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. There are a few reason to choose the Bootstrap CSS Framework. 1. Easy to get started. 2. Great grid system. 3. Base styling for most HTML elements. 4. Extensive list of components, 5. Bundled Javascript plugins. 6. Good documentation.
 
 
#### 5. Name 4 semantic html tags.
<form>, <table>, <article>, <nav>, <section>, <aside>,<header>, <footer>,<main>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped. 
 
 //Your Answer
 
 
 //Googled Answer : In ES6, let and const were introduced as alternative ways of declaring variables — both being blocked scoped. In block scope, any block will be a scope. This will give a more consistent behaviour. A variable being declared using var will be function scoped, meaning it will exist within the scope of the function it’s declared inside of.
 
 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?
 
 //Your Answer : front end development is working on what a user see on the webpage. It requires knowledge of html, css, javascript languages, and developement frame works like react or angularJS. 
 
 
 //Googled Answer : Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript.  HTML & CSS, JS, jQuery, JS Frameworks(including AngularJS, Backbone, Ember, ReactJS), Front End Frameworks like Bootstrap, Experience with CSS Preprocessors like SASS and LESS, Experience with RESTful Services and APIs, Responsive and Mobile Design, Cross-Browser Development, Content Management Systems and E-commerce Plaforms like WordPress, Joomla, Drupal, and Magento Testing and Debugging, Git and Version Control Systems. Problem Solving Skills.
 
 
 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on. 

 block scope,

 i only works in for loop
 for(let i = 0, i < 10, i++){
 	i++
 } 

 classes

 .test-box{
// set color to red
 color: red;
// set background color to red
 background-color: yellow;
// set font to arial
 font-family: arial;
}

string interpolation

var a = 5;
var b = 10;
// "Fifteen is 15 and not 20."
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);


 #### 9. What is the difference between a div and a span? 
 
 
 //Your Answer : div works on multiple line and span work on inline.
 
 
 //Googled Answer : The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.
   
   
#### 10. How would you explain the idea of "inheritance" in object oriented programming?
 
 
 //Your Answer : child objects can inherite from parent object properties 

 //Googled Answer :  A class acquires the properties of another class. where one class can have more than one superclass and inherit features from all parent classes. "Multiple Inheritance (object-oriented programming) was widely supposed to be very difficult to implement efficiently.

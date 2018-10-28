### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer

 Create a link tag in your html file and put the following:

 <link rel="stylesheet"  type="text/css" href="styles.css" /> Or what ever name you gave your css style sheet file.

 //Googled Answer



To use the <link> tag to specify an external style sheet, follow these steps:

	1) Define the style sheet.
	External style sheets are very similar to the ones you already know. Just put all the styles in a separate text document without the <style> and </style> tags.

	2) Create a link element in the HTML page’s head area to define the link between the HTML and CSS pages.
	Example:
	 <link rel = "stylesheet"
	   type = "text/css"
	   href = "myStyle.css" />
	3) Set the link’s relationship by setting the rel = “stylesheet” attribute.
	Honestly, stylesheet is almost the only relationship you’ll ever use, so this should become automatic.

	4) Specify the type of style by setting type = “text/css“.

	5)Determine the location of the style sheet with the href attribute.


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer

 A CSS class is a way to select multiple elements in an html file. Typically you would declare a css class by inserting the class name into the first tag of the element you are targeting. Example would be the "<p>" tag. You would want to insert the class name after the "p". "<p class="intro"></p>".

An id selector is typically used on one particular or specific element. The id selector is used when you want to change that specific element without affecting the other matching elements.

//Googled Answer

 The .class selector selects elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the name of the class. You can also specify that only specific HTML elements should be affected by a class.

 The #id selector styles the element with the specified id.


#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

.heading_box {
	border: 5px, solid, black;
	margin: auto;
	text-align: center;
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 Its a front end framework that includes html, css, and javascript. Bootstrap is useful for responsive web design and building websites for mobile devices.


 //Googled Answer

 What is Bootstrap?
 Bootstrap is a free front-end framework for faster and easier web development
 Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins
 Bootstrap also gives you the ability to easily create responsive designs

Why Use Bootstrap?
Advantages of Bootstrap:
Easy to use: Anybody with just basic knowledge of HTML and CSS can start using Bootstrap
Responsive features: Bootstrap's responsive CSS adjusts to phones, tablets, and desktops
Mobile-first approach: In Bootstrap 3, mobile-first styles are part of the core framework
Browser compatibility: Bootstrap is compatible with all modern browsers (Chrome, Firefox, Internet Explorer, Edge, Safari, and Opera)


#### 5. Name 4 semantic html tags.
<nav>
<section>
<header>
<footer>


#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
Block scope is defined by the use of local scope variables defined with the use of let and const inside of curly brackets.

Local: Variables defined inside of a function or curly brackets.
Global: Variables defined outside of a function.
Block scope variables: When creating let or const variables inside of a function or curly braces, they are only available within that function or braces.

 //Googled Answer

 With var
 Variables declared with var do not have block scope. Variables introduced with a block are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. In other words, block statements do not introduce a scope. Although "standalone" blocks are valid syntax, you do not want to use standalone blocks in JavaScript, because they don't do what you think they do, if you think they do anything like such blocks in C or Java.

 With let and const
By contrast, identifiers declared with let and const do have block scope. They aren't hoisted. Repeated declarations will result in an error.



 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
Front end development require the basic use of HTML5, CSS, and Javascript. There are other tools that can be implemented and utilized as a front end developer, such as Boostrap, SASS, and even GitHub. Responsive design is very important as there are many different browsers and devices that have access to the internet and that can display your website. As a developer its important to account for as many as you can so that your website displays properly.

 //Googled Answer
10 Essential skills every front end developer needs:
	1) HTML/css
	2) JavaScript
	3) CSS & Javascript frameworks
	4) CSS Preprocessing
	5) Version Control/GIT
	6) Responsive Design
	7) Testing/Debugging
	8) Browser Developer Tools
	9) Building & Automation Tools/Web Performance
	10) Command Line

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

Example: String interpolation
let myName = "Jason Bourne"
console.log(`Hi my name is ${myName}.`)

Example: Classes

class User {
    constructor(email, username, birthday) {
        this.email = email;
        this.username = username;
        this.birthday = birthday;
    }
}


 #### 9. What is the difference between a div and a span?


 //Your Answer


 //Googled Answer
 The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.




#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer

 Parent objects can pass properties and behaviors to a children of its classes.

 //Googled Answer
 Inheritance in most class-based object-oriented languages is a mechanism in which one object acquires all the properties and behaviors of another object. JavaScript is not a class-based language although class keyword is introduced in ES2015, it is just syntactical layer. JavaScript still works on prototype chain.

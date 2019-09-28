### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 Href tag 

 <href: "" />

 //Googled Answer
 <link rel="stylesheet" type="text/css" href="PathToCSSFile">


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 you should use an id instead of a class when you are talking about only one element.  classes can hold multiple elements.  You can declare it in the HTML directly by putting it in <style></style> tags, or in an external style sheet which you would declare using <link rel="stylesheet" type="text/css" href="PathToCSSFile">

 //Googled Answer
 Classes are reusable styles that can be added to HTML elements.

 The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.

 The class attribute specifies one or more class names for an HTML element.

The class name can be used by CSS and JavaScript to perform certain tasks for elements with the specified class name.

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

.heading-box{
  align: center;
  border: solid, black;
  border-width: 5px;
  text-align: center;
}


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 A css library that is compatible across many browsers.  Makes templating websites easy and people may use it in a project if they don't have the money to hire front end designers, or want to be sure their website is responsive across all browsers.

 //Googled Answer
 Bootstrap is a free front-end framework for faster and easier web development
Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins
Bootstrap also gives you the ability to easily create responsive designs


#### 5. Name 4 semantic html tags.
<header />
<footer />
<form />
<article />

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
 block scope is JS's new local scope for while, if, and for loops.  global scope is accessible by the entire program, local is available only to the function which it's in and the rest of the program cannot use it.  Variables that are block scoped are var, let, and const.

 //Googled Answer
 The new ES6 keyword let allows developers to scope variables at the block level (the nearest curly brackets).


 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
 working with CSS or any other styling front end tools that directly affect the customer facing UI.  I would think desirable skills would be a good eye for design, understanding sizing on webpages and where to place all the elements of the page.


 //Googled Answer
 Tailoring user experience
 Bringing a designer’s concept to life with HTML, CSS, and JavaScript
 Production, modification, and maintenance of websites and web application user interfaces
 Creating tools that enhance how users see and interact with your site in any browser
 Implementing responsive design for mobile sites
 Contributing some back-end experience, collaborating on APIs, and more
 Maintaining software workflow management with a project management tool like GitHub and task runners like Grunt and Gulp
 Consulting on SEO best practices
 Testing the site during development for usability and fixing any bugs


 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

 class Theresa{   //making a new class named Theresa
   constructor(){
     this.haircolor = brown   //making an attribute of hair color
     this.eyecolor = blue
   }
 }

 dyeHair(){  
   this.haircolor= blonde  //changing haircolor in
 }

let Theresa = new Theresa ()  //creating a new var using the class properties of Theresa
this.haircolor= red
this.eyecolor

 #### 9. What is the difference between a div and a span?


 //Your Answer
 really had no idea what a span was... had to google it.

 //Googled Answer
  The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
 a child property inherits all the properties of a parent element.  it can change or add to them in itself by using state.  

 //Googled Answer

 In object-oriented programming, inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass or base class. A class that inherits from a superclass is called a subclass or derived class

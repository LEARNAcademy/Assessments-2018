### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 Place the following link in the head of the html page:  <link rel = "stylesheet" href = "fileName.css" type = "text/css">. (Although, I notice it's common practice to omit the type attribute.)

 //Googled Answer
 Insert   <link rel="stylesheet" href="styles.css"> in the head of HTML doc. In HTML5, the type attribute is no longer required for CSS. The default value is "text/css".

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 A class refers to a group of HTML elements to which the same style will be applied. You declare a class in HTML simply by adding class = "className" inside the opening tag of each element. An id is useful when you are targeting an individual element to be referenced/styled in a manner specific only to that element.

 //Googled Answer
 class selector is most often used on several elements. This allows you to set a particular style for many HTML elements with the same class. Id is used when we have to apply CSS property to one attribute only.

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
margin: auto
##### 2) give it a black border that is 5px wide,
border: 5px solid black
##### 3) make its text appear in the center of the box
text-align: center

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 Bootstrap is a library of predesigned webpage tools that can improve the look and functionality of your website.  Such tools include design elements such as a Jumbotron, image carousel, navbars, and buttons.

 //Googled Answer
Bootstrap is an open-source front-end framework for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components.


#### 5. Name 4 semantic html tags.
  <main> <header> <nav> <article>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer:
 In block scope a variable is accessible within the block of code, or between curly braces
 This differs from JS local scope in which a variable is accessible only within the function, and global scope, in which the variable is accessible everywhere within program.  Block scope uses let and const and should be used be used in loops.

 //Googled Answer: Local scope means variable is available inside function only, global scope means it's available anywhere in the program, and block scope means it's available bewtween curly brackets.A variable declared with var in a block scope is available outside of that block scope, whereas a variable declared with var in local scope is available in that function only.

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer:
  Front end development deals with designing and developing the client side of the web application.  This basically means anything that happens within the browser - the user experience. Tools required are HTML, CSS, and JavaScript.

 //Googled Answer:
 Front-end web development focuses on implementing the visual elements that users see and interact with in a web application.  HTML, CSS, and JS are all necessary for front-end development.


 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.  
 String interpolation refers ES6 syntax that can be used instead of string concatenation. Rather than using quotation marks to encapsulate the strings, and then using the + sign to join strings and other data(which can easily lead to mistakes), string interpolation simplifies the process, as seen below:

 "My name is" + person.name + ". I like " + person.hobby + " and " + person.food + "." becomes `My name is ${person.name}. I like ${person.hobby} and ${person.food}.` Much nicer! The main differences in syntax are using back ticks to surround content and using a placeholder in form of ${}.

 #### 9. What is the difference between a div and a span?
 //Your Answer
 A span is an inline tag that acts upon a small segment of content, such as bolding or italicizing text.  A div is used to create a container for other content. It is often used to separate blocks of code for improved organization and readability.  

 //Googled Answer  A span is an inline element, which means it doesn't cause a line break.  It is usually used on a chunk of HTML, but does not automatically style it. An attribute would have to be added to style the content.  A div is a block element - meaning it does cause a line break. It is usually used as a container for other HTML elements and to separate them for the rest. it is an unstyled tag and has no required attribute.


#### 10. How would you explain the idea of "inheritance" in object oriented programming?

 //Your Answer:  
 A child object will inherit the properties of the parent object.

 //Googled Answer:
A class defines the data and functionality of an object. Object instances can then be created from class (instantiation) and the child classes inherit data/features of parent class.  This means common functionality can be reused rather than duplicated.

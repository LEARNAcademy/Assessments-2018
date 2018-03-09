### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer

 <link rel="stylesheet" type="text/css" href="file.css">

 //Googled Answer

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer

 A class selector is used to target more than one HTML element for styling; An id is used to target a single HTML element; Call a class with ".class" and an id with "#id" in the CSS file

 //Googled Answer

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,

.heading-box {
  margin: auto;
}

##### 2) give it a black border that is 5px wide,

.heading-box {
  border: 5px solid black;
}

##### 3) make its text appear in the center of the box

.heading-box {
  text-align: center;
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer

 A library of class names with styling already built into each one

 //Googled Answer

 Front-end component library; Open-source toolkit for developing with HTML, CSS and JS; Framework for developing responsive, mobile first projects on the web; includes pre-built components, a responsive grid system, and plugins.  

#### 5. Name 4 semantic html tags.

section, article, main, header, footer

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer

Local scope only applies to functions, but block scope in ES6 allows for loops and if statements to have local scope as well (or block scope) by using "let" or "const" to assign variables. If "var" is used outside of a function, in a loop or if statement, it would be available at the global scope level. However, unlike using "var", which can be redefined/redeclared or reassigned, "let" can only be reassigned and not redefined/redeclared, and "const" can't be changed at all.

 //Googled Answer

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer

Front end development is used to manipulate the display of the user interface. Front end languages include HTML, CSS and JS. Bootstrap is useful for front end development. Design is a necessary skill. They should also be able to account for various screen-sizes (create reactive websites or apps).

 //Googled Answer

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

//String interpolation
//Declare a variable

var name = "Alexa"

//call this variable inside a String

console.log(`My name is ${name}`)

 #### 9. What is the difference between a div and a span?

 //Your Answer

 Span creates a box that is only as big as the element itself; used in-line, for smaller elements
 Div is used to group larger elements or chunks of code

 //Googled Answer

#### 10. How would you explain the idea of "inheritance" in object oriented programming?

 //Your Answer

Attributes of parent components can be "inherited" (copied) down to the child components

 //Googled Answer

 In object-oriented programming, inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass or base class. A class that inherits from a superclass is called a subclass or derived class.

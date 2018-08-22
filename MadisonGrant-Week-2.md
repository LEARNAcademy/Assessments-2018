### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 By linking the CSS file in between the <head> </head> tags.

 //Googled Answer

 "The link is just a simple line of HTML that you put in the <head> section of your HTML document, it looks like this:"

<link rel="stylesheet" type="text/css" href="mystyles.css" media="screen" />


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 - A CSS class helps consistently style a group of elements if they are all identified as the same class.
 - Declare a class in HTML by adding that property to an element:
 <div class = "example"> </div>
 - IDs should be used when a single element needs to be styled.

 //Googled Answer
 - Any styling information that needs to be applied to multiple objects on a page should be done with a class.
 - in HTML: <div class="widget"></div>
 - IDs are unique, Classes are not unique. You can use the same class on multiple elements, you can use multiple classes on the same element, but each element can only have one ID.



#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box


.heading-box {
border: 5px solid #000;
display: flex;
justify-content: center;
align-items: center;
}


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer

 Bootstrap is a framework for HTML, CSS, and Javascript.

 //Googled Answer

 Bootstrap is responsive, mobile-first, prevailing, and front-end framework, which is developed along with CSS, JavaScript, and HTML. Bootstrap has many benefits from scratch for every web development project, and one such reason is the huge number of resources accessible for Bootstrap.


#### 5. Name 4 semantic html tags.
<footer>
<header>
<main>
<form>


#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
 Block scope was created with the 'let' and 'const' variables. 'var' variables do not have block scope. Local scope variables can only be reached inside that function, global scope variables can be grabbed from any function.

 //Googled Answer
 "A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets and may optionally be labelled."

 "A scope is where you can refer to a variable. A block defines a block scope a variable defined inside a block will be defined only inside that block and you can't reference it after the end of block."

 "Const and Let are block scope variables."

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
 Front end development is developing the appearance/layout of an application. Tools/Skills that would most likely be needed of front end developers would be knowledge of HTML/CSS, JavaScript, an eye for design and problem solving skills.

 //Googled Answer
 "Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript."

 Tools/Skills needed according to the internet:
 - HTML/CSS
 - JavaScript/JQuery
 - Front End Frameworks (Bootstrap)
 - Experience with RESTful Services and APIs
 - Experience with CSS Preprocessors
 - Cross-Browser Development
 - Testing and Debugging


 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

let dog1 = "Bonnie" // let dog1 and dog2 be the names of my pets
let dog2 = "Bjorn"

//backticks are used for string interpolation
 let example = `My dogs are: ${dog1} and ${dog2}`

 #### 9. What is the difference between a div and a span?

 //Your Answer
 Span element is in-line, div is block-line.

 //Googled Answer
"The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code."

#### 10. How would you explain the idea of "inheritance" in object oriented programming?

 //Your Answer
 Inheritance is when a child class 'inherits' the attributes and methods of a parent class.

 //Googled Answer
 "Inheritance is one of the core concepts of object-oriented programming (OOP) languages. It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods."

 "In Java, each class can only be derived from one other class. That class is called a superclass, or parent class. The derived class is called subclass, or child class."

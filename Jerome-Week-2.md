### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer

   To link a CSS file, you need to add that CSS file link to the HTML's head section. Also, you need to make sure the CSS file correctly names and references the HTML element it is styling.


 //Googled Answer

   External style sheets can be referenced with a full URL or with a path relative to the current web page.
   This example uses a full URL to link to a style sheet:
      <link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">

   This example links to a style sheet located in the same folder as the current page:
      <link rel="stylesheet" href="styles.css">


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer

  Classes are used to style HTML elements with the same class name. You declare a class in CSS by adding a "." before the class name - in HTML classes are defined when you name an element with the "class" attribute (see example below). You can use IDs and classes interchangeably, however, convention prefers IDs to be used for more specific, single elements while classes to be used to style multiple, more general elements.

    Example:

      HTML:
      <p class = "cats"> Meow </p>

      CSS:
      .cats {
      }

 //Googled Answer

   -The .class selector selects elements with a specific class attribute.
   -HTML Syntax: <element class="classname">
   -Two main reasons to use an ID instead of class: Javascript and Browser Functionality

       1. JavaScript depends on there being only one page element with any particular id, or else the commonly used getElementById function wouldn't be dependable.

       2. ID's have special browser functionality (classes don't) - ID's have a "hash value" in the URL. If you have a URL like http://yourdomain.com#comments, the browser will attempt to locate the element with an ID of "comments" and will automatically scroll the page to show that element.



#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

  .heading-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px black;
    text-align: center;
  }

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer

  -Bootstrap is a library that comes pre-loaded with items (e.g., navigation bars, headers, footers) to build a website faster.
  -I would use Bootstrap to build a website quicker in case I am working with a tight deadline or with a website that does not require as much intricate customization

 //Googled Answer

  -Bootstrap is a free front-end framework for faster and easier web development
  -Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins
  -Bootstrap also gives you the ability to easily create responsive designs

#### 5. Name 4 semantic html tags.

  <header>
  <footer>
  <main>
  <section>


#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer

  Block scope refers to a scope that lies within a loop
  Variable const, let, and var can be block scoped


 //Googled Answer

  In block scope, any block will be a scope. In ES6, let and const were introduced as alternative ways of declaring variables — both being blocked scoped. Block scope allows scope within certain items like loops.

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer

  A front-end developer deals with the client-facing aspect of building and maintaining websites and webapps. HTML, CSS, Javascript, and React would all be tools unique to front-end developer (with a slight exception for Javascript since it can also be used for back-end applications)

 //Googled Answer

  Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript.


 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

  Block scope:
  let dog = "woof"
  function cat () {
      let dog = "Meow"
      let puppy = "baby dog"
      console.log(dog) // logs "Meow"
      console.log(puppy) // logs "baby dog"
  }
  console.log(dog) //logs "woof"
  console.log(puppy) //should return error - undefined

 #### 9. What is the difference between a div and a span?


 //Your Answer

  div is used primarily to divide sections, while span is used to holding blocks of text (like a paragraph)


 //Googled Answer

  The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.


#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer

  Inheritance would be when you assign an attribute/date to a parent object and then you pass this attribute/date to it's child object

 //Googled Answer

  In object-oriented programming, inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass or base class. A class that inherits from a superclass is called a subclass or derived class. The terms parent class and child class are also acceptable terms to use respectively. A child inherits visible properties and methods from its parent while adding additional properties and methods of its own.

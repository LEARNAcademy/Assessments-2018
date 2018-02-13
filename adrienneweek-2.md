1. How do you link a css file to your html page?

// Adrienne: <link rel="stylesheet" src="myfile.css">
// Google:  <link rel="stylesheet" href="myfile.css">


2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

// Adrienne: It is a way to target a section of html that you want to style.  An id targets a specific item--it should only be used on one thing vs. class which can be used multiple times.  <section class="thisclass"></section>
// Google: Class used on multiple elements, id on one specific.



3. The class "heading-box" exists in our html file - write the css code that would:

1) align this box to the center of its container,
2) give it a black border that is 5px wide,
3) make its text appear in the center of the box

.heading-box {
  margin: 0 auto;
  border: 5px dotted black;
  text-align: center;
}


4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

// Adrienne: Bootstrap is a framework that allows you to easily add set components to a webpage, such as navigation bar, header, image carousels.  I think it's especially useful for navigation bars, as it makes it responsive for different screen sizes.  Things like carousels let you easily add an image gallery with animation and styling.
// Google: Bootstrap is a library.  Makes website responsive, and provides design templates for nav, forms, buttons, etc.


5. Name 4 semantic html tags.

// Main, Section, Article, Header


6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

//Global variables are defined in the main body of the code, outside all functions; local scope is defined within a function.  Let and const are block scope variables,
// Let variables only exist in the block they are defined in, while const variables cannot be changed once defined.  Block scoped variables are scoped to the containing function or script.


7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

// Adrienne: Front end development involves whatever the user interacts with.  Tools include HTML, CSS, JavaScript, and some design is required.
// Google: Front end code runs inside the user's browser.  HTML, CSS, JS, Git, responsive design, command line.


8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

// Classes:

//Defines class of an object:
class Pet {
  //Constructor builds the class, allows arguments to be passed through (ie name)
  constructor(name) {
    this.name = name
    this.hungry = false
    this.legs = 4
    this.mode = "normal"
  }
//Defines a method that can be performed on object and change properties
  activate() {
    this.mode = "hyperdrive"
  }
}

//Defines a class that takes properties from the parent class:
class Bird extends Pet {
  constructor(name) {

    //Updates specific properties of parent class and overwrites them:
    super(name)
    this.legs = 2
    this.mode = "flying"
  }
}


//Defines new object in class Pet, passes name argument to constructor:
let jiji = new Pet("Jiji")
//Applies method to object, which updates a property:
jiji.activate()
//Targets specific property in object and updates it:
jiji.hungry = true

//Defines object of child class:
let capn = new Bird("Cap'n")

console.log(jiji)
//Jiji: name="Jiji", legs=4, hungry=true, mode="hyperdrive"
console.log(capn)
//Capn: name="Cap'n", legs=2, hungry=false mode="flying"


9. What is the difference between a div and a span?

// Adrienne: A div is a way to divide blocks of html, while span inherits styling properties of its parent element.
// Google: Span is an in-line element and is used for a small block of HTML inside an element (such as a <p>), and div is a block-line element used to divide larger chunks of code.


10. How would you explain the idea of "inheritance" in object oriented programming?

// Adrienne: When defining a class, you can extend that class into new classes, which will inherit the original properties, and you can then redefine certain properties of the class, while keeping the inherited.
// Google: inheritance is when a class is based on another class--a mechanism in which one object acquires all the properties and behaviors of the parent object.  This allows you to create classes that are built upon existing classes.

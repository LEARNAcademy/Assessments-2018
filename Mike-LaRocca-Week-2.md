### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer

<link rel="stylesheet" href="address of the file">

 //Googled Answer

 <link rel="stylesheet" type="text/css" href="PATHTOCSSHERE">

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 Classes are used to categorize HTML for organization and styling purposes.  One can isolate a particular class to apply styling elements to all of them.
 <div class="enterclasshere">
 An id should be used when you want to target one html element specifically with styling.
 //Googled Answer
 Id's are also needed for JavaScript integration

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

.heading-box {
  border: 5px solid black;
  test-align: center;
  position: absolute;
  margin-left: 50%;
  margin-top: 50%;
  vertical-align: center
}


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 Bootstrap is a front end development library that is used to quickly create responsive HTML elements in a "mobile first" paradigm.
 If one needed to use a grid to organize a page.
 If one wanted to easily add forms, buttons, and a clean navigation bar.
 The main reason is the developer can structure the website to deal with different screen sizes.

 //Googled Answer
 Bootstrap is a framework to help you design websites faster and easier. It includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels, etc. It also gives you support for JavaScript plugins
 -supported by most modern bowsers
 -size adjusting elements (mobile/tablet/desktop)
 -big support community
 -easy to set up dev environment
 -good documentation
 -customizable

#### 5. Name 4 semantic html tags.
<header>
<article>
<nav>
<footer>


#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
Block Scope involves defining variables outside of a function but within brackets of something like an if or for loop.  The variables defined with const and let are block scoped.

 //Googled Answer

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
Front end development is anything involving the look, design, or layout of the page and how a user interacts with that page.  
Aesthetic prowess and design skill.  The ability to color coordinate, think like a user, and create something visually stimulating.
Front end developers often use a library to facilitate their development work.  They require HTML/CSS/JavaScript knowledge and knowledge/access to a browser.


 //Googled Answer
SEO as well

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.
Classes are used to define the details of an object

//the class declaration is followed by a Capital class name.

class Person {

//the constructor will allow the future creation of different People amongst the calss.

  constructor(name, gender){
    this.name: name
//each 'variable' is an attribute or quality of the object.  
    this.gender: gender 
  }
}

// to create a new person
var person1 = new Person(Jimmy, M)

 #### 9. What is the difference between a div and a span?


 //Your Answer
A div is typically used to separate sections of an html page.  A span is usually used to breakup text content with styles.
I believe HTML reads them no differently.  It's more a human distinction.

 //Googled Answer
Div has a line break before and after it.
Span is inline.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
The inheritee (the one inheriting) will receive all the attributes of the class to which it extends. A man will inherit all the qualities of a person
but will be distinguished by other man-like qualities.
 //Googled Answer

### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 Import it in the header of your html page


 //Googled Answer
 According to W3Schools, "To use an external style sheet, add a link to it in the <head> section of the HTML page"


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 A CSS class is a name that you gave to an attribute in your HTML page. Declare it in the open tag of your attribute. For example,

 <p Class=aClassName></p>

 You use classes for attributes that can be used/shared across multiple attributes. You would use an id for a specific attribute that doesn't have anything in common with other attributes.

 //Googled Answer
 W3Schools states "The HTML class attribute is used to define equal styles for elements with the same class name.So, all HTML elements with the same class attribute will have the same format and style." They basically state the same thing I said about class declarations.

 https://css-tricks.com/the-difference-between-id-and-class/ is a great article that explains the differences between an ID and a Class. Basically, ID's are unique. Classes are not. There is obviously more to the article than that, but that's the main point.


#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
.heading-box{
  margin: 0;
  display: flex;
  justify-content: center;
}

##### 2) give it a black border that is 5px wide,
.heading-box{
  border-style: 5px sold black;  
}
##### 3) make its text appear in the center of the box
.heading-box{
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 Bootstrap is a library that is used for CSS and HTML styles. So, templates. I would use it when I need a specific type of element or layout, but I don't want to build it all from scratch.


 //Googled Answer
 W3Schools states the following:
  1. Bootstrap is a free front-end framework for faster and easier web development
  2. Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins
  3. Bootstrap also gives you the ability to easily create responsive designs

  They also state that it's a good for responsive design, which is something I should have thought about in my answer.


#### 5. Name 4
<header>
<main>
<section>
<footer>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
 block scope is binding the variables used with in a block (the curly braces {}). This means that it is only available for use within that block, not outside. Global scope can be use throughout the file with no limitations on what functions interact with it.


 //Googled Answer
 So, something that I forgot about was that ES6 introduced other types of block scoping (besides function scope). That is, if statements and loops can now have their own scope as well. With that, var and const were born.

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
 Front end development is concerned with anything that the end-user interacts with in a visually represented way. The tools/skills required are CSS, HTML, JavaScript, other frameworks and libraries like bootstrap.  

 //Googled Answer
 According to course report, "Front end development manages everything that users visually see first in their browser or application. Front end developers are responsible for the look and feel of a site... Front end languages include HTML, CSS, and Javascript. Utilizing JQuery will also be a common occurrence with front end development work...""


 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

 My favorite thing has been string interpolation because I've never seen it before learning JavaScript, and now I use it all the time.
 EXAMPLE:
 console.log(`This is my variable that hold a number ${intValue}`)
  To use this you have to use the back-tick to start and end your string. Then you can type normally, but use ${} to place you any expressions or variables.

 #### 9. What is the difference between a div and a span?


 //Your Answer
 I actually have no clue. I'm not super familiar with HTML.


 //Googled Answer
 According to HTMLDog.com, "Whereas most HTML tags apply meaning (p makes a paragraph, h1 makes a heading etc.), the span and div tags apply no meaning at all." However, The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.


#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
 Children class can get attributes and methods from ancestor classes. That is, using inheritance, you can go from a generic Vehicle class, to a more spcicic vehicle class (like a car) without having to rewrite code for attributes and methods that are shared across all vehicles.

 //Googled Answer
 Adobe.com states, "In object-oriented programming, inheritance enables new objects to take on the properties of existing objects."

 That's one of the more straightforward definitions I found. 

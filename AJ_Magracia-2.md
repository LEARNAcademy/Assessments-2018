### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 You link it via the link tag, usually in the head, specifying that it is a stylesheet.

 //Googled Answer
 More specifically: <link rel="stylesheet" type="text/css" href="mystyle.css">
 rel: relationship

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 You can declare a class inside the tag of an element by including the following: class="class-name-here"
 You should use an id instead of a class when you want to style or target something specifically, and it should only be applied to one tag. Classes, however, can be applied to as many tags as is convenient.

 //Googled Answer
 "Unlike the id selector, the class selector is most often used on several elements. This allows you to set a particular style for many HTML elements with the same class. The class selector uses the HTML class attribute, and is defined with a "." id is used when we have to apply CSS property to one attribute only."

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

.heading-box{
  margin: auto;
  border: 5px solid #000;
  text-align: center;
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 Bootstrap streamlines front-end web development

 //Googled Answer
 "Bootstrap is a free and open-source front-end framework for designing websites and web applications. It contains HTML- and CSS-based design templates... and optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only."

 One might choose to use it because it is easy to use, flexible, has a good and responsive grid, a comprehensive list of components, detailed documentation and a vast community, and is maintained/updated well (by people who are very good at HTML/CSS). Using Bootstrap, one will be able to consistently produce quality websites that work on all platforms.

 Reasons you would avoid it would be to master CSS on your own (including how it works on different browsers), being able to troubleshoot your code better, to have faster pages, etc.

 Quick analogy: Bootstrap is like cake mix. You can use it and consistently create a quality cake, but you can really go above and beyond if you learn to make cake on your own.

#### 5. Name 4 semantic html tags.
<p>, <h1>, <ul>, <div>


#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
 Block scope is essentially the scope of an if statement or a for-loop. Variables declared with the var keyword do not take the scope of their block, but rather the next closest scope. Variables declared with the let and const keywords, however, do.

 //Googled Answer
 "A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets and may optionally be labelled."

 "Block scopes are what you get when you use if statements, for statements, and the like. You can also use them stand-alone with a simple begin-end curly braces {}, not to be confused with empty object literals."

 "A variable declared with var in a block scope is available outside of that block scope."

 "Variables declared with let inside a block scope are only accessible inside that scope, making let the ideal solution to the for loop index variable scope problem. If we use let to declare the i variable in a for loop, that variable will only be available inside the for loop."

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
 Front end development is concerned with how the page looks and how users interact with the page. Strong HTML and CSS knowledge are required of front end developers, while back end developers need know little to none of this.

 //Googled Answer
 "Front end developers use HTML, CSS, and JavaScript to code the website and web app designs created by web designers. The code they write runs inside the user’s browser (as opposed to a back end developer, whose code runs on the web server). ...They’re also in charge of making sure that there are no errors or bugs on the front end, as well as making sure that the design appears as it’s supposed to across various platforms and browsers."

 Skills required: HTML & CSS, JavaScript, Experience with CSS Preprocessors, Responsive and Mobile Design, Cross-Browser Development

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

String interpolation allows one to insert the content of variables into strings without having to close the string.

 var object = {
   thing1 = true,
   thing2 = "false"
 }

 console.log(`Is it ${object.thing1} that you went to the store, or is that ${object.thing2}?`)
 becomes:
 Is it true that you went to the store, or is that false?

 #### 9. What is the difference between a div and a span?


 //Your Answer
 Divs are generally containers for at least full lines of code, and spans are used inline.

 //Googled Answer
 "The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code."

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
 Inheritance is the idea that "child" classes inherit properties of the "parent" classes.

 //Googled Answer
 "JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized objects that have the ability to be cloned and extended. This is known as prototypical inheritance and differs from class inheritance."

 "It is important that every object in JavaScript has a [[Prototype]] as it creates a way for any two or more objects to be linked."

 "When you attempt to access a property or method of an object,...At the end of the prototype chain is Object.prototype. All objects inherit the properties and methods of Object"

 `JavaScript does not have "methods" in the form that class-based languages define them. In JavaScript, any function can be added to an object in the form of a property. An inherited function acts just as any other property, including property shadowing as shown above (in this case, a form of method overriding).

 When an inherited function is executed, the value of this points to the inheriting object, not to the prototype object where the function is an own property.`

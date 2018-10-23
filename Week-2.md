### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 You would put the .css file in the same root directory as the .html file, then use the <link> tag in the html file to import the .css giving it attributes href="relative_path_to_file" type="text/css" and rel="stylesheet".

 //Googled Answer
 <link rel="stylesheet" href="styles.css">

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 You can use css classes to identify which html elements you want to impose styling on. Whatever class you give the element in the html file you can use that name with a period in front in the css file. IDs work the same way but they take a pound sign in front in the css file instead of a period. IDs are more specific than classes, only one element should use a given ID, but multiple elements can have the same class name.

 //Googled Answer
Classes and IDs are how css refers to html elements. Classes are used for multiple elements that get styled the same, IDs are for unique elements.

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
.heading-box {
  margin: 0 auto;
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
 Bootstrap is a collection of tools that can be easily implemented in a ReactJS project. It has tools like buttons, check boxes, navigation bars, etc. These tools have built-in styling keywords too, so it makes it very easy to change the color or style of these tools. It's a quick and simple way to add features to a page without spending time fighting with css.

 //Googled Answer
Bootstrap is a free and open-source front-end framework for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. (https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework))

#### 5. Name 4 semantic html tags.
//Your Answer
head, body, foot, nav
//Googled Answer
header, nav, article, footer (name of it describes what it is)

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
 In ES6, for loops and if statements now have their own scope. Previously if you declared a variable inside an if statement, you could access that variable anywhere in the program (assuming the 'if' is in global scope). Now, variables declared inside if statements or for loops are not accessible elsewhere, which is probably a good thing so you can't accidentally modify those local variables unintentionally. It's also nice to be able to re-use basic variable names like 'i' or 'x'.

 //Googled Answer
 Block scope, let, and const are some of the new feature in question in ES6. Let and const are new keywords used in place of var, let is for variables that may be re-assigned in the future, const for variables that will not be re-assigned. A new scope is opened with nearly every use of curly braces.

#### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
 Front end development deals primarily with the 'View' elements of a web page. This means structuring the foundation of a page, and manipulating the style and flow of text, images, and other components visible to the client. Front end development also includes dynamic features a client might interact with, like buttons, hover and click events, and navigation through multi-page sites. Front end developers rely on HTML, CSS, and typically one or more JavaScript libraries. They must also have some design and style skills to be able to implement and deliver a visually appealing layout.


 //Googled Answer
Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript.(https://en.wikipedia.org/wiki/Front-end_web_development). Front end developers need to master 4 skills: 1. Empathy 2. Code 3. Design 4. Communication (https://css-tricks.com/what-makes-a-good-front-end-developer/)

#### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.
function greet(name) {
  return `Hello there, ${name}!`
}

// 'Hello there, ' + name + '!'
// `Hello there, ${name}!`
String interpolation, used to simplify integrating variables into strings. More readable, less code, less room for error.

#### 9. What is the difference between a div and a span?


 //Your Answer
Divs are typically used as containers for other elements or features on a page, span is used to wrap certain parts of text in order to implement styling on them.

 //Googled Answer
Divs are block level elements that hold other pieces of code, spans are in-line elements usually within a paragraph.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
Inheritance is an important concept in object oriented programming, it dictates the way that information is passed between objects. Inheritance allows parent objects to send information to child objects, so that the children can access data and functions within the parent. This helps reduce the amount of code written and provides better readability and logical flow through programs.

 //Googled Answer
In object-oriented programming, inheritance enables new objects to take on the properties of existing objects. A child inherits visible properties and methods from its parent while adding additional properties and methods of its own. (https://www.adobe.com/devnet/actionscript/learning/oop-concepts/inheritance.html)

### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 You type a specific code in the header of your html that links the css file to your html.

 //Googled Answer
 To start with, open up your html document in Sublime Text. In the header section, add: <link rel="stylesheet" type="text/css" href="PATHTOCSSHERE">. You want to change "PATHTOCSSHERE" with the path to the css file you are trying to link the html page to


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 A css class is something that starts with a period. Like .class while id starts with a hash #id. You declare one in html by putting it in an opening header like <h1 class = ""></h1> or <h2 id = ""></h2>

 //Googled Answer
 The benefit of this is that you can have the same HTML element, but present it differently depending on its class or ID. In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”).


#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
.heading-box { margin: auto; }
##### 2) give it a black border that is 5px wide,
.heading-box { border: 5px solid black; }
##### 3) make its text appear in the center of the box
.heading-box { text-align: center; }


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 A front end library


 //Googled Answer
 Bootstrap is a free and open-source front-end library for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.


#### 5. Name 4 semantic html tags.
header, footer, main, nav

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
 let and const are block scope. They differ from local and global scope because they block you from setting or calling different values that they are set to.


 //Googled Answer

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
 front end development is programming that gets noticed by a user. Tools and skills that are uniquely required of front end developers are creativity and understanding how to develop something that is more convenient for the user.


 //Googled Answer


 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

var food = "chocolate"

//call this variable inside a String

console.log(My favorite food is ${food})
// string interpolation declaring a variable.

 #### 9. What is the difference between a div and a span?


 //Your Answer
 div is setting a section in HTML while span add text to something


 //Googled Answer
 The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.


#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
 inheritance is like setting a parent class and having children class take and use its attributes.

 //Googled Answer
In object-oriented programming, inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass or base class. A class that inherits from a superclass is called a subclass or derived class

### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
You use classes to link the information together in the header areas.

 //Googled Answer
This can easily be achieved through the use of the html link element.An example is:
<head>
    <title>My Page</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

#### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 A CSS class is something that you put in the html tags and that allows you to style any element with the same tag. I'm not sure when you use an id instead of a class.

 //Googled Answer
The .class selector selects elements with a specific class attribute.

 The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.


#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
display: flex;
align-items: center;
##### 2) give it a black border that is 5px wide,
border: 5px solid black;
##### 3) make its text appear in the center of the box
justify-content: center;


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 I do not know what Bootstrap is without googling the answer...


 //Googled Answer
 Bootstrap is a free front-end framework for faster and easier web development. It includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins.

 You can use Bootstrap because it's easy, responsive, compatible with all modern browsers and has a mobile-first approach.

#### 5. Name 4 semantic html tags.
<article> <aside> <details> <figcaption> (I totally googled all of this...)

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
Block scope is confined to if statements and loops. This prevents you from declaring a variable in the if statement or loop and it being in the global scope. You can use the keyword, "let" to note that you'd like that variable to live in the block scope.

 //Googled Answer
 The block statement is often called compound statement in other languages. It allows you to use multiple statements where JavaScript expects only one statement.

 The variables let and const have block scope.

#### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
Front End Development is when you focus on the display-side of web development. The tools that you would need to use are HTML, CSS, React and Bootstrap.

 //Googled Answer
The front-end is everything involved with what the user sees, including design and some languages like HTML and CSS. A front-end developer may be required to have a grasp on testing, as well as be well versed in HTML, CSS and JavaScript. This person may or may not have experience with creating the design in a design program. A different version of this title is front-end engineer. Specific front-end languages like "JavaScript developer" are also considered front-end developers.

#### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.
// In the for loop, I am declaring the variable "i" to exist only in the scope of the loop.
for (let i = 0; i < array.length; i++){
  return "hello!"
}

// I am declaring and assigning another variable "i" in the global scope. This variable will not be affected by the for loop.
var i = 0

#### 9. What is the difference between a div and a span?

 //Your Answer
Not sure...

 //Googled Answer
 The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.


#### 10. How would you explain the idea of "inheritance" in object oriented programming?

 //Your Answer
 Inheritance is the concept that you can create a class that has the same basic properties of another class. If you create a class and you'd like to inherit traits from another class, the inheritor is the parent and inheritee is the child. This is helpful because if two classes utilize the same constructor and methods, then you don't have to re-type that.

 //Googled Answer
 Inheritance allows you to add all public and protected methods of the superclass to the subclass. You can also replace their implementation and override a method of the superclass in the subclass.

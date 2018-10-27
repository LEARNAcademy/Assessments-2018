### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 You need to import the css file into the App.js.

 //Googled Answer
 Use the HTML <link> element to refer to an external CSS file.

#### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 A css class can be used to style the components in html.

 //Googled Answer
 A class is declared with "." followed by the name of the class. The id is declared with "#". The difference between them is that class can used to identify more than one element while id can only identify one element.


#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

<style class="heading-box">
p {
  justify-content: center;
  border: 5px solid black;
  text-align: center;
}
</style>

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 Bootstrap is used to implement the style without having to code from scratch.

 //Googled Answer
 We get rid of writing our own CSS classes to style webpage elements. Most importantly Bootstrap is designed in such a way that makes your website device responsive and that is the main purpose of it.

#### 5. Name 4 semantic html tags.
<form>
<table>
<footer>
<header>


#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer

 //Googled Answer
 Block scope allows variables to be only available within its scope. The variables include let and const in ES6. With block scope, rather than being scoped to the function they are scoped to the block (set of opening and closing curly brackets). This is different from javascript's local scope, where the variables are scoped to the function, and global scope, where the variables are available throughout the codes.


#### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
Front end development focuses on the user interaction and visuals of the website. Some of the main tools used in front-end development are HTML, CSS, React, Bootstrap, etc.

 //Googled Answer
 A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. Front end developers use HTML, CSS, and JavaScript to code the website and web app designs created by web designers.


#### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

//using string interpolation, print the string with my name
let name = "Misun"
"My name is ${name}."

#### 9. What is the difference between a div and a span?


 //Your Answer


 //Googled Answer
The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
Inheritance can be used if you want one class to inherit the components or objects of another class.

 //Googled Answer
 Inheritance is one of the core concepts of object-oriented programming (OOP) languages. It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods.

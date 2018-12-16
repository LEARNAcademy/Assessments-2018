### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 Use the <link> element in the <header> to import the external style sheet.

 //Googled Answer
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 A CSS class is used to select an element(s) in a HTML document.

 It is declared;
 .aClass {
   text-align: centre;
 }

 An ID can only be assigned to one element, where as a class can be assigned to many.

 //Googled Answer
In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box


.heading-box{
  margin: auto;
  width: 50%;
  border: 5px solid #000000;
  text-align: center;
}


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
Bootstrap is an external CSS framework that comes with pre-styled classes for elements such as buttons, dropdown list, alerts etc. It is made by Twitter. It is a great way of adding style to your site/app without investing a lot of time in creating your own classes.

 //Googled Answer
 Bootstrap is a free and open-source front-end framework for developing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many earlier web frameworks, it concerns itself with front-end development only.


#### 5. Name 4 semantic html tags.
<form>
<table>
<section>
<article>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
Blocked scopes is available only within one section of a function where as local scope would be accessible through the function body. Let is block scope. Global scope is available through the file, not just within functions or blocks.

 //Googled Answer
 Block scope is everything inside a set of braces { a block scope here }. So, at the top of a function's code, a block scope will be the same as a function scope.


 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
A front end developer will deal with the portions of the code that is consumed by the user. They need to have a good grasp of usability, ergonomics and a user's needs. They are more concerned with the layout and design rather than the back end functionality.

 //Googled Answer
A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. They are usually supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do.

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

let x = "This is a"

console.log(`${x} test`)
// logs to the console "This is a test" as a string

 #### 9. What is the difference between a div and a span?


 //Your Answer
A div can be used to house and manipulate multiple elements. A span can be used to modify a portion within an element.

 //Googled Answer
 A div is nothing more than a container unit that encapsulates other page elements and divides the HTML document into sections. Web developers use <div> elements to group together HTML elements and apply CSS styles to many elements at once.

 The HTML <span> tag is used for grouping and applying styles to inline elements. There is a difference between the span tag and the div tag. The span tag is used with inline elements whilst the div tag is used with block-level content.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
 Inheritance is the method of passing properties and methods down to subclasses.

 //Googled Answer
 Inheritance is a mechanism in which one class acquires the property of another class. For example, a child inherits the traits of his/her parents. With inheritance, we can reuse the fields and methods of the existing class. Hence, inheritance facilitates Reusability and is an important concept of OOP.

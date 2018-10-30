### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 by using a link rel "stylesheet" and a href to the name of the .css file


 //Googled Answer
link it in the head portion of your html file
 <!-- <html> -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<!-- <body> -->

<!-- <h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body> -->
<!-- </html> -->


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 .class
 #id
 classes can be applied to multiple elements whereas ids can only be given to one element

 //Googled Answer
 ID's are unique
Each element can have only one ID
Each page can have only one element with that ID
When I was first learning this stuff, I heard over and over that you should only use ID's once, but you can use classes over and over. It basically went in one ear and out the other because it sounded more like a good "rule of thumb" to me rather than something extremely important. If you are purely an HTML/CSS person, this attitude can persist because to you, they really don't seem to do anything different.

Here is one: your code will not pass validation if you use the same ID on more than one element. Validation should be important to all of us, so that alone is a big one. We'll go over more reasons for uniqueness as we go on.

#Classes are NOT unique
You can use the same class on multiple elements.
You can use multiple classes on the same element.
Any styling information that needs to be applied to multiple objects on a page should be done with a class. Take for example a page with multiple "widgets":


#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box
.heading-box {
  display: flex;
  box-align:center;
  border: 5px solid black;
  text-align: center;
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 a front end framework designed for mobile devices

 one might use it because they are working on a mobile site


 //Googled Answer
 Bootstrap is a free front-end framework for faster and easier web development

Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins

Bootstrap also gives you the ability to easily create responsive designs

Advantages of Bootstrap:

Easy to use: Anybody with just basic knowledge of HTML and CSS can start using Bootstrap

Responsive features: Bootstrap's responsive CSS adjusts to phones, tablets, and desktops

Mobile-first approach: In Bootstrap 3, mobile-first styles are part of the core framework

Browser compatibility: Bootstrap is compatible with all modern browsers (Chrome, Firefox, Internet Explorer, Edge, Safari, and Opera)

#### 5. Name 4 semantic html tags.
<head>
<body>
<div>
<span>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
 Block scope is created outside a function more similar to global scope. local scope is created inside a function and only visible from inside that function.

 //Googled Answer
 Block scopes are different from function scopes in JavaScript. A function scope is created for every function (and we can nest them too):
 The var keyword behaves differently in function scopes and block scopes. A variable declared with var in a function scope can't be accessed outside that function scope. A variable declared with var in a block scope is available outside of that block scope.



 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
front end development is the side of programming that the user sees. This is html, css, js and react.

 //Googled Answer
Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript.

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

string interpolation allows you to insert an object into the middle of a string using #{}. This is useful because it allows you to add something into a string without having to slice and then concatinate three pieces together to make one string.


#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
 objects can inherit methods or properties from parent objects. this is helpful because it allows your code to be more dry. Meaning you dont have to type out the same code many times if it can just be inherited from a parent object or class.

 //Googled Answer
 In object-oriented programming, inheritance is the concept that when a class of objects is defined, any subclass that is defined can inherit the definitions of one or more general classes. This means for the programmer that an object in a subclass need not carry its own definition of data and methods that are generic to the class (or classes) of which it is a part. This not only speeds up program development; it also ensures an inherent validity to the defined subclass object (what works and is consistent about the class will also work for the subclass).

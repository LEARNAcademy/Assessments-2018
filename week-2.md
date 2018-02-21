Week 2 Assessment
Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

1. How do you link a css file to your html page?
//Your Answer

<link rel="stylesheet" href='cssPage.css'

//Googled Answer

<link rel="stylesheet" href="styles.css">

2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?
//Your Answer
a css class encompasses all objects with the same className. You should use id instead of class when you want
to affect a single object, and not a group of objects.

//Googled Answer
The .class selector selects elements with a specific class attribute.

"IDs are usually used when you need to reference that element in JavaScript, so if you were looking to fade out a div when a button is clicked the div and button would get IDs instead of classes. So I use IDs for reference and classes for styling ... most of the time."

3. The class "heading-box" exists in our html file - write the css code that would:
1) align this box to the center of its container,
2) give it a black border that is 5px wide,
3) make its text appear in the center of the box
4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?
//Your Answer

.heading-box {
  margin-align: auto;
  border: 5px solid black;
  text-align: auto;
}

Bootstrap is a CSS library that makes it easy to create pre-made (but customizable) objects that would otherwise require many more lines of code. One might use Bootstrap if they are really good at backend coding, but aren't too fond of front end CSS.

//Googled Answer
saves a lot of time, great grid system, consistency, compatibility

5. Name 4 semantic html tags.
br, table, div, span

6. What is block scope that became available in ES6? Include how it differs from Javascript's local and global scope, and what variables are block scoped.
//Your Answer
Block scope means declaring variables when you use them

//Googled Answer
That's what block-scoping is all about. Declaring variables as close as possible, as local as possible, to where they will be used.


7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?
//Your Answer
Front end entails everything the user sees on the page. Front end developers use things such as CSS, JS, and HTML.

//Googled Answer
Definition: Front end development manages everything that users visually see first in their browser or application. Front end developers are responsible for the look and feel of a site. Front end languages include HTML, CSS, and Javascript.


8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

class parentClass { //classes can be used to define a group of functions or variables that pertain to a category, or anything else
  var variable = 9001 //declare a variable
}

class childClass extends parentClass { //'extends' lets the child class use functions/vars from the parent class
  console.log(variable) //logging a variable defined in the parent class
}
>>9001 //output


9. What is the difference between a div and a span?
//Your Answer
div encompasses an amount of objects, while span is used to apply something to multiple divs
//Googled Answer
They are used to group together a chunk of HTML and hook some information onto that chunk, most commonly with the attributes class and id to associate the element with a class or id CSS selector.

10. How would you explain the idea of "inheritance" in object oriented programming?
//Your Answer
inheritance lets you create objects from a superclass. for example, you can define what a "dog" is, and you can create multiple "dog" objects such as dog1, dog2, dog3. Furthermore, you can define specific breeds of dogs that carry all the traits of "dog", as well as a few of their own. A "husky" class can import all of the "dog" traits, but the "dog" class can not be inherited from "husky"
//Googled Answer
 inheritance is when an object or class is based on another object (prototypal inheritance) or class (class-based inheritance), using the same implementation. Inheritance in most class-based object-oriented languages is a mechanism in which one object acquires all the properties and behaviours of the parent object. Inheritance allows programmers to: create classes that are built upon existing classes [1], to specify a new implementation to maintain the same behaviour (realizing an interface), to reuse code and to independently extend original software via public classes and interfaces. The relationships of objects or classes through inheritance give rise to a directed graph.

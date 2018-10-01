### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer

....Oh, man. I forget the exact syntax. I am really rusty with CSS.

You would link externally within the head tags of the page.

 <head>
    <style scr="stylepage.css"/>
 </head>

 //Googled Answer

Yikes that was so bad!

<head>
<link rel="stylesheet" href="styles.css">
</head>


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer

 A class is a way to target HTML elements from your CSS page. Semantic HTML is easier to read and a better way to keep organized. You can define an HTML element's with <div class="class-name"> and use .class-name in the CSS file to style that element. Using class is an easier way to style multiple similar elements at once as opposed to defining and <div id="id-name"> and styling with #id-name in CSS. IDs work well for styling just one particular element.

 //Googled Answer

 The benefit of this is that you can have the same HTML element, but present it differently depending on its class or ID. In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”).

 Syntax:
 <element class="classname">

ID's are unique
Each element can have only one ID. Each page can have only one element with that ID. A class is like a barcode that all products of a certain type would have. An ID is like a unique serial number on one of those products.

ID's have special browser functionality
Classes have no special abilities in the browser, but ID's do have one very important trick up their sleeve. This is the "hash value" in the URL. If you have a URL like http://yourdomain.com#comments, the browser will attempt to locate the element with an ID of "comments" and will automatically scroll the page to show that element.

Javascript cares
JavaScript people are already probably more in tune with the differences between classes and ID's. JavaScript depends on there being only one page element with any particular id, or else the commonly used getElementById function wouldn't be dependable.


#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,

.heading-box {
    margin: auto;
}

##### 2) give it a black border that is 5px wide,

.heading-box {
    margin: auto;
    border: 5px solid #000;
}

##### 3) make its text appear in the center of the box

.heading-box {
    margin: auto;
    border: 5px solid #000;
    text-align: center;
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer

 Bootstrap is a grid template system for CSS that enables you to use pre-set keywords to style elements on a page according to column width. This makes executing a wire-framed a layout more intuitive with CSS and designing a responsive page much easier.

 //Googled Answer

Bootstrap is a free and open-source front-end framework (library) for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only.

#### 5. Name 4 semantic html tags.

<header></header>
<main></main>
<form></form>
<footer></footer>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer

ES6 introduced block scope which automatically opens a new scope for every code block. If you declare variables within a function using keyword let or const, that variable now can not be accessed or manipulated from the global scope.

 //Googled Answer

 In ES6, let and const were introduced as alternative ways of declaring variables — both being blocked scoped. In block scope, any block will be a scope. This will give a more consistent behavior. This means that a function still is a valid scope just like with var.

 Other type of blocks qualifies as a scope — like if-statements.

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer

Front end development is user-oriented. A front end developer would handle code that manipulates the view and controller, but not the model of a web application. This would require a firm understanding of HTML and CSS. Front end developers are expected to be able to add interactivity to a page with Javascript, and most likely will use libraries such as react and angular.

 //Googled Answer

Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript. The code they write runs inside the user’s browser (as opposed to a back end developer, whose code runs on the web server). Think of it a little like this: the back end developer is like the engineer who designs and creates the systems that make a city work (electricity, water and sewer, zoning, etc.), while the front end developer is the one who lays out the streets and makes sure everything is connected properly so people can live their lives (a simplified analogy, but you get the rough idea). They’re also in charge of making sure that there are no errors or bugs on the front end, as well as making sure that the design appears as it’s supposed to across various platforms and browsers.

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

 STRING INTERPOLATION

 // two arrays are declared in the global scope

 var letters = ["a", "b", "c"]
 var nums = [1, 2, 3]

 // this function will concat the arrays using string interpolation

 function displayMessage() {
     // storing the arrays as new variables within block scope
    let sayABC = letters.join(",")
    let say123 = nums.join(",")
    return `${sayABC} easy as ${say123}!`
 }

 displayMessage() // a,b,c easy as 1,2,3!

 #### 9. What is the difference between a div and a span?


 //Your Answer

Div elements are block display while span elements are inline.

 //Googled Answer

The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer

You can use classes as a blueprint to create objects of a certain category. You can start out with the most general category of something, and make variations of that class using child classes. Each child class would inherit the methods of its parent, but also have the ability to override the parent with super() within its constructor method. Every child class would thus have the base characteristics of its parent, yet with its own specified characteristics in super().


 //Googled Answer

 Inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass or base class. A class that inherits from a superclass is called a subclass or derived class.

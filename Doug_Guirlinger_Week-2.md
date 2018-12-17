### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer

 Add the css source file to the Head in the HTML file.

 //Googled Answer

 Use this type of format in the Head of the HTML file:
 <link rel="stylesheet" href="styles.css">


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer

A CSS class is a tag that can be added to an HTML element to identify and target that element for CSS adjustments. It can be applied to multiple HTML elements. An id should be used instead of a class when it is necessary to only affect a single element of an HTML page with a CSS file. A class should be used when it is necessary for a CSS file to affect multiple HTML elements in the same way.

 //Googled Answer

"In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”). ... The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.

You can also apply a selector to a specific HTML element by simply stating the HTML selector first, so p.jam { /* whatever */ } will only be applied to paragraph elements that have the class “jam”."

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

.heading-box {
  display:flex;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
  text-align: center;
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer

Bootstrap is a library used in HTML and CSS for style and format. It is useful in situations where HTML and CSS styling and formatting alone would be especially difficult or inefficient. It can save a front-end developer a lot of time and hassle.

 //Googled Answer

From Bootstrap's website: "Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery."

#### 5. Name 4 semantic html tags.

<form>
<table>
<article>
<header>


#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer

Block scope is a type of scope that makes variables available only to the block of code to which they are applied. An example of the use of block scoping would be a variable declaration using let.

 //Googled Answer

 Both let and const use block scoping. Let allows values to be reassigned; const does not. Both can be used to signal the programmer's intended use of variables. The two variables can replace most instances of var.

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer

Front end developers are the developers who work on the rendering of the user interface of websites and apps. They are not necessarily UI/UX developers. Instead, they turn the UI/UX designers' ideas and plans into functional websites and apps.

Skills that might be unique to font end developers would relate to aesthetics. Styling and formatting are both important in this work. Therefore, CSS and HTML expertise are critical.

 //Googled Answer

From Google: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing."

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

String interpolation allows a developer to create strings with variables stored inside them. Below is an example of two equivalent blocks of code. The first example does not use string interpolation and the second example does.

No string interpolation:

let name = 'Doug'
let school = 'LEARN Academy'

console.log('Hello. My name is ' + name + ', and I attend ' + school + '.')

Equal to the above block of code using string interpolation.

let name = 'Doug'
let school = 'LEARN Academy'

console.log(`Hello. My name is ${name}, and I attend ${school}.`)

 #### 9. What is the difference between a div and a span?


 //Your Answer

I don't know because I am not familiar with span.

 //Googled Answer

 From Google: "The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code."

#### 10. How would you explain the idea of "inheritance" in object oriented programming?

 //Your Answer

 Inheritance is used to apply all of the attributes of one class to a new class.

 //Googled Answer

From Google: "In object-oriented programming, inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass or base class. A class that inherits from a superclass is called a subclass or derived class. The terms parent class and child class are also acceptable terms to use respectively. A child inherits visible properties and methods from its parent while adding additional properties and methods of its own."

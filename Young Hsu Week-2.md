### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 Use the <link> tag.

E.g. <link rel="stylesheet" type="text/css" href="example.css">

 //Googled Answer
 Place the <link> tag in the header section of your html page. Generally, the CSS file should be in the same directory as the HTML file, otherwise, the href value would need to be the path to the CSS file.

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer

A CSS class is a reusable style that you can use on multiple HTML elements. You declare one by putting it in the opening tag of an element.
E.g. <h2 class="example-class"> Text </h2>

Unlike classes, IDs are unique and can be used on only one element on the HTML page. You would use an ID when you are working with something that is unique and needs to be specially referenced.

 //Googled Answer

IDs have special browser functionality; if you have a url that has a #value (e.g. exampleURL.com#exampleid), the browser will automatically scroll to the element on that page that has the ID "exampleid".  

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,

.heading-box: {
    margin: auto;
}

##### 2) give it a black border that is 5px wide,

.heading-box: {
    margin: auto;
    border-color: black;
    border-width: 5px;
}


##### 3) make its text appear in the center of the box

.heading-box: {
    margin: auto;
    border-color: black;
    border-width: 5px;
    text-align: center;
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer

Bootstrap is a front-end framework for designing websites and web applications. It has a lot of HTML- and CSS-based templates for stuff like typography, buttons, forms, etc.

 //Googled Answer

Bootstrap is very good for designing responsive web-pages (good for designing mobile pages), is highly customizable, has flexbox (which is great for planning the layouts of your pages.)

#### 5. Name 4 semantic html tags.

<form>, <table>, <article>, <main>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer

Block scope is the scope that is created when you use a for loop or if statement. Variables in block scope are declared using the keyword "let".

 //Googled Answer

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer

Front-end development is concerned with the "view" in the MVC model. It is concerned with how things look to the user as well as the elements that a user interacts with.

 //Googled Answer

Tools/skills required of front-end developers include knowledge of HTML, CSS, Javascript, front-end libraires like jQuery or Bootstrap, and React or Angular.

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

String interpolation is a new ES6 syntax that allows you to type out the contents of a string that includes values of variable in one line.

For example, if you had a variable date = 1/1/01, and you wanted to put that in a string that read "Today's date is 1/1/01", instead of typing "Today's date is " + date, you could type `Today's date is ${date}`

The ${} goes around any variable name whose value you want to insert into the string.

 #### 9. What is the difference between a div and a span?


 //Your Answer


 //Googled Answer

The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer

When you are working with objects in object-oriented programming, you can use "inheritance" to copy over the properties of an object to another's that is similar in function/role.

 //Googled Answer

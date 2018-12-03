### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 You include an "href" to the css file within your project path and make sure to label it as a "stylesheet"

 //Googled Answer
"To use an external style sheet, add a link to it in the <head> section of the HTML page:
<!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1>This is a heading</h1>
      <p>This is a paragraph.</p>
    </body>
  </html>"
  Source: https://www.w3schools.com/html/html_css.asp

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 A CSS class is one where you can apply the styles to more than one element within the HTML file. You would declare it as "class=x" where "x" is the class name that you're referencing (ideally kebab case). You should use an id (declared by a hashtag in CSS) when you want to change the style for one particular element per ID.

 //Googled Answer
"In CSS, to select elements with a specific class, write a period (.) character, followed by the name of the class."
Source: https://www.w3schools.com/html/html_classes.asp

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

.heading-box {
  align-contents: center;
  border: black 5px;
  text-align: center;
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
The most widely used front-end library in the world. People may use it to save the amount of CSS code to write (althought it's not exactly the best for HTML markup, in my opinion)

 //Googled Answer
"a loop at the back of a boot, used to pull it on."

Jk

"Bootstrap is a free front-end framework for faster and easier web development. Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins."

Source: https://www.w3schools.com/bootstrap/bootstrap_get_started.asp

#### 5. Name 4 semantic html tags.

<p> <h1> <span> <h2>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
Block scope refers to the scope of variables declared within an "if" or "for" statement (usually declared by "let"). It's different from javascript's local and global scope in that if you declare a "var" within a block scope, then it's still available outside of the scope of the block (e.g. parent function), whereas if you declare a variable using "let" within a block scope, then it's only available within the scope of that function (e.g. "let i = 0" as an index in a "for" loop)

 //Googled Answer

 "In ES6, let and const were introduced as alternative ways of declaring variables — both being blocked scoped.

 This will probably resonate way better with you if you’re used to any other language than JavaScript.

 In block scope, any block will be a scope. This will give a more consistent behaviour.

 This means that a function still is a valid scope just like with var."

 Source: http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
Front end development is the ability to use markup language to construct the actual webpage that end-users see. It also involves understanding how the front-end of the website interacts with the rest of the website (e.g., back-end and databases). Skills of front end developers may involve knowing how to program in an object-oriented language, but it also involves understanding the relationships between HTML and CSS, and knowing how to validate each one of those.

 //Googled Answer
"Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript."

Source: https://en.wikipedia.org/wiki/Front-end_web_development

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

 String interpolation is a new concept within ES6, in which you can utilize the `` quotes to literally interpolate a string within the statement. An example is the following: `Hello ${className}!` where className = "Delta 2018". This would produce a result of "Hello Delta 2018!", and you wouldn't need to worry about adding + signs and spaces throughout.

 #### 9. What is the difference between a div and a span?

 //Your Answer
A <div> is essentially used to declare a new section of content, whereas a <span> is used to wrap content within a section.

 //Googled Answer
"The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code."

Source: http://www.htmldog.com/guides/html/intermediate/spandiv/

#### 10. How would you explain the idea of "inheritance" in object oriented programming?

 //Your Answer
Inheritance essentially means having access to functions that are already defined in the class that you're claiming to inherit from.

 //Googled Answer
"It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods."

Source: https://stackify.com/oop-concept-inheritance/?utm_referrer=https%3A%2F%2Fwww.google.com%2F

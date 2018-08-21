### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

   //Your Answer
   The CSS file gets linked in the head of the html file.
   The syntax is: <link rel="stylesheet" href="yourFileName.css">


   //Googled Answer
   To use an external style sheet, add a link to it in the <head> section of the HTML page:
   <head>
    <link rel="stylesheet" href="styles.css">
  </head>

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

   //Your Answer
   2.A-B
   A CSS class is declared with a period, the class can be a group of elements like paragraphs. If I wanted to change the font to yellow on all of my paragraphs, I would say the following on my stylesheet:
        p {
            color: yellow;
        }

  However, if I have 5 paragraphs and wanted to change two to make "headline" statements with purple background and black font, I would say the following in my stylesheet:

      .headlines{
      font-size: 25px;
      font-family: sans-serif;
      color: black;
      background-color: purple;
      }
2.C
  To my understanding the id# only allows me to change one specific element, however, I just tested this on two paragraphs and both changed colors and size identically. I do know that id overrides class.


   //Googled Answer
   A class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.


#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box


  .container {
      border-style: double;
      width: 100vw;
      height: 200px;
      text-align: center;
      vertical-align: middle;
      display: table-cell;
  }

  .heading-box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    padding: 25px;
    color: orange;
    font-weight: bold;
  }


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?
   //Your Answer
  Bootstrap is a grid based framework that has built-in ready to use templates for designing a website. I think if I had a short amount of time to create a super dynamic website, bootstrap could save me some time.

   //Googled Answer
   Bootstrap is a free front-end framework for faster and easier web development
   Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins
   Bootstrap also gives you the ability to easily create responsive designs

#### 5. Name 4 semantic html tags.
1. Header
2. NAV
3. Section
4. Footer

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.
   //Your Answer
  Block scopes that became available in ES6 are let and const.
  In the case of var variables, they’re function scope, which means that they are only available inside the function that they are created in. However, if they are not declared in a function, then they are globally scoped, and they’re available in the whole window.

   //Googled Answer
   A variable defined using a var statement is known throughout the function it is defined in, from the start of the function. (*)
  A variable defined using a let statement is only known in the block it is defined in, from the moment it is defined onward. (**)

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?
 //Your Answer

   A front end developer is a developer that specializes in developing code via programs like HTML, JavaScript, JQuery and CSS, that effect what the end user will see.

   //Googled Answer
   Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript.


 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

 String interpolation:
 Instead of having to write my string like this:
    var weight = 16 * 2;
    var food = "chicken";
    console.log(" I ate " + weight + " ounces of " + food + ".");

 I can use interpolation and less syntax like this:
    var weight = 16 * 2;
    var food = "chicken";
    console.log(`I ate ${weight} ounces of ${food}`);

 The first string requires + to concat the string with the variables to include the punctuation. The second string is interpolated, with the use of back ticks and the variables enclosed inside the ${} syntax, no + signs nor additional "" are required!

 #### 9. What is the difference between a div and a span?
 //Your Answer

  A div is a block element, basically a toddler that doesn't want to share it's space with anyone else. Naturally takes up the whole width of the screen.

  A span is an inline-elements, meaning that it only takes up the amount of space that it needs to have based off its contents. If there is no content, you will not be able to see the element on the view screen.

   //Googled Answer
   The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.


#### 10. How would you explain the idea of "inheritance" in object oriented programming?
 //Your Answer
    My basic understanding of inheritance in object oriented programming is that its a way to transfer functions and objects through other objects. Objects allow us to group key values that can also include objects. Where inheritance comes in is the parent object values can be passed to a child object and so on. This means we don't have to keep typing the same key values all over again through out the code.
    Kind of like how Russian Matryoshka or Babushka nesting dolls has replications of itself inside of itself, except in the instance of oop, the enclosed dolls would not be identical.

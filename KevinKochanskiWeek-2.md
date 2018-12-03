### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
Add a <link href= ...> in the head tag.

 //Googled Answer
 <head>
   <link rel="stylesheet" href="styles.css">
 </head>


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
A class is a sort of category you can apply to any compenents that will have shared style.  I think you declare it inside the tag, ie: "<p/ class='content'>".  Not sure, but I think an id would be more like one specific element that will have that style.

 //Googled Answer
The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one. (My note: yay!  got it right.)

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box
1) margin: auto,
2) border: 5px solid black,
3) text-align: center,

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
I don't know.  I think it's something that uses preset templates...somehow helps link common styles to html without doing everything from scratch.  Totally just made this up but about to find out...

 //Googled Answer
Bootstrap is a free and open-source front-end framework (library) for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only.

#### 5. Name 4 semantic html tags.
<table>
<header>
<footer>
<section>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
I equate it with local scope, so I need to google this one.

 //Googled Answer
Still ot 100% sure, but I think it's like a local scope but takes advantage of "let" and "const" being the nearest variables instead of old "var".

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
This is the user side, what the user sees.  I think a front end dev needs to be more visual.  They aren't a designer necessarily, but they need to implement a design (and I'm sure become defacto designer on small projects).  My guess is they would be mostly HTML, CSS, JavaScript.

 //Googled Answer
Google more or less confirms, but I should add that they need to be good testers.  Working in front end, you'd be the one to see what breaks.

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.
//String interpolation is handy because it cleans up all of the "" + "" concatinating format.
//First assign a variable:
let name = 'Babs';
//then use backtick and the ${} to call any variable
console.log(`Ole ${name} is a sturdy gal`);

 #### 9. What is the difference between a div and a span?


 //Your Answer
Not really sure of this one.  I feel like I would use a div to subdivide a section of smaller elements (esp that may share one CSS tag), but I'm not sure what a span is.

 //Googled Answer
"The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code."

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
 I only remember in terms of Classes, but you can create a class, and then borrow elements of it to create new classes that have some of the same components.  

 //Googled Answer
 In object-oriented programming, inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass or base class. A class that inherits from a superclass is called a subclass or derived class.

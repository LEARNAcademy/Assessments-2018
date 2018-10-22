### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 By using the link tag

 //Googled Answer
 Each page must include a reference to the external style sheet file inside the <link> element. The <link> element goes inside the <head> section

 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 A CSS class is a name you can give your specific line of code..you can declare one in HTML by adding class="name here" inside tags. You should use an ID instead of a class when you want to specify a specific line of code.......by using # instead of .

 //Googled Answer
 The .class selector selects elements with a specific class attribute.

To select elements with a specific class, write a period (.) character, followed by the name of the class.

You can also specify that only specific HTML elements should be affected by a class. To do this, start with the element name, then write the period (.) character, followed by the name of the class

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box
.heading-box {
  margin: auto;
  border: 5px solid black;
  text-align: center;
}


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer
 Bootstrap is a code that's already pre-written.. you can go on the bootstrap website. A reason why I might choose to use it in a project is when I'm short on time and just need a fast template I can use.


 //Googled Answer
Bootstrap is a free and open-source front-end framework for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.

#### 5. Name 4 semantic html tags.
<header>
<main>
<section>
<footer>


#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
Let? not sure..

 //Googled Answer
 In ES6, let and const were introduced as alternative ways of declaring variables — both being blocked scoped.
This will probably resonate way better with you if you’re used to any other language than JavaScript.
In block scope, any block will be a scope. This will give a more consistent behaviour.
This means that a function still is a valid scope just like with var.

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
 Front end has to do with the view of the page. The designs and viewing contents of a page. CSS/HTML/Javascript.


 //Googled Answer
A front-end developer is a type of computer programmer that codes and creates the visual front-end elements of a software, application or website. He or she creates computing components/features that are directly viewable and accessible by the end user or client.

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.
 String interpolation can reduce key strokes by not having to use "+" or quotation marks. For example

 var name = janice
 console.log("Hello "+"my "+"name "+"is )

 consolg.log(`Hello my name is ${janice}`)


 #### 9. What is the difference between a div and a span?

 //Your Answer
span is usually used to wrap small portions of code?...  

 //Googled Answer
The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
 No idea.

 //Googled Answer
 Inheritance (OOP) is when an object or class is based on another object (prototypal inheritance) or class (class-based inheritance), using the same implementation (inheriting from an object or class) specifying implementation to maintain the same behavior (realizing an interface; inheriting behavior).

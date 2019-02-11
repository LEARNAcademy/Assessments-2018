### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer

 in html assign a class then reference it in the CSS file.

 //Googled Answer
The most common way to add CSS, is to keep the styles in separate CSS files. However, here we will use inline and internal styling, because this is easier to demonstrate, and easier for you to try it yourself. (from w3schools.com)

 #### 2. What is a css class? How do you use/declare one in html? When should you use an id instead of a class?

 //Your Answer

css class:  used as link to html so that you can manipulate elements in HTML
how to declare one:  
.name-of-class {
  here you
  manipulate what you want
}
when to use an id:
when you want to identify one element as opposed to several elements.  Use class to work on several elements
 //Googled Answer
In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one. (from htmldog.com)

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer

1)left: 50%
  margin-right: 50%
2) border: 5px;
3) text-align: center; (this might be incorrect.  Recheck)

 //Googled Answer


#### 5. Name 4 semantic html tags.
blockquote, p , ul, h1-h6
#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
before ES6 the only way to declare a variable was to use the var command.  ES6 gave the const and let command.  const gives global scope and prevents changes to the variables.  There are some caveats when dealing with objects and arrays, but will be ignored for now.  the let command gives you the ability to modify after declaration, but only gives local scope.  

 //Googled Answer

let and const — the introduction of block scope. In ES6, let and const were introduced as alternative ways of declaring variables — both being blocked scoped. ... In block scope, any block will be a scope. This will give a more consistent behaviour. This means that a function still is a valid scope just like with var (from deadcoderising.com)

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer

development involved that the user will experience.  giving the user the ability to input commands, or how the display is arranged is an example of front end development.  What the input does is normally not seen by the user, this would be an example of the "back-end."  react is an example of a tool that can be used for front end development.  JS is an example of back end development

 //Googled Answer

Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. (from frontendmasters.com)

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

example:  '${nameString}' is looking for the ${verbString} to increase net-worth'
in this example the string (nameString and verbString) will interpolate once it has a value.  This allows you to write output in a manner that is more like what a person would normally write.  in the past you would have to use a combination of variables, quotation marks, and plus signs or commas

 #### 9. What is the difference between a div and a span?



 //Your Answer
div is considered block-line.  meaning it affects the entire block.
span is considered in-line, meaning it affects a small chunk of HTML.  I believe span only effects  text.

 //Googled Answer
The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code. (from htmldog.com)

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer

 when working with objects, and building a "parent" object class, inheritance is the features, or attributes that are passed down onto the "child" object classes.  This standardizes what the child object class will receive so that you don't have to assign the same attributes to similar child object classes.

 //Googled Answer

 With most of the gory details of OOJS now explained, this article shows how to create "child" object classes (constructors) that inherit features from their "parent" classes. In addition, we present some advice on when and where you might use OOJS, and look at how classes are dealt with in modern ECMAScript syntax.(from developer.mozilla.org)

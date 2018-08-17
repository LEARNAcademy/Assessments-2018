### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?
 
 //Your Answer
 You have to use the link tag, pointing to the css file, and specify that it's a stylesheet. I'm not sure if it HAS to have the same name as the matching html file, of if that's just considered a best practice.
 
 //Googled Answer
 I forgot that it was supposed to be in the head. The exact syntax is <link rel="stylesheet" type="text/css" href="theme.css">
 
 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?
 
 //Your Answer
 A class is label that you can apply to a (group of) html objects in order to identify them, and apply the same css to all of them at the same time, instead of doing so individually. you declare them in html by adding class="name" in the tag. You should use a class when you have a group of objects which need to have the same style, but each individual object inside the class should have it's own ID, so that they can be styled (or called back) individually, without effecting the whole class. You can call a css class, in the css file, by using ."name"{ properties }, where name is the name of the class
 //Googled Answer
 elements, not objects. Not sure if that's also refering to a specific thing in HTML, like it does for javascript. Also you can refer to specific clasess by including the antecedents in it's call.
 
#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container, 
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box
.heading-box{
     display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid black;
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?
 
 //Your Answer
 I don't remember covering this. But I think it's a JS library?
 
 //Googled Answer
 Bootstrap is a front-end framework that makes it easier to just template elements and make a page more responsive. It looks like it's basically another alternative like css-grid or flexbox? Except maybe not quite as build into the language?  One of the reasons why you might want to use it for a project is that it has presets for varying display presets, which makes portability to a mobile version much easier. However, it looks like it only has 12 column "slots", which makes it a lot less flexible than css-grid's arbitrary number (and sizing) of it's columns (and more importantly, rows). It looks like it has a number of prebuilt classes, where you can just put in the template name, and it will take care of a lot of the styling for you. Actually looking at it, while it CAN do some of the stuff that flex or css-grid can do, it's actually fufilling a pretty different purpose.
 
#### 5. Name 4 semantic html tags.
nav, header, footer, aside
#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped. 
 
 //Your Answer
 block scope is a way on declaring variables that are intented to be kept inside that specific level of scope and intentionally released. Most notably, for things like the index of a loop. The 2 variables introduced in ES6 are let, which is the disposable variable mentioned above, and const, which can't be redefined (except for some weirdness with arrays/objects). By contrast, local scope is for the whole function that has been called, and global is for the top level of the program, and both are inherited by any children function calls
 
 //Googled Answer
 The key distinction for block scope is that it also works for non-functional scoping, whereas redefining a variable inside a lower scope can sometimes "leak" up into a higher one. Such as if(boolean){var=value}
 
 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?
 
 //Your Answer
Front end development is the public facing side of web development.  Some skills that Front end developers need that back-end ones wouldn't would be stuff like HTML/css, React, and a number of layout and other visual design skills like color coordination and typography.
 
 //Googled Answer
 Even though I mentioned react, responsive design in general is a tool that front end designers would use
 
 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on. 
 
 var name = "Santa" //initiating the name in global scope
 function Christmas(){
     const name = "Scrooge"//redefining the variable using block scope with const
     name = "the grinch" //trying to change the name, which shouldn't work because it's a const
     console.log(`Merry christmas ${name}`) //using string interpolation to output name, instead of concat. Should be scrooge
 }
 Cristmas()
console.log(`And to all a good night, said ${name}`) //should say santa, because scrooge was block scoped

 #### 9. What is the difference between a div and a span? 
 
 
 //Your Answer
 A div is blocking, while a span isn't. That is, a div will expand to take up the whole horizontal viewport that it's placed, with the element after it going on the next line, while a span will only take up as much space as its contents/css will specify, with additional elements going next to it. Both of these behaviors can be overriden to use the other's through css
 
 //Googled Answer
The term I was looking for for spans is inline, and the override is done using the display: property
   
#### 10. How would you explain the idea of "inheritance" in object oriented programming?
  //Your Answer
 inheritance (using super()), allows an object to copy over the properties (and methods!) of a class, which allows you to copy multiple versions of the properties, e.g. for different animals, or to modify only a subset of the methods. 
 //Googled Answer
it's better to say that a child is a type of the parent, instead of that the parent has the child. While it can extend stuff, it's better used for instancing (the other example is apparently composition). It's also worth (explicitly) noteing that there can be multiple children to a single parent class
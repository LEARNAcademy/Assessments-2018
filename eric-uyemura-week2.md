### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 you can link it in your the head of your html page.  
 <link rel="stylesheet" href="location.css">

 //Googled Answer


 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer
 a css class is a way to give many different elements the same css styling.  You want to use this when you have multiple elements that you want to style in the same manner.  However, if you have an element that is unique, or that is part of a class but you want certain style elements to have precedence over it, you use ID, as it can override classes, which are one of the more specific ways to style elements.
 //Googled Answer


#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,

display: block;
margin-left: auto;
margin-right: auto;
##### 2) give it a black border that is 5px wide,
border: 5px black solid;
##### 3) make its text appear in the center of the box
text-align: center;

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer

 all i know is that it has a lot of different ways to style certain things in your html or react, lots of predesigned things to make your page look nice.
 //Googled Answer
 1. ease of use, predetermined styles.
 2. "responsive web design": it is flexible for different devices and whatnot, which can mitigate the need to style for multiple different devices by yourself.
 3. designed for mobile ease of use.

#### 5. Name 4 semantic html tags.

1 header
2. footer
3. main
4. article

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer
 basically, before es6, if you had declared variables or whatever inside of a  loop or an if statement, then those variables were still globally available, however, with es6, you can make variables declared in a block be locally bound.  you do this with a let declaration, which keep variables in the scope that they should be in.  same with const.

 //Googled Answer

 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
I think that front end development involves everything that a user will see, this involves the html, the css, and interactive behavior from javascript and react and whatnot.  this definitely involves being able to step into a user's shoes and figure out what would make for the best user experience, what kind of site would you want to visit.  what kind of behavior would you want to see?  this is probably why the elementary javascript book that i read said not to overruse alerts and prompts, because no user wants to be forced to click something.  

 //Googled Answer
The code that a front end developer writes resides on the users browser, where as back end code runs on the server.   You'll need to know the ins and outs of how your user will be visiting your site, is most of your user population visiting your site from their phones, or from their laptops?  If most are coming from their phones, then perhaps most of your time and effort should be to develop a site that is very much navigatable from a phone. This is why bootstrap and responsive web design are so important

 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

 classes are a great way to create objects of uniform properties and methods.  not only this, but you can create other object constructors that inherit the properties of the original class, and so on and so forth.

 class Plant {
 	constructor (){
 		this.needsSun = true;
 		this.needsWater = true;
 		this.waterLevel = 0;
 	}
 	water() {
 		this.waterLevel += 25;
 	}
 }

 // above we are creating a class, which is basically an object constructor, it has three properties and one method.  

 var rose = new Plant()
 console.log(rose)
 rose.water()
 console.log(rose.waterLevel)

 // above we create a new instance of the Plant class, this means that it is an object that inherits whatever properties and methods that were in Plant

 class Cactus extends Plant {
 	constructor(props){
 		super(props)
 		this.leaves = "Spines"
 		this.location = "Desert"
 	}
 }

 //above we create a new class that inherits or extends the Plant class, this means it has all the properties and methods of Plant along with whatever other properties and methods you want to give it.

 var pricklyPear = new Cactus()
 console.log(pricklyPear)

 var cactus = new Plant()
 console.log(cactus)

// this basically just is creating a new instance of Cactus, and then testing whether it properly inherited everything.

 #### 9. What is the difference between a div and a span?


 //Your Answer
a div is a way to contain many different elements and put them in the same section, or overall box, a great way to organize different sections of html.  Span is basically an invisible container that can help you target very specific elements and style them, give them classes or ids, and what not.

 //Googled Answer
a span is an inline element, this is why it is used for more specific elements or words, because you can put it around a word or whatever and it won't cause a linebreak.

a div will cause a linebreak which makes it better for differentiating sections of a page.

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
Inheritance is the idea that objects can inherit, or propogate the same properties of a parent object, class, or object constructor.  this makes it very easy to create new objects that all conform to the same structure, which is important if you have specific functions that need to have certain properties or methods in common.
 //Googled Answer

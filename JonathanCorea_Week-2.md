### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?
 
 //Your Answer: I think there is a link that can connect the html(structure of a page) with the css component that is how the page is displayed. 
 
 
 //Googled Answer: There are three different ways to link a css file to an html page. One of the ways is through externally linking the css file to the html page as follows: 

<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
* all these must go under the header tag and the css file must be saved as .css extension.

Another way to link the css file to an html page is internally. This method is used when one page has a unique style. The way that the css file is linked is through using <style> tags within <head> tags as follows:

<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
} 
</style>
</head>

The last method is through inline styles where it's applied to a single element by adding the style attribute to a single element as follows:

<h1 style="color:blue;margin-left:30px;">This is a heading</h1>
 
 
 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?
 
 //Your Answer: a css class behaves almost as a grouping variable where one can set different style attributes to a group of html code. It's declared in html inside a tag with the words class = "string". I do not know when an id rather than a class should be used. 
 
 //Googled Answer: The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one. To select elements with a specific class in css write a .class, where class corresponds to the class name assigned in html. You use id for one page element with a particular id.
 
 
#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container, 
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Title of the document</title>
	<style>
		div {
  			width: 300px;
  			border: 5px solid green;
  			margin: 25px;	
  			text-align: center;
		}
	</style>
</head>
<body>
	<div class= "heading-box">
		<p>this is my box</p>
	</div>
</body>

</html>


#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?
 
 //Your Answer: a programming language developed by Facebook that interacts with Javascript, HTML, and CSS. It allows for the individual implementation of javascript to webpage elements. 
 
 
 //Googled Answer: It's a free front-end framework for faster and easier web development. It includes HTML and CSS based design templates thus giving it the ability to easily create responsive designs for mobile applications. It provides a framework that one can work with and a library of tools to prevent repition between projects, and it adds consistency to code and design between projects and developers.  
 
 
#### 5. Name 4 semantic html tags.

semantic elements are elements with a meaning: 

four semantic html tags would be: table, form, article, header, footer, 

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped. 
 
 //Your Answer: Block scope refers to a block of code where variables can be defined and used within a local scope. In addition to variables one can use functions within the limited block of code. This allows the use of same variables and reduces errors from variables being redefined where local scops was not separated from global scope. some variables that are blocked scope are those that start with the word "let". Additionally, can use the const declaration of a variable as well for local scope.
 
 
 //Googled Answer: Till ECMA script 5 there were three type of scope in JavaScript. They are function scope, global scope and lexical scope. There was no block scope in ECMA script 5 other than function block , catch block and object block. Block scope came to existence for other blocks like loops conditional statements etc. with introduction of let and const keywords in ECMA script 6. This article is only focusing on function scope and block scope in JavaScript.
 
 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?
 
 //Your Answer: front-end development to my understanding is the  displaying and style of a webpage or application. Some useful tools are CSS and HTML, and javascript which allow one to structure the page according to what would want.
 
 
 //Googled Answer: Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.
 
 
 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on. 

 //Example of Block Scope

 function OddNumber(arr) {
     var oddNumArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]%2 !== 0) {
            oddNumArr.push(arr[i])
        } 
    } return oddNumArr
 }
 
 console.log(i) //this would be undefined despite defining it above in the for loop
 var i = "global scope"
 console.log(i) // this would return the string "gloabl scope" because it's not being defined in the global scope.  

 
 #### 9. What is the difference between a div and a span? 
 
 
 //Your Answer: A div tag is used in an HTML page to separate content on a page. I don't remember what span did.
 
 
 //Googled Answer: The span tag is like the div tag. It has no meaning at all and is mostly used for styling by using an id or class. The difference between the two is that div is a block element, It's on a seperate line. span however is an inline element, meaning that it can be on a line with other elements.
   
   
#### 10. How would you explain the idea of "inheritance" in object oriented programming?
 
 
 //Your Answer: In object oriented programing, inheritance can be seen in objects or classes receiving properties like a parent-child. Where a child inherits certain properties/features from his parents. Likewise, a class can inherit properties. 
 
 //Googled Answer: JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

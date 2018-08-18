### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer

    You link a css file to an html page by passing the <link> tag inside of the <head> tag. Inside of that link tag you set href=".css" and rel="stylesheet".

 //Googled Answer
    <head>
    <link href="style.css" type="text/css" rel="stylesheet">


#### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

 //Your Answer

    A css class is when we want to give an element its own attribute so that you can style just that element in your .css file.

    Example: this is how you declare a class in html <div class="header"></div>.

    An id can be given to a specific element that could be nested deep inside of other class elements. Id's can also be convenient when trying to maintain that specific element's styling untouched.

 //Googled Answer

    The .class selector selects elements with a specific class attribute.

    Id elements can have only one ID.

    Each page can only have one element with that ID

    ID's can give us the chance to target an element specifically so that we may manipulate it uniquely to other identical elements on our page.

#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
      .heading-box {
        display; flex;
        justify-content: center;
        align-items: center;
##### 2) give it a black border that is 5px wide,
        border: solid 5px;
##### 3) make its text appear in the center of the box
        text-align: center;        
      }



#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

 //Your Answer

    Bootstrap is a framework that includes HTML and CSS along with other styling templates and assets.

    Bootstrap is good way to make faster and more stylistic development projects.

    It is also a great framework to use HTML, CSS and JS at the same time.

 //Googled Answer

    Bootstrap is a free front-end framework for faster and easier web development

    Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins

    Bootstrap also gives you the ability to easily create responsive designs

#### 5. Name 4 semantic html tags.

    <header>
    <section>
    <footer>
    <nav>
    <p>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

 //Your Answer

    Block scope variables like let and const, are only consistent to it's own block.
    Using block scope can make your program have less bugs due to re-assigning variables with similar names making the block scope variable to just function inside of it's own block scope.

 //Googled Answer

 In ES6, let and const were introduced as alternative ways of declaring variables both being blocked scoped.

 In block scope, any block will be a scope. this will give a more consistent behavior.



#### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
  Front end development is what usually happens between the website/app and the user. HTML, CSS, JS and Bootstrap skills are uniquely required for front end development.

 //Googled Answer

  Front end development is use HTML, CSS, and JavaScript to code the website and web app designs created by web designers.



#### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

    //declaring a class name.
class Name {
    // constructor holds in arguments
  constructor(first, last){
    // sets key value
    this.first: first
    this.last: last
  }

      //create a function that will introduce person with first and last name
  introduceName = () => {
    console.log(`Hi my name is ${this.first} ${this.last}`)
  }

    //declare a variable with new Name
  let fullName = new Name('Tom', 'Smith')
  console.log(fullName)

    //call both functions fullName and introduceName
  fullName.introduceName()

    output = "Hi my name is Tom Smith"

#### 9. What is the difference between a div and a span?


 //Your Answer
  <div> is used more often to hold larger sections of nested code. <span> is better for smaller chunks of code like a paragraph or a quote.

 //Googled Answer

    The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.

    The HTML span element is an inline element, which means that it can be used inside a block element and not create a new line

#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer

  Inheritance in object oriented programming is when a child class inherits an object or method from the parent class. It is a good way to send information back in forth between components/classes.

 //Googled Answer


 Inheritance enables new classes to inherit the properties and methods of existing classes.

Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

1. How do you link a css file to your html page?

//Your Answer

<link type="styleReferenceSheet" href="cssPage.css"/> in <header>

//Googled Answer

<link rel="stylesheet" type="text/css" href="cssPage.css"> in <header>

so i was kinda close

2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

//Your Answer

Class is declared with a . (such as .example{css}) & should be used to affect mutliple HTML elements at a time

ID is declared with a # (such as #example{css}) & should be used to affect exactly 1 HTML element at a time

Technically class may be used on just one element, & isn't a terrible idea if you think you might add more of that element to a page later...

//Googled Answer

I was right, but I just learned that you can apply a specifier before declaring class (ex if you have several <p> and <h3> elements that all have the class of "text", but only want to affect the <p> elements with the class of "text" you can write p.text{css})

3. The class "heading-box" exists in our html file - write the css code that would:

1) align this box to the center of its container,
2) give it a black border that is 5px wide,
3) make its text appear in the center of the box


.heading-box{
  margin: auto;
  border: 5px solid black;
  text-align: center;
  height: 200px
  line-height: 200px
} // side note, it doesn't matter that the height and line-height are 200px, just that they are the same. This allows the actual line of the text to be the same height as the container and the text just automatically sits in the line at the center


4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

//Your Answer

Bootstrap is a html, css, and javascript library that adds many useful web design elements to your toolbox such as flex-boxes, carosels, jumbotrons, and navbars. These are all elements you could code yourself, but with bootstrap, why bother!

//Googled Answer

"Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery."

so yeah, basically what i said, but more!

5. Name 4 semantic html tags.

Semantic HTML tags are tags that work just like div but help make HTML easier to read by dividing your page in a way that makes sense.

These are just some that I googled.

  <article>
  <aside>
  <details>
  <figcaption>
  <figure>
  <footer>
  <header>
  <main>
  <mark>
  <nav>
  <section>
  <summary>
  <time>



6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.


//Your Answer

Block scope reffers to the scope inside of for loops and if statements and other js tools like that. By using {let} you can declare variable in block scope that won't become global and mess with later if/for statements and such.


//Googled Answer

"Block scopes are what you get when you use if statements, for statements, and the like. You can also use them stand-alone with a simple begin-end curly braces {}, not to be confused with empty object literals." I was correct about let as well it seems.

7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

//Your Answer

Front end development is designing webpages, display elements, and logic that primarily resides on the user side (so logic that is interpreted in browser, and not by a server). To be a good front-end developer a strong understanding of html and css are required, as well as javascript for handling front end logic for animated or conditional display elements and the like. A decent understanding of design, and a good artistic sense is also desirable.

//Googled Answer

basically what i said, but obviously it's possible to go more in depth...

8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

class Example {
  constructor(ex){
    this.ex1 = "this "
    this.ex2 = "is "
    this.ex3 = ex
  }
  log() {
      console.log(this.ex1+this.ex2+this.ex3)
    }
}

var sparta = new Example("sparta")

sparta.log() // should console log "this is sparta"

9. What is the difference between a div and a span?

//Your Answer

they are basically the same, but I want to say that div should generally be used to enclose larger areas of code, includign many other other HTML tags, while span is more of an in-text divider.

//Googled Answer

"div is a block element, span is inline.

This means that to use them semantically, divs should be used to wrap sections of a document, while spans should be used to wrap small portions of text, images, etc."

so yeah...

10. How would you explain the idea of "inheritance" in object oriented programming?

//Your Answer

when creating classes, you can create a class that 'inherits' from a parent class. Example:

class Ball {
  constructor(size) {
    this.shape: "round"
    this.diameter: size
  }
}

// that was the parent class, now for the 'child' class

class RedBall extends Ball {
  construtor(size){
    super(size)
    this.color: "red"
  }
}

//the real power is in differentiation of child classes, and compartimentalization of methods and attributes, for example we could make:

class BlueBall extends Ball {
  construtor(size){
    super(size)
    this.color: "blue"
  }
}


//Googled Answer

I seem to be corret, though there is more to it. I do not want to go down the rabbit hole however and I am happy wiht my answer.

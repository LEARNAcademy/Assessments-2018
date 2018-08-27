### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
<!-- - React is a full stack framework for modern web applications -->
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 Dumb components simply display information (that comes from smart components), while smart components manipulate information. We make a distinction so as to try to keep components as minimal as possible, and make sure each component only does what it has to do.

 //Googled Answer
"Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM"
"The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage."

"Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.

Using the container design pattern, the container components are separated from the presentational components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props."

"They are class-based components and have their own state defined in their constructor() functions."

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
???

 //Googled Answer
Yarn is adding a package to your project. It will update your package.json and yarn.lock files, so other developers working on the same project will get the same dependencies when they yarn install.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, { Component } from 'react';

class Recipes extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        'Meatballs',
        'Mac & Cheese'
      ]
    }
  }

  render() {

    let recipes = this.state.recipes.map((recipe)=>{
      return(
        <li key={recipe}>{recipe}</li>
      )
    })
    return (


      <ul>
        {recipes}
      </ul>
    );
  }
}

export default Recipes;


#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
???

 //Googled Answer
hidden, image, file

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
State holds information about components of an app, and this information can be updated when the page is interacted with.

 //Googled Answer
"Like props, state holds information about the component. However, the kind of information and how it is handled is different."

"When a component needs to keep track of information between renderings the component itself can create, update, and use state."

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.

 //Your Answer
 Props are instances of state passed to components that can get manipulated and used to re-set the state later.


 //Googled Answer
"To get the jargon out of the way, “props” is short for “properties” so nothing particularly fancy there."
"[The] property is passed to the component, similar to how an argument is passed to a function."
"A component can also have default props, so if a prop isn’t passed through it can still be set."
"So props can come from the parent, or can be set by the component itself."

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Building tic-tac-toe was a fun learning experience. I realized I'm good at quickly working out how components should work together, and thus wireframing as well. I do struggle with CSS, but I feel like that is just because I do not really practice it. Also, after the project was done, by working on it further at home, I was able to improve my ability to refactor code. Finally, during the mobbing, I further developed my ability to explain my code to others who might not understand it right away.

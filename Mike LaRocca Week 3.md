Week 3 Assessment
Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list: (false is commented out)
<!-- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) -->
React is a modern, efficient answer to complex UI applications
<!-- React is a full stack framework for modern web applications -->
React is a flexible library that plays the role of V in an MVC framework
2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
//Your Answer
A smart component changes the state of information in react.  It is running functions and applying logic to make changes to that state.  
Dumb components simply take that information from the smart component and show it.
The two are separate because one does not want to be changing state from multiple components.
//Googled Answer
Smart Components:
describe how things work
no DOM or markup or styles
provide app data, do data fetching
call flux applications

Dumb Components:
describe how things looking
have no app dependencies
Receive only props providing data and callbacks
rarely contain own statements

Reasons to separate:
Reusability
Design manipulation without breaking logic
Reduced code duplication

3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
//Your Answer
Yarn is a sort of command line package manager that installs particular packages to a project or system.
//Googled Answer

5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:
import React, { Component } from 'react';

class Recipes {
  constructor(props){
    super(props)
    this.state = {
      recipes:
        {name: ['Meatballs', 'Mac & Cheese']}
      <!-- changed to an array -->
    }
  }

  render() {

    return (
<!-- moved ul to contain li and deleted 2nd return -->
      let recipes = this.state.recipes.map(function(recipe){
          <ul>
            <li key={recipe.name}>{recipe.name}</li>
          </ul>
      })


    );
  }
}

export default Recipes;
6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)
//Your Answer
HTML inputs.... Buttons, form fields
//Googled Answer
check box, email, file, date... lots more
7. How would you explain state to a friend who doesn't know code?
//Your Answer
State is the holding place for a specific configuration of a set of properties.
//Googled Answer

8. What is the difference between component state and props? Your answer should include a short explanation of both.
//Your Answer
Component state has properties that change configuration whereas props in a component is inheriting those properties from a different component and contains no solid changes in configuration or state.
//Googled Answer

9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
Tic-tac-toe was a rollercoaster.  The only way to understand is to ride it. Beginning was a bit of a struggle.  Where to start, blank minds, dumb stares.  We succeeded in taking bit sized chunks and slowly solving them one by one.  This got us to a working game but with some flawed logic.  The way we structured our win was built off of these small bit sized wins to get things to work, not to build them in the best way possible.  Tic Tac Toe taught me to attempt to understand logic that has less holes before jumping into the actual code.  

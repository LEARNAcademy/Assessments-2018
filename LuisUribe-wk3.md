Week 3 Assessment
Try your best to answer each question on your own before looking up the answer online. Once youre done writing your first answer, you can google the question and write the best answer you find.

1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:
//React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
React is a modern, efficient answer to complex UI applications
React is a full stack framework for modern web applications
//React is a flexible library that plays the role of V in an MVC framework
2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
//Your Answer - smart and dumb components are chunks of code that factor into either display/css or logic/functionality..?

// //Googled Answer - Smart components
// It will not have DOM markup or styles. It will do the processing and provide the data. It will work like the Controller in MVC.
// Dumb components
// It is UI only component. It will rarely have own state. If it has, It will have only UI states.

3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
//Yarn add is going to install a package or library to your yarn file. the home yarn file will be updated.

//Googled Answer - it will always update your package.json file.

5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:
import React, { Component } from 'react';

class Recipes {
  constructor(props){
    super(props)
    this.state = {
      recipes:
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}

    }
  }

  render() {

    return (

      let recipes = this.state.recipes.map(function(recipe){
        return(
          <li key={recipe.name}>{recipe.name}</li>
        )
      })

      <ul>
        {recipes}
      </ul>
    );
  }
}

export default Recipes;
6. Name three html input types. (NOTE: text is the default type - so it doesnt count in this case)
//Your Answer - boolean, number, Integer.

//Googled Answer - boolean, number, integer.

7. How would you explain state to a friend who doesnt know code?
//Your Answer - State is what being updated to whatever function/class you are updating.

//Googled Answer - For data that is going to change, we have to use state.

8. What is the difference between component state and props? Your answer should include a short explanation of both.
//Your Answer - State is for data that is going to change. Props is for data that will be used but not changed.

//Googled Answer - state is for data that is going to change. props is the state that the data is currently in.

9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.


Tic-Tac-Toe was tough for a few reasons. I had trouble implementing the if statements for declaring a winner. My group was able to build the game and its functionality, but got stuck trying to pass information as to who was the winner (state, props). I am enjoying paired programming more. I am starting to learn how somebody is thinking and collaborate with them.
Some cases are tougher than others, but I am enjoying the process and see why it is an asset. 

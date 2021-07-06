### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list: #

<!-- - React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) - False -->
- React is a modern, efficient answer to complex UI applications - True
<!-- - React is a full stack framework for modern web applications  - False -->
- React is a flexible library that plays the role of V in an MVC framework - True


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them. #

 //Your Answer
The smart component manage state while dumb components are passed props to display.

 //Googled Answer
Dumb components don't have internal state to manage, they will always display the same information to the DOM that is passed to them by the smart components.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn? #

 //Your Answer
Yarn is connecting all the libraries needed to run your webpage. Your JSON file will be updated after adding a package with yarn.

 //Googled Answer
Yarn add installs a package to your dependencies and installs any package that it depends on.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, { Component } from 'react';

class Recipes extends Component {
  constructor(props){
    super(props)
    this.state = {
        recipes: {
          name: 'Meatballs',
          name: 'Mac & Cheese'
        }
    }
  }

  let recipes = this.state.recipes.map(function(recipe){
      return(
          <li key={recipe.name}>{recipe.name}</li>
      )
  })

  render() {
    return (
        <div>
            <ul> {recipes} </ul>
        </div>
    );
  }
}

export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case) #

 //Your Answer
1) email
2) number
3) submit

 //Googled Answer
4) button
5) password
6) reset

 #### 7. How would you explain state to a friend who doesn't know code? #

 //Your Answer

 //Googled Answer
State is the puppet master of React. Any time the puppet master moves the paddle the puppet will move. The strings that connect the paddle to the puppet are like props.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both. #

 //Your Answer


 //Googled Answer
Component state cannot be accessed and modified outside of the component and can only be used and modified inside the component. Props makes the components reusable by giving components the ability to receive data from the parent component.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch. #

Tic Tac Toe was very difficult for me. I struggled with setting aside my ego and frustrations of feeling stupid and tried to learn from my group as much as possible. React is a tough one for me to fully grasp. The concept seems pretty amazing and a very valuable tool but the interactions of the components are pretty confusing. If left completely to my own to construct Tic Tac Toe I would have had to make a much simpler page. The part of transferring the logic from the child component back to the parent was super confusing. Not to say it wasn't a very interesting lesson and seeing my group work out how to do it properly was very cool.

<!-- // git add
// git commit -m (message as to updates)
// git push (pushing to a new branch)
//
// on github
// two branches -->

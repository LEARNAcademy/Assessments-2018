### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
Smart components contain the logic within them and can be called upon to perform 'action', whereas dumb components display the output.

 //Googled Answer
"Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. [...] The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. "
"Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works. [...] The container components do the heavy lifting and pass the data down to the presentational components as props."

source: https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
1) Yarn is adding a specified package to JavaScript on the local computer.
2) Adding a package with yarn will always automatically update the JSON file.

 //Googled Answer
1) "When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project."
2) "This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install."

source: https://yarnpkg.com/en/docs/cli/add

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    <!-- error: needs to extend component -->
    class Recipes extends Component {
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

          <!-- error: converted the below into an arrow function -->
          let recipes = this.state.recipes.map((recipe) => {
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })

        <!-- error: added return here to show the recipes -->
        return(
          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer


 //Googled Answer


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
State is the snapshot of a component at that point of time.

 //Googled Answer
"A state in React Component is its own local state, the state cannot be accessed and modified outside the component and can only be used inside the component which is very similar to, you already guessed it a function own local scope."

^not sure this would be useful for a friend who doesn't know code

source: https://medium.com/@manojsinghnegi/react-state-vs-props-explained-51beebd73b21

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
The component state consists of the attributes and their associated values for the component that they live within. The component props are values of another component's state at the time that they're passed through (i.e., a component's state values can change over time; however, when they're passed through as props, those values will remain the same until they're passed through as props again)

 //Googled Answer
"state looks and works a lot like props, but it is contained within a single component and can be changed as we please, while props are read-only for their owning Component."

source: https://blog.cloudboost.io/props-vs-state-in-react-js-9c186dcf39b8

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Given that my previous programming experiences mostly reside within functional programming, it was a challenge for me to look at code the way React forces me to; however, after going through the Tic-Tac-Toe game it makes sense why React is becoming popular. The hardest part of React was understanding how to pass values between components as state and props, but the exercise greatly helped with my understanding. Doing mob programming for this exercise was fun; my team members and I spent a lot of time wireframing the app before building the code, and I believe that greatly helped us reach the end goal.

### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:


- React is a modern, efficient answer to complex UI applications

- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 Smart components hold the logic or backend part of a page, while dumb components hold the display or frontend of a page. There is a distinction between them because it helps to have an idea of what controls the methods or logic versus the display or appeal of the page.


 //Googled Answer
 Smart Components: also know sometimes as application-level components, container components or controller components
 Presentation Components: also known sometimes as pure components or dumb components


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
 I believe it adds non existing files.


 //Googled Answer
 This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes:[
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
            ]
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

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
 password, email, number


 //Googled Answer
button, search, number, email, password, submit

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
The state holds the power of a class and allows you to interact with different classes and things.

 //Googled Answer
 the State pattern is a way of making the behaviour of an object (i.e. what its methods do) dependent on its stat


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
State is used in the parent class while the props is used in a child class. State gives props some of its properties.

 //Googled Answer
The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
My experience building tic-tac-toe was nothing less then a great one. Some things I learned about myself are that some of my strengths are beneficial even when I don't understand some coding logic. Concepts from React that stood out to me are its very flexible and can be used in various ways to get to a goal. I strongly believe paired programming is the only way to go. Putting two minds together to hack away is much better then one. Building something from scratch seemed exciting at first, but when getting into it... yeah.

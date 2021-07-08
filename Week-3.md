### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) : false/yes
- React is a modern, efficient answer to complex UI applications : true/yes
- React is a full stack framework for modern web applications : false/false
- React is a flexible library that plays the role of V in an MVC framework : true/true
(first answer/google search)

 
 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
 
 
 //Your Answer : ?
 
 
 //Googled Answer : dumb components should contain only enough javascript/react code in order to work in your app. The dumb components' single responsibility is to control the HTML composition, or presentation, of the component. This is why some people call it a presentation component.

smart components should do everything else that is related to that specific component, and the specific responsibility of that component, that is not related to the actual HTML of that component.
 
 
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 
 
 //Your Answer : yarn is installing a package. ?
 
 
 //Googled Answer : installs a package and any packages that it depends on. In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install
 
 
#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes: [
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
            ]
      
        }
      }

      render() {
    
          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
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
 
 //Your Answer : number, date, logic
 
 
 //Googled Answer :color, date, datetime-local, email, month, number, range, search, tel, time, url, week
 
 
 #### 7. How would you explain state to a friend who doesn't know code?
 
 //Your Answer : state is status of variable.
 
 
 //Googled Answer : an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.
 
 
 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.
 
 
 //Your Answer : state is defined variable in current components, and props is pass down state from parent component. 
 
 
 //Googled Answer : Basically, the difference is that state is something like attributes in OOP : it's something local to a class (component), used to better describe it. Props are like parameters - they are passed to a component from the caller of a component (the parent) : as if you called a function with certain parameters.
 
   
#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

After completing the treasure hunt program, it was easy to visualize how to build a tic-tac-toe program. Daniel and I have spent about two hours planning how to build the program and what kind of logic we were going to implement. Then we basically follow the treasure hunt coding method to create the tic-tac-toe program. Because we spent time on planning, we were behind others, but we were the first pair to complete the program. It was a pleasant experience to work with my pair. I have learned how to speak or explain my thoughts and ideas to my pair.
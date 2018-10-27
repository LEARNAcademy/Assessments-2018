### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
<!-- - React is a full stack framework for modern web applications -->
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 "smart" components are the components that hold state.  "dumb" components are the one's that simply display that state that the smart components orchestrate. it's important to make this distinction because it can get confusing trying to have multiple components with state all be on the same page (getit?), in other words, when multiple components have state its hard to keep track of who is doing what to state and at what time.  THis is why its good to have as few components handling state as possible and from there have those components delegate displaying information to dumb components.

 //Googled Answer


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer


 //Googled Answer
it updates the package.json file, the yarn add .. command will allow you to add different packages to your project by adding it to your dependencies.




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

 //Your Answer
 block, inline, flex.

 //Googled Answer
 button, checkbox, submit.



 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
 it's what keeps track of the information about your app, the counts and the properties of your app are kept in state, and distributed as props to other components, which can display that information back to the user.

 //Googled Answer
 "state" is an object that determines ho the component renders and behaves, its what allows components to be dynamic and interactive.



 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
 You send a component a copy of state, and that copy of state is seen as props in the component that received the information.  Props is all the information that a component receives from a parent component.  A parent component has an object called state that keeps information about the app and distributes its state to child components, which view them as props.

 //Googled Answer


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

I had a blast making tic tac toe.  Something I've been focusing more on is the process of completing a project, where do you start, how do you make the most progress without getting stuck for too long.  I noticed a lot of groups get stuck on the smaller details, or get too caught up on thinking about what their app should do in the future, but in reality that step is way down the line.  My process is about taking one step at a time, instead of getting too caught up, do what you can with the knowledge you have and periodically comparing what you have with what you want the end product to be.  Pair programming is as much about the knowledge you both have as it is about how two people can work together.  There may be something that your partner thinks will work that you doubt will work, but a lot of times its better to go with it, try to make it work, and you both will end up with a better grasp of the original thing you were working on.  

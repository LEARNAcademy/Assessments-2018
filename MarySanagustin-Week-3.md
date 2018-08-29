### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:


- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer

 "Smart" react components are "impure," meaning that they are managing state. "Dumb" or "pure" react components do not manage state and merely display props. Data/state is updated in impure components and passed as a "snapshot" through props to pure components.

 We make the distinction between pure and impure components because they play different roles within the application. Data flows from smart components to dumb/display components. sState is changed and updated in impure components and passed via props to pure components.

 //Googled Answer

 Smart Components
 Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.

 Using the container design pattern, the container components are separated from the presentational components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props.

 They are class-based components and have their own state defined in their constructor() functions

Dumb Components
Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on.

The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage. They wouldn’t know how to change the data they are presenting if they were asked. Ignorance is bliss.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer

Yarn fetches Js nodes and all dependencies, keeps those Js nodes up to date, and automatically updates our Package JSON file.

 //Googled Answer

 In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

 This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component {
        constructor(props){
        super(props)
        this.state = {
        recipes = [
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

<text area>
<form>
<button>

 //Googled Answer

 <text>
 <password>
 <submit>


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer

State is a web application's way of keeping track of changing variables in real time. When state is updated, it can be passed to other components which have the job of displaying a "snapshot" of the current state.

 //Googled Answer

 What does setState do?
 setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer

Components have properties or props, and the value of those properties can be passed back and forth like variables between components. State is the most current state of those values as they get changed and modified by the web application which is managed by the logic of smart components.

 //Googled Answer

 What is the difference between state and props?
 props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Building the react project has been the single most challenging yet rewarding project in class so far. My brain felt stretched a bit when I realized that I could not simply apply vanilla javascript principles to build the game. There are a lot more moving parts with react and figuring out which logic goes where to pass the props from the smart components to the dumb components was not as intuitive as I had hoped. My group made both the "board" and the "square" components smart, with a lot of logic in each that modified their respective states. Looking back, I am not sure this was the most efficient way to do things, and it made creating a simple reset function challenging.

My experience mob programming with CJ and Enrique Vega was a great experience. We were having a blast brainstorming and scribbling on the big white board, and we approached the code with a well though out plan for every segment we tackled. The collaborative effort was super fun and I genuinely felt that everyone's ideas were heard, and everyone made great contributions to the success of the game- success being that it worked, hallelujah!

One of the best things I walked away with after that project was seeing the value in many minds arriving at a single solution together. Also, I have a bad habit of just "jumping in" and starting to code, and the challenge of building such a complex game forced us to plan and strategize. I especially walked away with better habits about taking on step at a time when adding functionality, maybe writing code the long way at first and then destructuring or refactoring later when we knew we had a working feature.

I honestly cannot wait for our next react project and I am grateful we are being given another crack at it!

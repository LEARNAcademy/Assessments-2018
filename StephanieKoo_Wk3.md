### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications

- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
The smart components are the state while the dumb components are props in react. The smart components hold the stored information while the dumb components are the ones to display whatever the smart wants them to display in the output. We make a distinction because while the state changes, the props do not change. The state and props are unique in their jobs and state orders what the props should display in each components.  

 //Googled Answer
Smart Component Characteristics:

Describe how things work
Provide no DOM markup or styles
Provide application data, do data fetching
Call Flux actions
Named Container by convention

Dumb Component Characteristics:

Describe how things look
Have no app dependencies
Receive only props, providing data and callbacks
Rarely have own state, when they do, it’s just UI state
Named anything that’s a UI noun

If you separate concerns, your app will be easier to reason about, complexity will be mostly localized around the Smart components, and you should be left with more simple components. UI components will be more reusable.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
In the terminal, the "yarn add ..." is opening the created react app and is connecting to the react server. The JSON file will be updated after we add a package with yarn.

 //Googled Answer
Yarn add is installing a package and any packages that it depends on. This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.




#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes {
      constructor(props){
        super(props)
        this.state = {
          recipes: *[
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
         ]* <= array
        }
      }

      render() {
          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
              )
              })
          *return* (
            <main>
          <ul>
            {*this.state.recipes*}
          </ul>
          </main>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
  The three html input types are: submit, email, and password.

 //Googled Answer
Many more here: https://www.w3schools.com/tags/att_input_type.asp like radio, reset, search, etc.

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
State is an object where the information/data is stored and where information is declared. For example, it's like a box where all the information about your pet is stored. The dog's name, the dog's fur type, color, height, short, etc would be in this state object. In order to grab it, you would have to go through the state object.

 //Googled Answer
 Properties are defined when components are created, whether by JSX or by pure JavaScript. State, on the other hand, is only seen on the inside of component definitions. This is the first, and most important difference between the two.

 When you think of properties, you should be thinking of component initialisation. When you think of state, you should think of an internal data-set which affects the rendering of components.

 There are ways to validate the presence and type of properties, but there is no such mechanism for state. You, as the developer of a component, are the only person who should know what state your component needs, and the correct data types which should be accepted/provided.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
State component is an object where the information is declared and stored in a library called React. If an information is declared, it would be placed in the state component. In the state component, the props components are used to display the information that the state component contains. The props are the ones to display the information while the state components has them.

 //Googled Answer
 Props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
Overall, the tic-tac-toe project was challenging. I worked alone for this project and working alone was a good practice for me because I personally like to work with others. However, I can be more dependent on my partner than myself because I feel like I know the general big idea but it's hard to code it out. Building something in code from scratch but definitely a great experience and I am starting to understand that I need to break out the big picture into smaller chunks and think about how to write the code. This project really made me thinking about I believe that it was a good level challenge to start making something from scratch.

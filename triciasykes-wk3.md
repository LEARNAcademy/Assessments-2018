### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.

 //Your Answer
 Smart components manage state by passing information via props to the 'dumb' components. Dumb components are purely for displaying information. The distinction is necessary because the structure of the component differs based on it's purpose. Unlike display components, smart components have a constructor, logic, and key-value pairs (since state is always an object).
 //Googled Answer
Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage. They wouldn’t know how to change the data they are presenting if they were asked.
Smart components keep track of state and care about how the app works. These components are separated from the presentational components and each handles their own side of things. The smart components do the heavy lifting and pass the data down to the presentational components as props.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 //Your Answer
 Yarn add adds a dependency to package JSON.  JSOn is the list of names of the various dependencies.  The node_modules folder is always updated - this will contain all fo the code.


 //Googled Answer
 Yarn add- adds a new dependency to a project. The command for that is add, followed by the package name.


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

  import React, { Component } from 'react';

    class Recipes extends Component{
      constructor(props){
        super(props)
        this.state = {
          recipes:
            {name: ['Meatballs', 'Mac & Cheese']}

        }
      }

      render() {

        return (

          let recipes = this.state.recipes.map(recipe)=>{
            return(
              <ul>
                {recipes}
                  <li key={recipe.name}>{recipe.name}</li>
              </ul>
            )
          })

        );
      }
    }

    export default Recipes;


#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)
//Your Answer
  Button, Submit, Checkbox

 //Googled Answer
 Password, submit, reset, button, radio, checkbox.  HTML 5 also supports: color
 date, datetime-local, email, month, number, range, search, tel, time, url, week

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
 This is a difficult question because I'm still not completely grasping state. That being said I will attempt to explain state in React. The dictionary defines the term "state" as "the particular condition that someone or something is in at a specific time."" For example, water can change based on temperature - it's state may be solid, liquid, or vapor.  This idea can be applied to state in React. State is the condition/information displaying to a user at any given time. It can change over time - change the state to change how the app looks.

 //Googled Answer
 "In English the ‘state of a being’ refers to the physical condition of a person, and it is a mere state, which changes over time. Well, similarly state in React/React Native is used within components to keep track of information. Anytime there is data that is going to change within a component, state can be used.User interaction with components are good examples of how state works. Clicking buttons, checkboxes, filling forms, etc. are examples of user interaction where state can be used within the component.
If you had to fill a form with text inputs, each field in the form will retain it’s state based on the user input. If the user input changes, the state of the text inputs will change, causing a re-rendering of the component and all of it’s child components.""



 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.

//Your Answer
  State is managing the internal state of a component - it is used to remember things, and is the state of information displaying to the user. Props is used to communicate state between components. It is information that gets passed from one component to another.  Both state and props are objects.

 //Googled Answer
 Props and State do similar things but are used in different ways. Props are used to pass data from parent to child or by the component itself. They are immutable and thus will not be changed. State is used for mutable data, or data that will change. This is particularly useful for user input. Think search bars for example. The user will type in data and this will update what they see.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

The most significant piece of information I learned from the tic-tac-toe exercise was that I didn't have a grasp on React, particularly state and props.  I thought I understood the concepts, but then executing the build was a completely different matter. Honestly, a lot of the time, I was completely confused. However, in working through the challenges with my teammates, I did gain some understanding of rules and syntax. I did enjoy celebrating the little victories we had along the way, and appreciated having a supportive team environment(whether celebrating or commiserating).  

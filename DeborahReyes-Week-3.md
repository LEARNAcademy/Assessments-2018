### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a full stack framework for modern web applications
- React is a flexible library that plays the role of V in an MVC framework


#### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 A smart component is one that manages the state whereas the dumb component is likely made for purely displaying information and does not manage a state. You are probable passing props to this component.

 //Googled Answer
 Dumb components - their only responsibility is to present something to the DOM. They usually only have a render() method.

 Smart components - They keep track of state. They pass the data down to the dumb components as props. These are class-based components that have their constuctor() functions defined. They usually contain a callback function that is used to update the state.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

 //Your Answer
 When we use "yarn add ..." in the terminal then we maek a node package open source. When we add a package with yarn, the file that is updated is the package.json file. It lists all of the dependencies in that file.

 //Googled Answer
 "yarn add ..." installs a package any any package that it depends on. The file that is updated is the package.json file and also the yarn.lock file so that other developers working on the project will get the same dependencies as you when they run yarn install.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

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
I'm honestly not too sure what that is. I'm guessing that some other input types that we can have are number and boolean?

 //Googled Answer
Three input types that you can have are "password", "email", and "Submit".

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
I would explain state as a variable that determines what's going on with the website at the time. For example, if you're trying to determine a turn for a tic-tac-toe board game, I would save that information as a variable that can be passed to different parts of the website.

 //Googled Answer
A state is used to keep information in React. State keeps information that can be changed overtime. This change can be in response to anything happening on the webpage.

#### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
State is the actual information being stored. In the component that state is declared, it can be reassigned as well. It is private data to other components in React and this is where props comes in.

Props is used to pass the state of one component to another component. Props cannot change the state of what is was passed but it can be used to display the information.

//Googled Answer
Props is shorthand for properties. Props are how components talk to each other. Props flow downward from the parent component.
This is why people refer to React as having uni-directional data flow. This takes a bit of getting your head around and I’ll probably blog on this later, but for now just remember: data flows from parent to child. Props are immutable (fancy word for it not changing).

So state is used so that a component can keep track of information in between any renders that it does. When you setState it updates the state object and then re-renders the component.

Props are used to pass data from parent to child or by the component itself. They are immutable and thus will not be changed.

State is used for mutable data, or data that will change. This is particularly useful for user input. Think search bars for example. The user will type in data and this will update what they see.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
What I learned from tic-tac-toe was a lot about how to pass data between different components. I learned that props cannot passed to the parent component from the child unless you trick it and use it in a method in the parent. That was a really interesting lesson.

I also learned that I need to stop my own agenda and desire to take control by allowing the other person to move the project along. I need to become someone who doesn't just try to steer the project to where I want to go but I need to allow others to process the information in their own way for their learning experience.

I also need to be mindful about asking my partners for their ideas. I realized that it can be a very stressful question because they may not completely understand what's going on or what's happening and to be asked to contribute during a time when everyone has no idea is a scary thing.

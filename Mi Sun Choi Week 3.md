### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


#### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer


 //Googled Answer
 Smart means “container” or “app-level”. Some have compared it to the “C” in MVC. Dumb means “presentational” or “ui only”, possibly comparable to the “V” in MVC.
 Smart components describe how things work, provide no DOM markup or styles, provide application data, do data fetching, and call Flux actions.
 Dumb components describe how things look, have no app dependencies, receive only props (providing data and callbacks), rarely have own state (when they do, it’s just UI state), and named anything that’s a UI noun.

 Apparently you need each class of components because obviously your app has to smart to be interesting. But if it’s more dumb, it’s more simple. So split it. You need both.

 If you separate concerns, your app will be easier to reason about, complexity will be mostly localized around the Smart components, and you should be left with more simple components. UI components will be more reusable.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer


 //Googled Answer
 "yarn add" installs a package and any packages that it depends on.
 This will update your package.json and yarn.lock o that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes {
      constructor(props){
        super(props)
        this.state = {
          recipes: {
            name: 'Meatballs',
            name: 'Mac & Cheese'
          }
        }
      }

      render() {

        return (

          let recipes = this.state.recipes.map(function(recipe) => {
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })

          <ul>
            {this.state.recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
 submit
 button

 //Googled Answer
 password, submit, reset, radio, checkbox, button, etc.


#### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
 State is like a box where you store the information or objects into. When you want to use the particular objects, you can refer to that state and choose which object you want to use by calling this.state.object for the code

 //Googled Answer
 In english the 'state of a being' refers to the physical condition of a person, and it is a mere state, which changes over time. Well, similarly state in React/React Native is used within components to keep track of information.

#### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
 Component state is used when you want to access the information you stored in the state within the component while the props allows one component to pass its information to another component.

 //Googled Answer
 State is internal to a component, while props are passed to a component. Anytime there is data that is going to change within a component, state can be used.
 Components receive props from their parent. These props should not be modified inside the component. In React and React Native the data flows in one direction -> From the parent to the child.
 The idea behind props is that you can make a single component that is used in many different places in your app. The parent that is calling the component can set the properties, which could be different in each place. Props essentially help you write reusable code.


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Building tic-tac-toe from scratch was difficult and my partner and I had to rely on online resources a lot to figure out how react components work with each other. I had a hard time understanding how to use the state and props and how they worked in different components. I feel like I kind of knew the general concept that data flows from parent component to child component, but trying to apply that to our actual code was quite confusing. Towards the end I think I had a better grasp of how state and props work.
In terms of pair programming I think it is hard when both programmers do not know where to start with, and it takes a lot of online searches to figure out how to do one method because we had to understand the fundamentals behind that method before we can use them. I feel like it would be more efficient if both people have some basic knowledge of the language and some ways to do that can be to have more lectures that cover the fundamentals of that language or studying more outside of bootcamp to solidify our knowledge in some aspects of the language.

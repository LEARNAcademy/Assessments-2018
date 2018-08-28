### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)

  FALSE

- React is a modern, efficient answer to complex UI applications

  TRUE

- React is a full stack framework for modern web applications

  FALSE

- React is a flexible library that plays the role of V in an MVC framework

  TRUE


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 Smart components typically hold most of the logic and code. Dumb components are meant to just send info back to the smart component. There is a distinction between the two because of how information flows between them - their relationship may also be called a parent/child relationship. Knowing the distinction between the two will allow you to pass information between them properly and will also allow you to write cleaner code.

 //Googled Answer
 -Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it
 -Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
 -Yarn add will install whichever package we name after add..
 -The .JSON file will be automatically be updated to show that we added a package

 //Googled Answer
-When you want to use a package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.
-This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:


//Note: I've marked errors I fixed with *purple asterisks*


    import React, { Component } from 'react';

    class Recipes *extends Component* {
      constructor(props){
        super(props)
        this.state = {
          recipes: [
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
            ] *added []*
        }
      }

      render() {
          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })

          *moved return here*
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

  I didn't have an answer of my own for this question (sorry).

 //Googled Answer

 1. Text
 2. Password
 3. Reset
 4. Radio
 5. Checkbox
 6. Button
 7. HTML 5 introduced the following new input types:
 -color
 -date
 -datetime-local
 -email
 -month
 -number
 -range
 -search
 -tel
 -time
 -url
 -week

 #### 7. How would you explain state to a friend who doesn't know code?

   //Your Answer

  Think of state as being your current mood. Let's say you are feeling sad, your current state would be "sad". Now let's say you see a puppy and your state changes to "happy". Puppy was an action that changed your state, so your new state is now "happy". Now think of a class of students. All these students have their own "moods" or as we call them, states. Now, imagine your teacher had superpowers and could keep track of all of the "moods" (aka states) of all of the students in the class. React allows our code to have this superpower of keeping track of different states (or "moods") of objects almost instantenously.

   //Googled Answer

   *This is the best I could find online:*

   Normally components don’t have state and so are referred to as stateless. A component using state is known as stateful. Feel free to drop that little tidbit at parties and watch people edge away from you.

   So state is used so that a component can keep track of information in between any renders that it does. When you setState it updates the state object and then re-renders the component. This is super cool because that means React takes care of the hard work and is blazingly fast.


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


   //Your answer

   I think of props as the way information flows from one component to the other (or within the same component)

   State on the other hand is information about the component that will be sent/shared via props

   //Googled Answer

   Props are used to pass data from parent to child or by the component itself. They are immutable and thus will not be changed.

   State is used for mutable data, or data that will change. This is particularly useful for user input. Think search bars for example. The user will type in data and this will update what they see.


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

  I absolutely loved seeing how you can literally create something out of nothing (it's the closest thing I have ever done to alchemy). It really helped me visualize how components are linked together and also how the can impact on another. It became clear to me that components are like lego blocks.

  During the first part of the exercise I was on top of it; I followed and understood every thing we were doing. However, at one point I got lost in the code. I had my own idea of how the logic would be to determine the win or draw, but my partner's logic was different. We decided to go with his logic and it became a bit confusing to me since I was still stuck with the logic I had in mind.

  Nonetheless, my partners code works perfectly and it could even be scaled to larger board so I was glad to see our project work!

  I did realize that I needed more practice (on my own) with React so I will try to build a website as a side project with React soon.

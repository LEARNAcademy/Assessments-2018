### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 Dumb components are manipulated in the DOM
 Smart components are part of the state.

 //Googled Answer
 Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM
 Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart,
 they are the ones that keep track of state and care about how the app works.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated
after we add a package with yarn?


 //Your Answer
installs a package, updates the .js file

 //Googled Answer
installs package, and updates package.json file

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes {
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

          let recipes = this.state.recipes.map(function(recipes){
            return(
              <li key={recipes.name}>{recipes.name}</li>
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
button, date, image

 //Googled Answer
button, checkbox, color, date, datetime-local, email, file, hidden, image, month, number, password

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
 state is the current snapshot of the page as it exists in that moment. When something is updated on the page, the state is changed.
 It's kind of like a painting. It can look nice, but when the painter makes another brushstroke, the painting's inherent properties change

 //Googled Answer
The heart of every React component is its “state”, an object that determines how that component renders & behaves.
In other words, “state” is what allows you to create components that are dynamic and interactive.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
 Props are parts of components that should not be changed. They represent inherent "properties" of the component.
 State is the current, well, "state", of the web page. It represents the properties of components that are meant to be changed and updated
 //Googled Answer
 Props (short for properties) are a Component's configuration, its options if you may. They are received from above and immutable.
 State
  should be managed in your view-controller
  your top level component
  is mutable
  has worse performance
  should not be accessed from child components
  pass it down with props instead

#### 9. Write a paragraph or so about your experience with building tic-tac-toe.
#### Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you,
#### something about pair programming (if you paired), or the experience of building something in code from scratch.

Building tic tac toe was a very valuable experience for me. I learned no matter how far you get in a project, there's always
a chance you could get stuck and have to start over. It really made me realize the importance of understanding the language you're writing,
because if someone doesn't know what they're doing they can waste a lot of time going down the wrong path. Granted, neither of us knew we
were doing anything wrong, and only realized when we got to the very end that we had to redo a lot of our formatting. Thankfully it was
relatively easy to get things working, and we didn't have to rewrite as much as we thought.

On the bright side, though, I found that there is nothing more rewarding than being stuck on a project and finally getting it done.
When I saw everything working, looking nice, and ready to present, I was reminded of my first Java project, the countless hours I
spent banging my head against the wall trying to translate a string to DateTime format, then finding the difference between those times.
That feeling of accomplishment is why I decided to become a software developer in the first place. I can't wait until our next big project.

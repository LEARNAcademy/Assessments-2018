### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:


- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer Smart(impure) are components that manage state, Dumb(pure) are components that passed props.


 //Googled Answer
 Smart Component Characteristics
     Describe how things work
     Provide no DOM markup or styles
     Provide application data, do data fetching
     Call Flux actions
     Named Container by convention

 Dumb Component Characteristics
     Describe how things look
     Have no app dependencies
     Receive only props, providing data and callbacks
     Rarely have own state, when they do, it’s just UI state
     Named anything that’s a UI noun


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
Not sure.  I think Yarn is a manager of sorts?  so I think it's pulling in all the packages and files necessary to run React.

 //Googled Answer
yarn add saves a package not only to node_modules but also adds it to the list of dependencies in package.json.  (My note: ie, package.json will be the file that's always updated)

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes:
            name: 'Meatballs',
            name: 'Mac & Cheese'
        }
      }

      render() {

        return (

          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key="recipe.name">{recipe.name}</li>
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
radio
button
form

 //Googled Answer
Looks like Form was wrong?  How about:
radio
button
password

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
State is higher level status, like is the user logged in, or a given location.  It can be changed, but best practice is to refer to a modified state as needed (setState) instead of actually changing the state.

 //Googled Answer
 The state starts with a default value when a Component mounts and then suffers from mutations in time (mostly generated from user events). It's a serializable* representation of one point in time—a snapshot.

 A Component manages its own state internally, but—besides setting an initial state—has no business fiddling with the state of its children. You could say the state is private.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
Component state is managed internally.  Props are snapshots of state that are likely passed to other components.

 //Googled Answer
 props

 props (short for properties) are a Component's configuration, its options if you may. They are received from above and immutable as far as the Component receiving them is concerned.

 A Component cannot change its props, but it is responsible for putting together the props of its child Components.
 state

 The state starts with a default value when a Component mounts and then suffers from mutations in time (mostly generated from user events). It's a serializable* representation of one point in time—a snapshot.

 A Component manages its own state internally, but—besides setting an initial state—has no business fiddling with the state of its children. You could say the state is private.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Tic Tac Toe represented my least-effective group work experience to date.  Loved my Pig Latin group, but the Tic Tac Toe vibe was of a group that just wanted to figure things out alone (not effectively).  So I definitely learned another aspect of the challenge of working with people that have different styles and personalities.  I got the most out of it by following two different online tutorials and creating the game from scratch.  Ultimately I was at least able to understand how it worked, and that was satisfactory to me.  I think the biggest challenge in building a project of that scope (small in the scheme of things, but large compared to anything we've done) was actually wrapping my head around organizing it -- how the components should be separated; how the pieces of code should interact; how to decide what parts to create and test first, always aware of its place in the larger scheme.

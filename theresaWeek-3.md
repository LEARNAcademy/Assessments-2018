### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.

 //Your Answer
smart is the component where you store all the logic, the display is 'dumb' because it is just displaying it and has the code rerouted to it via import.

 //Googled Answer
Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM

Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

 //Your Answer
when we use yarn add we are starting a new react application.  the file that is always updated is package.json

 //Googled Answer
 In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

 This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.

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
        let recipes= this.state.recipes.map(function(recipe)){
            return(
              <li key={recipe.name}>{recipe.name}</li>
              <ul>
                <div>{recipes}</div>
              </ul>
            )
      }
    }
  }

    export default Recipes

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
 button, date, url

 //Googled Answer
 button
 color
 date
 datetime-local
 file
 hidden
 image
 month
 radio
 range
 reset
 search
 submit
 tel
 text	Default.
 time
 url
 week

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
state is an object that determines how the object behaves.  You can use setState to edit state so that it is not directly editing state.  

 //Googled Answer
 There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.
 In general, you should initialize state in the constructor, and then call setState when you want to change it.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.

 //Your Answer
props is the attributes inherited from the parent that you cannot edit.  state can be changed in setState and makes it so that the user can interact with your app.

 //Googled Answer
Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more familiar tag attributes.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

I felt really lost the entire time we were writing tic-tac-toe.  I felt like the code was mostly written by Alyssa and Jez.  After people started presenting I felt a little better like their code was written a lot by the instructors as well.  We didn't finish the code to let it decipher a winner, so I felt like I failed a little bit at the challenge.  I tried to finish over the weekend but was distracted and didn't get around to it.  As far as react goes, I understand it and how the components all hold different jobs to make the app run.  

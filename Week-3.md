### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)

(this is an evil lie!!!  its not simple!  no one alive without coding experience can use this!  but it is a VERY robust language.)

- React is a modern, efficient answer to complex UI applications
- React is a full stack framework for modern web applications

(I doubt this is true.  if it were a full stack framework, why would I need to learn ruby and rails?)
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer

dumb components:  all this type of component is responsible for is to display on the DOM.  Nothing more.  

smart components:  they keep track and worry about how the application works.  

 //Googled Answer

 Dumb Components
 Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on.

 The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage. They wouldn’t know how to change the data they are presenting if they were asked. Ignorance is bliss.

 A ‘hello world’ component can be thought of as the most basic dumb component. Or entire sections of a website such as a header or footer. The component can be written in one place and used several times throughout the app, just rendering it’s heart out, and each instance of that component will look the same. If you want to change the look, you only have one place to go. Easy.

 Smart Components
Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.

Using the container design pattern, the container components are separated from the presentational components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props.

from medium.com


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer

allows you to use another package by adding it to your dependancies.  I believe it updates the npm registry and the package.json

 //Googled Answer

 In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

 This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.

 Most packages will be installed from the npm registry and referred to by simply their package name. For example, yarn add react will install the react package from the npm registry.

 from yarnpkg.com


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

// need class Recipes extends Component

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

        return (


          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
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
numbers
radio button
checkbox

 //Googled Answer
password
submit button
reset button
radio
checkbox


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
react is all about hierarchies.  components are parts of applications.  react sets up a "parent" component that controls the flow of information.  It then sets up "child" components that perform actions, but need to go through the parent when it needs information from somewhere else.  Every component is passing information to the parent, and the parent decides what information to give to what child.

You have to think of components like a military organization.  The organization will have a headquarters section, and subordinate sections that conduct tasks.  Sometimes the subordinate section needs outside information to conduct its job to do so it must go to the headquarters section to get that information.  Most of the time, the subordinate section can conduct its job with the internal information it has.

a "state" is information that is internal to the subordinate (this child component now).  Contrast with a 'props' which is information that is external to the subordinate section, meaning it has to go to the headquarters section to get this information (think of parent/child relationship mentioned above.)

a "state" is internal to the component.  It is used internal by the component, if the component sends it anywhere, it will go to the parent.  If another component needs that information, it will use a "props."  There is another distinction in that "props" requires the parent to "pass-down" the information, meaning a set of instructions that identifies the component that will use the "props" (information).  This is essentially giving the child permission from the parent to access and use the "props" (information)

it is basically classifying information so that it is organized within a component and the parent/child relationship.

 //Googled Answer

A state in React Component is its own local state, the state cannot be accessed and modified outside the component and can only be used inside the component which is very similar to, you already guessed it a function own local scope. We can define variables inside the function which can only be used inside the function block scope. (from codeburst.io)

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
please see answer found in question 7.  I apologize!!!  I didn't see this question when I answered the previous question!

 //Googled Answer

State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component. Props, on the other hand, make components reusable by giving components the ability to receive data from the parent component in the form of props.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

First, before this project, I was completely lost with React.  I made significant leaps in my understanding.  I was able to understand a "state" vs a "props".  I learned about the parent/child relationship.  I learned how that information flows, and how the parent controls this flow.  Because I used CSS for the first time, I was able to see its use in React.  I learned the importance of spending a lot of time in the planning phase, we spent about 30% of our time in the beginning, to plan out our code.  After planning we spent another hour writing our pseudo code.  Both of these actions saved an enormous amount of time as when we wrote our code.  Because I was so lost with React, I decided that I need to pair up with the two best students in the class, so I can observe and learn.  This decision was what allowed me to progress as much as I did.

Finally, I hate those dam "equal" signs, missing parenthesis, and curly braces!!!!  they will haunt me for my entire life as a developer!  

### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

### React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) FALSE
- React is a modern, efficient answer to complex UI applications
### React is a full stack framework for modern web applications FALSE
- React is a flexible library that plays the role of V in an MVC framework


#### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 // Adrienne: Smart components hold the logic and methods of the page, while dumb components are used to display things on the page. It makes more sense to have a parent component that controls the dynamic parts and interactivity of the page, while letting the smaller components just work with display properties.

 // Google: Smart components: container; describe how things work; provide no DOM markup or styles; provide application data, Dumb components: presentational; describe how things look; receive props; rarely have state.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 // Adrienne: No idea. Maybe adding React packages?

 // Google:  It installs any packages that are necessary (dependencies).  A package is generally a folder with code and a package.json file that describes the contents.


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

    1. Class needs to extend Component
    2. Pretty sure let recipes should be inside the first return, but contain the second return.
    3. Recipes in this.state should be in an array

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 // Adrienne: button, email, search


 // Google: number, password, submit are also good ones.


#### 7. How would you explain state to a friend who doesn't know code?

 // Adrienne: The state holds the default properties of the main webpage. The server (I think) checks for changes to the state and then only updates the necessary components based on what has changed.

 // Google: State is an object that determines the behavior of a component.  It allows you to create components that are dynamic and interactive.


#### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 // Adrienne: The state exists in the main logic component, and props is a way to inherit the state's properties.  State is an object that belongs to the parent component, and props is used in child components, which is then filled by the parent.


 // Google: Props are passed in as arguments, and come from the parent component. A component's state keeps track of the information between renderings, which the component can create, update and use state itself.  State is created in the component and changeable; props contains info set by the parent component and should not be changed.


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

// I enjoyed working on a project that we were able to complete.  I don't really enjoy working with React, and honestly found it hard to follow at points.  I guess the concepts of React are easy for me to understand, but accessing all the components and working with this.state and this.props got rather confusing.  I learned that I'm terrible at explaining my code after I've completed a project.  I can understand what I'm doing as I go, but looking back on what I've done I find it hard to explain.  I liked working as a pair, especially in React (which I wasn't 100% on board with), and working with Alexa was helpful to get some concepts to stick with me more.  I also liked working multiple days on a project with someone I know I work well with.  It was pretty gratifying to go into a project feeling I had no idea how to accomplish it, and then to go onto creating a successful game.

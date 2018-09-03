### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
- Smart components are components that manage state and run a bit more logic. In contrast, dumb components are only responsible for displaying whatever data is passed to them. They do not make any decisions or judgments on the data.

 //Googled Answer
 - We make the distinction between them because we want to separate data decision making and data display into separate responsibilities in our program.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
 Yarn add is going to GitHub to fetch the package that we are requesting and installing it on our project. Every time we run yarn add, the package.json file is being updated with the latest package and dependencies that were added.


 //Googled Answer
 In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

 This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.

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

        return (
          <div>
            let recipes = this.state.recipes.map(function(recipe){
              return(
                <li key={recipe.name}>{recipe.name}</li>
              )
            })

            <ul>
              {this.state.recipes}
            </ul>
          </div>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
- number
- password
- submit

 //Googled Answer


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer

If we were to use your life as an example, your state refers to the conditions and circumstances you are currently in. At different points of your life, the state of your finances or relationships or education might be different. In REACT, props would be like the individual/specific snapshots of the state of your life (e.g. current education: bachelor's, current state of residence: CA)

 //Googled Answer


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.

 //Your Answer
State: An object that handles various attributes of the component. The state of certain attributes can be set to one thing, and can then be changed to another if certain conditions are met.

Props: Props are specific instances of the component's attributes that can be passed on as data to other components for use.

 //Googled Answer


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Working on Tic-Tac-Toe, I learned that you do end up taking roughly 3x the amount of time you originally estimated to work on your project. My group had a lot of ice-box items that we wanted to get to, but we ended up not really getting to many of those items as we were still working on basic functionality. One concept that really stood out was the need to have good separation of dumb and smart components. We were initially trying to do too much in our squares components, but in hindsight should've made our squares more of a pure display component and have the board do most of the decision-making since it is difficult to pass info from the child to the parent component. (We ended up spending a lot of time trying to work on this.) Another thing we were stuck on for a long time was this.setstate; we didn't know that this.setstate really only works by passing in simple values, not long operations. One other thing I learned is that it's pretty important to take time to appreciate our victories along the way, especially when working on a team. I led our mob through most of the project, and I made the mistake of going a little too fast. We would spend a long time struggling with one aspect of the project, finally break through, but then rush into the next challenge where we would be frustrated and stuck all over again. Even though our team had just made a big breakthrough, it wouldn't feel like it because we jumped right into another challenge. As a leader, it would've been better for me to try and foster a greater sense of achievement within my mob to keep the energy and motivation levels up.

### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

<!-- - React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) --> (FALSE - creates SPAs, but wasn't created for use by those with minimal code experience)
- React is a modern, efficient answer to complex UI applications (TRUE)
<!-- - React is a full stack framework for modern web applications --> (FALSE - it manages the front-end or "view")
- React is a flexible library that plays the role of V in an MVC framework (TRUE)


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer

 Smart/Logic components are generally the parent components where changes to state are made (referred to as "impure")
 Dumb/Display components are generally the children components and no changes to state are made (referred to as "pure") - only receive props

 //Googled Answer

 Also referred to as Container vs. Presentational components - container components are concerned with how things work (manage state and pass down props) and presentational components are concerned with how things look (only have a render method - no others)

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer

 Yarn is a package manager (like NPM); "yarn add" installs & saves packages; package.json file (in the root of the app) is updated with the dependencies (packages it pulls from, or depends on) and the scripts (command lines that can be run on it)

 //Googled Answer

 "yarn add" installs a package and any packages it depends on; in general, a package is simply a folder with code and a package.json file that describes the contents; installing any new packages to your project will update the dependencies in the package.json file

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

          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })

          return(
            <ul>
              {recipes}
            </ul>
          );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer

 submit, email, number

 //Googled Answer

 password, reset, radio, checkbox, button, color, date, datetime-local, month, range, search, tel, time, url, week

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer

 The state of a page is the content and what is displayed in that moment, however, it is dynamic and can be changed. The page serves as a template of sorts where different parts of the page can change individually - rotating in new data and displaying new things.

 //Googled Answer

 I found a good analogy online that explains how changing the value of just one variable (in this case, temperature) can result in a change of state for matter (water to ice, or water to vapor, etc.) We do the same thing with programs - define a set of properties that determine how our program will behave in any situation.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer

 State is a dynamic Javascript object scoped to the component; The state object keeps track of data relevant to that component

 State cannot be passed from a parent component to a child component - in order to do this we use props; Props are properties of the component and they cannot be changed (similar to passing in arguments when calling a component)

 //Googled Answer


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

I think the hardest part of building something in code, from scratch, is figuring out where to start. Even when we were told which program to build this in (I can only imagine that's even harder to figure out!), it took awhile to come up with a game plan. It also made me a little nervous that we'd spend a lot of time going down one path and we'd eventually find out that it didn't work for what we wanted. Fortunately, that didn't happen and tic-tac-toe was a very positive experience for me. My partner and I had a similar approach to problem solving and worked well together, so we ended up with a functional game in the end. However, looking back on it, I wasn't very confident in how it was organized on a higher level. I'm still not sure I completely understand when to break out into a new component, or how to properly use state and props. I did feel a lot better after going through a couple code reviews though - getting everything cleaned up and learning a couple new tricks! That was VERY helpful.   

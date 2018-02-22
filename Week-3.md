### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

// Your Answer

True
- React is a modern, efficient answer to complex UI applications
  - - React is moder, efficicient, and it is used primary to create User Interfaces that are reactive (see what i did there).
- React is a flexible library that plays the role of V in an MVC framework
  - - Yes, this.

False
- React is a full stack framework for modern web applications
  - - React is not a full stack framework, it is a library/plugin for javascript which allows you to write JSX for deployment on modern websites. It by no means replaces front or back end languages, but remains a powerful tool.
- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
  - - React was notoriously difficult, especially when it first came out. Paraphrased form Alyssa: "Even senior developers were having to dedicate a whole week to set up React properly on a new system."

  // Googled answer

  Yeah, pretty much. I mean it has gotten a lot easier to install react now that when it first came out but the question included the words "created to be", so i stand by my answer.

 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer

 Smart components display based on outside information such as user inputs, making them dynamic. Dump components display  always, and only change when acted upon from elsewhere. The difference is important because ??? looking for bugs comes to mind, it will generally be safe to look in dump components last when bug checking, while smart components are a more likely culprit since they often interact with other part of your program, while dumb components just sit there are look pretty ??? also the distinction allow designers to speak more clearly and succinctly about different elements of their program.

 //Googled Answer

 Dumb components don't have state, and usually only have a render method. Their primary job is presenting information to the DOM and then go away and be quiet until called upon. Smart components hold all state and logic for an application, they also often contain callback functions that are used to update state.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer

Yarn creates a development server for react applications that handles all of the logic for the webpage. It will update the config files for react in your project server? Perhaps the src file or the index...

 //Googled Answer

Ok so that was wrong. Yarn is a package manager...

From Yarn Team:
"In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.

Most packages will be installed from the npm registry and referred to by simply their package name. For example, yarn add react will install the react package from the npm registry."

So i guess I kinda has that whole thing backwards a little. Yarn is a management tool basically, and yarn add ... updates a project with whatever dependency you plug in.

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

        1. Recipes needs to inherit from Component
        2. this.state.recipes needs to be an array
        3. moved declaration of recipes method to outside or return of render but inside render()

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer

  1. Button
  2. check box
  3. drop down menu

 //Googled Answer

THERE ARE SOOO MANY - i mean i could have guessed that, but yeah:

button
checkbox
color
date
datetime-local
email
file
hidden
image
month
number
password
radio
range
reset
search
submit
tel
text
time
url
week

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer

State is the active information on a web page element. Adding things to and from state is like telling an element on your webpage what it knows about itself. And if that element has children, they know what is taught to them via 'props'.

 //Googled Answer

This is a pretty in depth metaphor involving star wars, so thats kinda fun. I couldn't find any other decent methaphors though that sum it up more succinctly.

https://medium.freecodecamp.org/react-props-state-explained-through-darth-vaders-hunt-for-the-rebels-8ee486576492

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.

 //Your Answer

State is the active memory of an element (an element that doesn't have state is called stateless.) State can and should be updated to reflect the needs of your site. Passing info to and from state is the best way to create a dynamic webpage (don't EVER touch the DOM).

When an element with state has a child, it can teach that child things through props. Props are immutable, so once they are passed to child, the child is stuck with them, though if they are passed a reffernce to the parents state, and the parent changes their state, the props the child has accesss too will change too since the child is looking at the parents state for that information.

 //Googled Answer

 Things i learned (or relearned):
  - Props have better performance
  - State has worse component
  - pass it down with props instead

  I am starting to get a little paranoids about setting props equal to a state attribute of the parent and then updating that atrribute, weather or not the child will see that update. I will need to look into that a little more.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

It was an amazing experience once it was over, though at the end of day two I was seriously concerned we wouldn't finish. Reflecting back on it a week later it's kinda scary how little i actively remember about react. I definitely was reminded about the value of sleeping on it and coming back to problems with a fresh brain. Pair programing was good, but I also had a good partner. Jack and I were at similar skill levels, and had compatible goals and aesthetics which made working with him a pleasure.

The biggest lesson I took away from the experience is that I sometimes need to let ideas go. If something is working for an hour I really need to drop it and try to come at from a different angle rather that beating down the same door for hours at a time. If nothing else works I can come back to it later.

Building code from scratch is amazing, but difficult. I definetely see the value of pair programming in keeping the team on track and not distracted.

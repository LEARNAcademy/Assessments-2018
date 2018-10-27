### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 Smart components are what handle how a component changes. The dumb component is the thing that shows how a component changes. Dividing the logic from the display allows reuse of components without having to necessarily having to worry about the logic being tied to it.


 //Googled Answer
 According to simpleprogrammer.com, "Dumb components are how your application presents HTML. They’re how your website looks. You feed them some data (via props) and they spit out that formatted data to the browser. They’re not very smart. They’re a one-trick pony. They do their job and go away."

 I like this explanation because it also points out the role of props when talking about components.

 The website also states, "Smart components, on the other hand, are what make your application work. Not only do smart components accept data (via props as well) like dumb components, they also monitor and capture any change in data that has been initiated by the end user."


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
 Yarn add will add whatever dependencies you need in your program. Moreover, it will add the json file that will record these dependencies.


 //Googled Answer
 I found the following on yarnpkg.com, "n general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project."



#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, { Component } from 'react';

class Recipes {
  constructor(props){
    super(props)
    this.state = {
      recipes:
        {name1: 'Meatballs'},
        {name2: 'Mac & Cheese'}

    }
  }

  render() {

    let recipes = this.state.recipes.map((recipe) => {
      return(
        <li key={recipe.name}>{recipe.name}</li>
      );

    return (
      <dvi>
        <ul>
          {recipes}
        </ul>
      </div>
    );
  }
}

export default Recipes;


#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
 checkbox
 radio
 button


 //Googled Answer
<input type="password">
<input type="submit">
<input type="reset">
<input type="radio">
<input type="checkbox">
<input type="button">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="month">
<input type="number">
<input type="range">
<input type="search">
<input type="tel">
<input type="time">
<input type="url">
<input type="week">

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
 State is another word for the status of the thing that is held by a certain component.


 //Googled Answer
 I found a pretty good explanation from reactenlightenment.com. The site states, "components... offer state, and it is used to store information about the component that can change over time. Typically the change comes as a result of user events or system events (i.e., as a response to user input, a server request or the passage of time)."


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
 I actually just saw this when I was looking up the last question on google.
 Props are properties that get passed to a component
 State is managed within the component
 both are plain JS objects


 //Googled Answer
 I got my answer from reactjs.org, so it's the same thing.


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

I was part of the "Hacker" opt-in group, so we were very unfamiliar with React when we started the tic-tac-toe project. We spent our first day just trying to wrap our heads around states, props, and JSX. It wasn't until we took a day off to work on the Piglatin project that we finally started to understand those key concepts. We worked on the project as a mob, which work out pretty well for the most part; however, I was the main driver throughout both the tic-tac-toe and piglatin projects. That wasn't exactly ideal for me, and I did notice that it made it slightly harder to focus on the logical side of things, but it did help solidify writing code in React much more quickly. Fortunately, the majority of our mob was competent and could explain their thoughts well. So, even though I was in a perpetual driver position, I was able to follow along with the rest of the group. One of the biggest take-aways was that planning things out made all the difference. Even though we tried to plan the tic-tac-toe project before coding, we didn't fully understand react enough to truly plan appropriately. So, having a bit more react knowledge helped us replan and re-approach the problem in a more efficient manner. If we could do it all over again, I would have liked a full day to learn React via lectures, self-paced study/challenges, and small group challenges prior to jumping into such a larger, more complicated project. 

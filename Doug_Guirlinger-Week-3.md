### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework



 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.

 //Your Answer

// Best guess based on the question language:
"Smart" components are components that can be affected by user input. "Dumb" components are those that are not affected by user input.

 //Googled Answer

I found a simple article explaining the differences between the two: https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43

There seems to be a general consensus that "smart" components are used to manage state, and "dumb" components are primarily used for display purposes, but smart components do not necessarily need to manage state to be smart.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?



 //Your Answer

I don't know.

 //Googled Answer

It installs packages into my dependencies. It updates. package.json and yarn.lock.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes:[
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
      return ( 
      <ul>{recipes}</ul>
    );
  }
}

export default App;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer

I don't know.

 //Googled Answer

Password, submit, and reset

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer

State is a value that a computer program stores and changes throughout the program's use. It can be changed by a different types of events such as user input.

 //Googled Answer

From thinkster.io: This might seem trivial, but please take a moment to consider this question: What’s the difference between water and ice?

That’s right — the temperature! Now, let's go one level deeper: what is “temperature”? The answer is that it’s a measurement of thermal energy — the key word for us being measurement, because that implies it is tracked with a known value (any number between absolute zero and absolute hot).

If you think about it, that’s kind of incredible. If you can change the value on a thermometer, that means you have the ability to put a piece of matter into a different state. With water, simply put it in your freezer (below 32F) and its state will change from liquid to a solid. If you put it on a hot stovetop (above 212F), its state will change from liquid to gas. All of this can be done just by changing one value: its temperature.

What if we could do the same thing with programs? What if we could define a set of properties that would determine how our program would behave in any situation, similarly to water’s relationship with temperature?

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer

State is used by a single component and can only be changed by the component to which it belongs. Props do not change, and can be accessed by components other than the components to which they belong.

 //Googled Answer

 State is similar to what I described. Props are different.
 Props are similar to functions. They are passed directly through the component. They must be constant and cannot change. They can be declared in a parent or directly to the component they are being used in.


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

The Tic Tac Toe project was an important learning experience. Building the app firmed up my knowledge of React's state, but I did not learn prop. The most valuable growth experiences related to manipulating JSX using state and methods. Instead of writing code and rendering it to a useable page throughout the building process, I had the brilliant idea of writing all the code logic before rendering it to the page. This resulted in a challenge in rendering. We were able to fix it with the help of Jez, but major refactoring is in order.

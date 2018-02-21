### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer
online. Once you're done writing your first answer, you can google the question
and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code
experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


#### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


//Your Answer

Smart components involve manipulation of data, whereas dumb components
do not modify any data and only displays it.


//Googled Answer

Dumb components are also called ‘presentational’ components because their only
responsibility is to present something to the DOM. Once that is done, the
component is done with it.

The components themselves only have a render() method (they don’t need any
others) and are often just JavaScript functions. They don’t have internal state
to manage.

Smart components (or container components) on the other hand have a different
responsibility. Because they have the burden of being smart, they are the ones
that keep track of state and care about how the app works.

Using the container design pattern, the container components are separated from
the presentational components and each handles their own side of things. The
container components do the heavy lifting and pass the data down to the
presentational components as props.

They are class-based components and have their own state defined in their
constructor() functions.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


//Your Answer
`Yarn  add` installs a Yarn package and updates `package.json` accordingly with
its name and version number.

//Googled Answer

In general, a package is simply a folder with code and a package.json file that
describes the contents. When you want to use another package, you first need
to add it to your dependencies. This means running yarn add [package-name] to
install it into your project.

This will also update your package.json and your yarn.lock so that other
developers working on the project will get the same dependencies as you when
they run yarn or yarn install.


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

```
import React, { Component } from 'react';

class Recipes extends Component{
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
    });

    return (
      <ul>
        {recipes}
      </ul>
    );
  }
}

export default Recipes;
```

* Made Recipes extend Component
* Turned this.state.recipes into an array
* Moved the recipes variable outside of the return statement


#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

//Your Answer

Email, checkbox, file

//Googled Answer

Button, checkbox, color, date, email, file, hidden, image, etc.


#### 7. How would you explain state to a friend who doesn't know code?

//Your Answer

State is a concept in programming that manages data values as they are changed.
It holds information that will be needed later on in the program. Keeping
all the data in state centralizes their location and makes it easier
to access later.

//Googled Answer

A computer program stores data in variables, which represent storage locations
in the computer's memory. The contents of these memory locations, at any given
point in the program's execution, is called the program's state.


#### 8. What is the difference between component state and props? Your answer should include a short explanation of both.

//Your Answer

A component is a piece of code that acts like a function and returns the
elements that we want to be displayed when the component is rendered. State is
stored inside the component in which it is defined. To share variables
between components, we pass them around as props.


//Googled Answer

Components are self-sustaining, independent micro-entities that describe a part
of your UI. An application's UI can be split up into smaller components where
each component has its own code, structure, and API.

React state is stored locally within a component. When it needs to be shared
with other components, it is passed down through props. In practice, this means
that the top-most component in your app needing access to a mutable value will
hold that value in its state. If it can be mutated by subcomponents, you must
pass a callback to handle the change into subcomponents.

If components were plain JavaScript functions, then props would be the function
input. Although the data in props is accessible to a component, React philosophy
is that props should be immutable and top-down. What this means is that a parent
component can pass on whatever data it wants to its children as props, but the
child component cannot modify its props.

State, on the other hand, is an object that is owned by the component where it
is declared. Its scope is limited to the current component. A component can
initialize its state and update it whenever necessary. The state of the parent
component usually ends up being props of the child component. When the state is
passed out of the current scope, we refer to it as a prop.


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Building Battleship was an interesting experience because it was my first time
using React. I think my past experience with Angular helped a lot in that
the concepts of state and components seemed much simpler in comparison. One of
the most important things I learned was that I'm a lot better at math than
I thought.

I had to write some pretty complicated methods using some pretty complicated
calculations (for me, anyway), and I was pleasantly surprised at my ability
to do so. It did require a couple hours of literally jotting down a ton
of mathematical equations until patterns started showing up, but it felt
awesome when the numbers started to click. As someone who has struggled with
numbers in the past and who didn't really feel that confident in my critical
thinking skills, it was very rewarding.

Another challenge I had to overcome was figuring out why I couldn't update
the CSS for a single cell. No matter what I did, the styling for my entire
grid would change, and it was frustrating. I thought maybe I could "cheat" and
use jQuery just to get the problem done and then ask about the right solution
in class. But apparently, React doesn't really let you use jQuery, so that
forced me to figure it out myself.

Since I've been learning to code for a couple years now, I didn't really
experience that thrill of building something from scratch. That novelty
just doesn't really exist for me anymore. But it was still pretty cool to play
with a new technology.

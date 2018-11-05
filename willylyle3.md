### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
  Dumb components are how things look and smart are more of how things work.

 //Googled Answer

 SMART COMPONENT CHARACTERISTICS
 Are concerned with how things work.
 May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
 Provide the data and behavior to presentational or other container components.
 Call Flux actions and provide these as callbacks to the presentational components.
 Are often stateful, as they tend to serve as data sources.
 Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.
 Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.


DUMB COMPONENT CHARACTERISTICS
Are concerned with how things look.
May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
Often allow containment via this.props.children.
Have no dependencies on the rest of the app, such as Flux actions or stores.
Don’t specify how the data is loaded or mutated.
Receive data and callbacks exclusively via props.
Rarely have their own state (when they do, it’s UI state rather than data).
Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.
Examples: Page, Sidebar, Story, UserInfo, List.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
 use it to install packages for react apps


 //Googled Answer
 With Yarn, engineers still have access to the npm registry, but can install packages more quickly and manage dependencies consistently across machines or in secure offline environments. Yarn enables engineers to move faster and with confidence when using shared code so they can focus on what matters — building new products and features.


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component{
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
button
color
image
search

 //Googled Answer
 button	Defines a clickable button (mostly used with a JavaScript to activate a script)
 checkbox	Defines a checkbox
 color	Defines a color picker
 date	Defines a date control (year, month, day (no time))
 datetime-local	Defines a date and time control (year, month, day, time (no timezone)
 email	Defines a field for an e-mail address
 file	Defines a file-select field and a "Browse" button (for file uploads)
 hidden	Defines a hidden input field
 image	Defines an image as the submit button
 month	Defines a month and year control (no timezone)
 number	Defines a field for entering a number
 password	Defines a password field
 radio	Defines a radio button
 range	Defines a range control (like a slider control)
 reset	Defines a reset button
 search	Defines a text field for entering a search string
 submit	Defines a submit button
 tel	Defines a field for entering a telephone number
 text	Default. Defines a single-line text field
 time	Defines a control for entering a time (no timezone)
 url	Defines a field for entering a URL
 week	Defines a week and year control (no timezone)

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
It allows you create components that can change over time. So it makes your program more dynamic. for example you could have a timer that updates every second to show onscreen time.

 //Googled Answer
State of an instance of a React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, State of a component is an object that holds some information that may change over the lifetime of the component. For example, let us think of the clock that we created in this article, we were calling the render() method every second explicitly, but React provides a better way to achieve the same result and that is by using State, storing the value of time as a member of the component’s state. We will look into this more elaborately later in the article.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
 State can change and props cannot. Props or properties can be passed down to children objects.


 //Googled Answer
 Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.
 States can only be used in Class Components while Props don’t have this limitation.
 While Props are set by the parent component, State is generally updated by event handlers. For example, let us consider the toggle the theme of the GeeksforGeeks {IDE} page. It can be implemented using State where the probable values of the State can be either light or dark and upon selection, the IDE changes its color.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
Building tic tac toe was a lot of fun. It was nice to put our code to work on something that had a finished product that was useable. It was a good childhood game that everyone had a concept of so that made it easier to tackle. Pair programming was nice for this because everyone in the group had a similar if not the exact same opinion on how the finished product should look(minus css). This can sometimes be a struggle for pair programming because different people inevitbly have different opinions on how things should be done and deciding which route to go down first is tough. This provided a good into into that due to everyone mainly being on the same page. I liked how react updates the page as soon as a change is done. This makes it so you don't get too far and then realize that you messed something up but now you don't know where it is. 

### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
Dumb components: It is a component that receives data typically via props and its sole responsibility would be to display or render that data to the browser or DOM.

Smart components: Typically handle or are responsible for handling state within a component. That data and info is typically passed own to the child or dumb component via props.

 //Googled Answer

 Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it.

 Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works. Using the container design pattern, the container components are separated from the presentational components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer

 Yarn add is adding any and all dependencies needed for the source code that you are utilizing.


 //Googled Answer
 In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

 This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes {
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
- button
- checkbox
- radio

 //Googled Answer
 The available types are as follows:

 button: A push button with no default behavior.
 checkbox: A check box allowing single values to be selected/deselected.
 color: HTML5 A control for specifying a color. A color picker's UI has no required features other than accepting simple colors as text (more info).
 date: HTML5 A control for entering a date (year, month, and day, with no time).
 datetime-local: HTML5 A control for entering a date and time, with no time zone.
 email: HTML5 A field for editing an e-mail address.
 file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
 hidden: A control that is not displayed but whose value is submitted to the server.
 image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels.
 month: HTML5 A control for entering a month and year, with no time zone.
 number: HTML5 A control for entering a number.
 password: A single-line text field whose value is obscured. Use the maxlength and minlength attributes to specify the maximum length of the value that can be entered.
 Note: Any forms involving sensitive information like passwords (e.g. login forms) should be served over HTTPS; Firefox now implements multiple mechanisms to warn against insecure login forms — see Insecure passwords. Other browsers are also implementing similar mechanisms.
 radio: A radio button, allowing a single value to be selected out of multiple choices.
 range: HTML5 A control for entering a number whose exact value is not important.
 reset: A button that resets the contents of the form to default values.
 search: HTML5 A single-line text field for entering search strings. Line-breaks are automatically removed from the input value.
 submit: A button that submits the form.
 tel: HTML5 A control for entering a telephone number.
 text: A single-line text field. Line-breaks are automatically removed from the input value.
 time: HTML5 A control for entering a time value with no time zone.
 url: HTML5 A field for entering a URL.
 week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone.


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
Think of your favorite social media app. Twitter for example has lots of interactive elements or buttons on the interface that you see as a user. If you see a tweet and you want to like that tweet you press the heart button. Next to that heart button there is a number next to it that shows the number of other people who also liked that same post. That little heart button is keeping track of the number of clicks or likes. In order to keep track of the number and display the multiple changes across all phones or devices the twitter site needs to be able to keep track of its current status or STATE. State keeps track of the status or state of information. It change and get updated, but in this case it changes everytime you like or unlike a twitter post.

 //Googled Answer
 In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state.
 Simply put, if you’d like your app to do anything – if you want interactivity, adding and deleting things, logging in and out – that will involve state.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer


 //Googled Answer
 Properties are passed from outside of component. Properties are considered immutable once they set in many application we want our application to update as visitor makes changes to our site.

 States: We can store data in components by something well know states. We can remove and update value of states, according to view changes.

 Lopez, Lionel. React: Quickstart Step-By-Step Guide To Learning React Javascript Library (React.js, Reactjs, Learning React JS, React Javascript, React Programming) (p. 86). Kindle Edition. 


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

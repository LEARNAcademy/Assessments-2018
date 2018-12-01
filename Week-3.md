### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework

 
 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
 //Your Answer
 Display components are ones that just have rendering (and maaaaaybe i/o) elements, smart components are the ones that actually run the js code. We make the distinction because best practice is to have all the logic on one level of the program. Which makes the code cleaner, and minimizes the necessity of using props to keep passing objects back and forth
 
 //Googled Answer
 The smart component should also be the one containing all the objects, for ease of access
 
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 
 
 //Your Answer
 Yarn add ... goes online and retrieves the specified package, installs it, and adds it to your project folder. The path is then updated inside the JSON file, so that the project knows which components it has available.
 
 //Googled Answer
 specifically, the file is package.json
 
#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component { //1. extends Component
      constructor(props){
        super(props)
        this.state = {
          recipes: 
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
      
        }
      }

      render() {
        let recipes = this.state.recipes.map((recipe)=> { //3. should be an arrow function?
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })
          //2. this needs to be outside of the return
        return (
          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)
 
 //Your Answer
 textbox (there's a difference, maybe?), radio, button?
 
 //Googled Answer
  According to w3 school they are: 
  button 	Defines a clickable button (mostly used with a JavaScript to activate a script)
  checkbox 	Defines a checkbox
  color 	Defines a color picker
  date 	Defines a date control (year, month, day (no time))
  datetime-local 	Defines a date and time control (year, month, day, time (no timezone)
  email 	Defines a field for an e-mail address
  file 	Defines a file-select field and a "Browse" button (for file uploads)
  hidden 	Defines a hidden input field
  image 	Defines an image as the submit button
  month 	Defines a month and year control (no timezone)
  number 	Defines a field for entering a number
  password 	Defines a password field
  radio 	Defines a radio button
  range 	Defines a range control (like a slider control)
  reset 	Defines a reset button
  search 	Defines a text field for entering a search string
  submit 	Defines a submit button
  tel 	Defines a field for entering a telephone number
  text 	Default. Defines a single-line text field
  time 	Defines a control for entering a time (no timezone)
  url 	Defines a field for entering a URL
  week 	Defines a week and year control (no timezone)
 
 
 #### 7. How would you explain state to a friend who doesn't know code?
 
 //Your Answer
 So if you have an object, you can have various attributes which are used to describe the properties that it has. Now imagine you have a bunch of objects, some of which can also be described using the same adjectives (though not neccesarily with the same values for them). State is the collection of attributes you're using to describe this particular object. 
 
 //Googled Answer
 State is scoped only to that particular component. You have to use props for other components to be able to see the values, and you should use setState to actually change them, otherwise react may act poorly
 
 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.
 //Your Answer
 State is what is used to describe the objects in this current scope, props are the state of the *other* object. You use props to pass values from the current object *to* the other one
 
 //Googled Answer
 props are only accessors, they can't do anything to effect the state of the other object
   
#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
It took way too long to realize how props work (they're basicallly just variables that you name when you pass, and then just use this.props.name to retrieve). Css is hard, though css grid might make it easier to lay out than flex box, if you know you have a set layout that you want. Figuring out the dimensions and padding is still mostly a matter of trial and (mostly) error though. React made it much easier to lay out though, compared to nesting html divs or what have you. I really need to figure out a way to procedurally generate the board arrays, instead of hard coding them, since it didn't really make the transition into 3d tic tac to that well. 
### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:


- React is a modern, efficient answer to complex UI applications

- React is a flexible library that plays the role of V in an MVC framework

 
 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
 
 
 //Your Answer
 Logic manages state. Display doesn't manage it's own state.
 
 //Googled Answer
 Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on.

The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage. They wouldn’t know how to change the data they are presenting if they were asked. Ignorance is bliss.


Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.

Using the container design pattern, the container components are separated from the presentational components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props.
 
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 
 
 //Your Answer
 ...thinking it has something to do with adding a package and guessing it updates the dependencies.
 
 //Googled Answer
 Automatically adds the specified package to the dependencies in the package.json and will also update the yarn.lock to reflect the change.
 
#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes {
      constructor(props){
        super()
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
              <li key={this.state.recipes.name}>{this.state.recipes.name}</li>
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
 date
 time
 telephone
 
 //Googled Answer
 color
 email
 range

 and loads more
 
 #### 7. How would you explain state to a friend who doesn't know code?
 
 //Your Answer
 State is the value for something that will be used as much as it's needed or wanted across different areas and can be changed whenever necessary.  It's like leaving the house wearing one pair of shoes but if it starts raining and you're wearing suede you can put on the rainboots in your car...as long as you've remembered to change into the rainboots, either way you're still wearing shoes.
 
 //Googled Answer
 
State stores information that can change over time.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.
 
 
 //Your Answer
 One is used to call information and the other is used to set information.  State stores information and can be accessed and changed.  Props is used to pull that information into other components.
 
 //Googled Answer

 Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more familiar tag attributes.

<MyChild name={this.state.childsName} />

The parent's state value of childsName becomes the child's this.props.name. From the child's perspective, the name prop is immutable. If it needs to be changed, the parent should just change its internal state:

this.setState({ childsName: 'New name' });

and React will propagate it to the child for you. A natural follow-on question is: what if the child needs to change its name prop? This is usually done through child events and parent callbacks. The child might expose an event called, for example, onNameChanged. The parent would then subscribe to the event by passing a callback handler.

<MyChild name={this.state.childsName} onNameChanged={this.handleName} />

The child would pass its requested new name as an argument to the event callback by calling, e.g., this.props.onNameChanged('New name'), and the parent would use the name in the event handler to update its state.
 
   
#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

It was fun and frustrating.  I'm still struggling with it.  There are things I know how to, or at least have been able to, do in JS that I cannot figure out how to translate into React...yet.  I worked through several tutorials and videos to be able to contribute something to the team and while I was able to work through them there are underlying concepts I still feel like I'm not grasping.  I'm just watching and coding along to a lot of begginer tutorials to hopefully get myself to a point where I feel really comfortable with implimenting my ideas in React.  I feel like I helped but I don't feel like I can really explain why things are working the way they are.  Not yet at least.  I'm stubborn though so that helps.  If I can understand the minimax algorithm in JS I can figure out a way to get that and an easy version to work in React.  
# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

A method in ruby is basically synonymous to a function in javascript. There are definitely some syntax differences in ruby.  In ruby you initialize a method with 'def' and end it with 'end', as opposed to javascript which uses curly brackets to signify the block of code to be run.  Also in ruby, parenthesis are on the whole optional, like when defining parameters and passing arguments.



#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
Inheritance is a very important aspect of Ruby.  It makes it easy to have a new class, a child class, that inherits certain properties, and more importantly, methods from the parent class.

[Googled Answer]
After reading an article on google, it seems that its important to really make sure that the child is a specialization of the parent element, a Tesla car should be a child of a Car element, but a boat should not be a child of a car, even though they may have certain properties in common, like a speed or an accelerate method.  


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
rspec is a testing software for ruby.  generally, you want to write your tests before you start writing any actual code.  this is important because it informs your coding process, you make sure that you are only coding for the certain objectives, or tests that you want to be passed.  it requires that you have a very strong idea of what exactly you want to have happen after you write your code.  It's also good to write the tests beforehand because its important to see that the tests fail before anything, so you know that any successful test is the result of your code.
//Googled Answer


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
I had trouble finding info on this one.  So, basically, it seems like any time one object isn't directly inheriting from another object but are somehow related they have a non inheritance relationship.  The example i saw was from pokemon.  A pokemon trainer 'has many' pokemon, but pokemon aren't a type of class 'Trainer'.  Similarly, pokemon 'belong to' a trainer, they also 'belong to' a type of pokemon, like, electric, or fire.  A third relationship is 'has many through', because pokemon belong to a type, a trainer 'has many types through' his/her varying pokemon.
//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

we call it string interpolation, this is also available in javascript but with different syntax.  it allows you to easily stringify variables or outputs of expressions in ruby and put them in a string without having to add spaces or that nonsense.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
I feel like its pretty boring.  But, I also feel like its important for professional reasons. I also feel like its helpful in guidng the code that you write.
//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
An instance variable is used in rails to allow you to send variables to the 'view' portion or a rails app.  the controller deals witht he logic of the ruby app, however, when displaying this information for the user, it must send it to the display portion in way in which the display can read it, thus we have instance variables.
//Googled Answer

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

Right now I've been using udemy for two different ruby tutorials, a basic ruby tutorial and a rails tutorial, the rails tutorial was super helpful in explaining routes and going a bit more in depth as to all the different files of the rails app, and how you can change these files to achieve the specific effect that you want.  the ruby udemy course helped me to understand the foundations of ruby.  

# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript? #
A method is a function that belongs to an object. Everything in ruby is an object so all functions are methods.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance. #

//Your Answer
A class inherits the methods from another class.

//Googled Answer
A fundamental aspect of object oriented programming, creates the superclass (parent) and the subclass (child).

#### 3. What is rspec and what is the general process for writing tests in RSpec? #

//Your Answer
Rspec is a ruby gem for testing your code. General process is linking a ruby file to the test file, creating a test that fails, then writing code that passes the test.

//Googled Answer
Rspec is a Domain Specific Language for Behavior Driven Development in Ruby.

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing? #

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
String interpolation, prints the value of the variable in place of the variable in the string that is being returned.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code? #

//Your Answer
Testing seems like a great way to protect your code and ensure any piece of code you write is functional. We ran into some trouble writing tests during our text-based game. It was difficult to figure out a tests and when we did write tests it vastly complicated the flow of our code.

//Googled Answer
Tests help the organizational flow of code, insure that your code includes the required criteria, and provides a safety net for refactoring.

#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable? #

//Your Answer
A regular, local variable can be assigned a particular value, but that value will stay the same unless the variable is specifically reassigned. An instance variable's exact value will change with each instance of an object.
Does an instance variable represent the key in an attribute?

//Googled Answer
An instance variable is available everywhere in an object's scope and does not need declaration.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby. #

The poignant guide is hilarious! The simple explanations are very helpful.
- When writing large numbers you can use an underscore in place of the commas
- @@ is a class variable
- revisited the difference between nil and undefined

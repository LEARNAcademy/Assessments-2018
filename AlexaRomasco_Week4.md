# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

A method is a set of code that performs a function which you want to be able to use multiple times or in different places throughout the program; Methods in Ruby and functions in JavaScript are similar, since they're both object-oriented languages; however, the Ruby syntax for methods is cleaner and requires fewer parentheses and other punctuations.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

[Your Answer]

Inheritance is a relationship between two classes where one is the parent (or "super") class and the other is a child (or subset) of the parent class - containing all the characteristics of the parent class along with more, specialized characteristics which distinguish it from other child classes.

[Googled Answer]

Classes can access and use their superclass' methods but instance variables from the superclass remain specific to that class only.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer

RSpec is a Ruby tester - a language library to write BDD (behaivor driven development) tests. The general process is:
  1. Write a failing test
  2. Write code to implement test requirement
  3. Verify implementation passes test

//Googled Answer


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer

1. has one / belongs to one
2. has many / belongs to one
3. has one / belongs to many

//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

String interpolation; This will insert the value of the variable x into the string, where the string interpolation occurs.
=> "I am printing a random number 1022"

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer

Testing feels tedious at the early stages, when you're testing very simple things, but I definitely see how it will be advantageous as a project grows and gets more complicated. One thing I struggled with was writing the test before I wrote the actual code. I was always inclined to write the code first, then the test to verify that my code worked like I wanted it to.

//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer

Local variables are scoped only to the method they're in; however, objects also have their own scope with instance variables, so that the variable can be used throughout all the methods of that class.

//Googled Answer

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

- ** = "to the power of" (e.g. 3**2 = 9)
- A module in Ruby groups similar methods together (e.g. Math for Math.floor, Math.sqrt, etc.)
- A default value can be assigned to a parameter that's passed in; therefore, if no parameter is passed in, the method will assume the default value for that variable
- You can use the .respond_to?(" ") to return a boolean value for an if/then statement (e.g. determining if something is a single value or array of values depending on which methods it will respond to)

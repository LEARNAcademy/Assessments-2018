Week 4 Assessment
Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

A method is where you hold logic to run inside of a class. It is similar to functions in JavaScript because that is also where most logic goes.

2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.
[Your Answer] - A class holds methods(logic). When inheriting from class to class, its inheriting those methods.

[Googled Answer] - Understanding Inheritance in Ruby. One of the fundamental aspects of Object-oriented programming is inheritance. Inheritance is where an object inherits from another object. This means it acquires the same properties and methods of it's parent.

3. What is rspec and what is the general process for writing tests in RSpec?
//Your Answer - rspec is a framework(?) that is meant for Test Driven Development. Writing the test first, then fulfilling that test with code.

//Googled Answer - RSpec is a 'Domain Specific Language' (DSL) testing tool written in Ruby to test Ruby code.[4] It is a behavior-driven development (BDD) framework which is extensively used in the production applications.
The basic idea behind this concept is that of Test Driven Development (TDD) where the tests are written first and the development is based on writing just enough code that will fulfill those tests followed by refactoring

4. Name three possible non-inheritance relationships between ruby objects?
//Your Answer - Methods can not inherit other methods, Intergers cant inherit strings, Strings cant inherit intergers.

//Googled Answer - ?? cant find an answer ??

5. What do we call the #{} convention used below? What is it accomplishing?
x = 1022
puts "I am printing a random number #{x}"

It is how you use string interpolation. It is using a defined var in a string.


6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?
//Your Answer - I dont hate testing. I see the benefits of BDD and its cons. It breaks down every line of code to be as detailed as possible.
It also takes very long, and see why companies would rather just trust that the code theyve written is good enough and can deal with anything
when the time comes.

7. What is an instance variable in Ruby? How is it different from a normal, local variable?
//Your Answer - Instance Variables can be called in different classes. it makes them accessible or global, compared to a local variable which
is only accessible in whatever class/function youre calling.

//Googled Answer -  An instance variable has a name beginning with @ , and its scope is confined to whatever object self refers to. Two different objects,
even if they belong to the same class, are allowed to have different values for their instance variables.

8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)
Choose one of these resources and go through the material (not for hours, only looking for around 10-20min of your time) then come back here and list a few new things you learned about Ruby.

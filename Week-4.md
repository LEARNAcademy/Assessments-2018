# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
It's something you can define and later on call it.... it's different from JS because it uses the @ symbol.

Ruby inheretance.. is when you would use something like this for example

Flowers < Tulips

Tulips are types of flowers.

[Googled Answer]
Ruby Inheritance. Inheritance is a relation between two classes. We know that all cats are mammals, and all mammals are animals. The benefit of inheritance is that classes lower down the hierarchy get the features of those higher up, but can also add specific features of their own.


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
rspec is tool that you can use to test ruby code. Some prefer writing code and then testing it, but the general process would be writing test first and making sure your code fails.. and then write your code for it to pass.

//Googled Answer
RSpec is a 'Domain Specific Language' testing tool written in Ruby to test Ruby code. It is a behavior-driven development framework which is extensively used in the production applications.

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
Not sure what the question means..

//Googled Answer
A class can only inherit from one class at a time (i.e. a class can inherit from a class that inherits from another class which inherits from another class, but a single class can not inherit from many classes at once).


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
string interpolation. it's printing it inside the string. the outcome will be "I am printing a random number 1022" since x = 1022.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
While doing the text-based game challenge and taxi challenge.. I preferred to test one code at a time. It's time consuming especially when you know for sure that your code will work.

//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
It looks something like this:
@name
and you define it in a class.

//Googled Answer
In object-oriented programming with classes, an instance variable is a variable defined in a class, for which each instantiated object of the class has a separate copy, or instance. An instance variable is similar to a class variable. An instance variable is a variable which is declared in a class but outside the constructor and the method/function. Instance variables are created when an object is instantiated, and are accessible to all the methods, the constructor and block in the class. Access modifiers can be given to the instance variable.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

It's easier to read than JS.
Commas aren't allowed in numbers, but underscores are. i.e. money_i_wish_i_had=100_000_000.

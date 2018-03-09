# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
A method is another name for a function, but it is treated as an object that returns a value

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
Inheritance can be described as a "has-a" or "is-a" relationship. The child class can 'inherit' the attributes from the
parent class, and can also override them if necessary

[Googled Answer]
Inheritance is when a class inherits behavior from another class. The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass. We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
rspec is the testing system for ruby projects. The purpose is to set a series of checks for your code where a value
must be returned in order for the check to pass. This is to make sure your code does what it needs to do

//Googled Answer
RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications. Even though it has a very rich and powerful DSL (domain-specific language), at its core it is a simple tool which you can start using rather quickly.

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
In-class scope, instance variables with methods, returns
//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

//The #{x} calls the x variable that was written in ruby. It translates from ruby to html

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
I love testing. It's like making an interactive outline for your project. It sets milestones and checkpoints for your code.
A con would be that it takes longer and inhibits improvisation.

//Googled Answer
I think it's that RSpec encodes some of the latest BDD into its way of
thinking.
It has a vocabulary that encourages that, so in a way, yes, it's all
about
semantics.
Semantics that encourage agile thinking & practice.
Also, it allows you to structure your specs (that become your regression
tests) in a much more intuitive way than Test::Unit -- I don't know
Shoulda.
But if I understood all the pros & cons of two systems & preferred
another,
I'd use that -- there's no gun against anyone's head. ;)
   Doug.

#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
An instance variable changes within the scope of the method that it is used. Each time a new method calls
an instance variable, it has the value of it's original definition.

A normal, local variable, when modified, stays that way. Once it is redefined, that is the ultimate value of that variable.

//Googled Answer
A normal variable has scope only within the current context; an instance variable has scope throughout one instance of a class. In your case they're confused because the context is main, which acts as an instance of Object.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

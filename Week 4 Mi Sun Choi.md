# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

Your Answer
Method in Ruby is similar to function in JS in the way they both have its own scope. In ruby, the last method declared with the same name as any other method before will override the previous methods. Also, ruby doesn't require curly brackets like JS but it is preferable to use them for clarity.

Googled Answer
A ruby method is wrapped in a a ‘def’/ ‘end’ block. A javascript function, however, can be declared multiple ways. In each way, the function takes in an optional argument between the ‘( )’ and the block of code to be executed is placed within the ‘{ }’. The ruby method and the javascript functions below all output the same thing.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
In ruby, a class can inherit the properties of a another class using the syntax "class child < class parent". This is useful when you want the child class to inherit the methods or properties of the parent class using super without having to type the whole thing again.

[Googled Answer]
In Ruby, a class can only inherit from a single other class. This use of inheritance is sometimes called differential programming. It is one of the benefits of object-oriented programming. Inheritance allows you to create a class that is a refinement or specialization of another class. Inheritance is indicated with <.
Inheritance means that classes inherit the external interface of the superclasses.


#### 3. What is rspec and what is the general process for writing tests in rspec?

//Your Answer
rspec is used write tests for the codes in ruby. It is ideal to write out the tests first before writing the actual code to run on ruby. This would help structuring and stabilizing the overall code to make sure the basic functions work before starting to work on more complicated ones that are more easier to break.


//Googled Answer
RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications. Even though it has a very rich and powerful DSL (domain-specific language), at its core it is a simple tool which you can start using rather quickly. Behavior-driven development is a concept built on top of TDD. The idea is to write tests as specifications of system behavior.


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
An instance variable within a class may not be inherited unless another class inherits the class with the instance variable.

//Googled Answer
Because instance variables are not defined by a class, they are unrelated to subclassing and the inheritance mechanism.


#### 5. What do we call the #{} convention used below? What is it accomplishing?

We call the #{} string interpolation and we use it to call a variable in a string.

x = 1022
puts "I am printing a random number #{x}"

This prints "I am printing a random number 1022" in the terminal, showing that the value of x replaced the #{x} in the string.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
Testing seems to be difficult right now because I'm just not used to it, but I see the benefits of it as I try to type it out for each method I create and make sure they are working before I move onto more complicated codes.

//Googled Answer
BDD forces you to take a step back and look at the application from the end user’s perspective. By writing a high-level list of specifications, you’ll provide a description of what your application actually does in simple terms that every member of your team can understand. You can use these specs to create living documentation that can be viewed by everyone working on the project. Also, both BDD and test-driven development (TDD) allow you to refactor code really well.


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
Instance variable in Ruby can be accessed outside of the class and it is useful when transferring information from the back-end to the front-end component.

//Googled Answer
A normal variable has scope only within the current context; an instance variable has scope throughout one instance of a class. The normal variable is called a local variable and is local to the code construct in which it was defined (if you define it in a method it cannot be accessed outside that method). An instance variable is local to a specific instance of an object. If one object changes the value of the instance variable, the change only occurs for that object.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

If we want to just list methods defined for a specific class we can tell it to not include ancestor classes by passing it the parameter false, meaning we don’t want methods defined by ancestors. Looks like this, where Greeter is the class name:
Greeter.instance_methods(false)
=> [:say_hi, :say_bye]

Use class.respond_to? to see which methods the class respond to:
greeter.respond_to?("name")
=> false
greeter.respond_to?("say_hi")
=> true
greeter.respond_to?("to_s")
=> true

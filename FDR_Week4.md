# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
A method is similar to a function but is put inside a class.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
 A class inherits from another class to share methods and variables. There can be a parent class and children classes.

[Googled Answer]
Inheritance is when a class inherits behavior from another class. The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass. We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
The general process for writing tests in RSpec is by writing the test first then gradually adding code after it passes.

//Googled Answer
RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications.

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
NA

//Googled Answer
Super, mixing in modules, private methods.

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
The #{} literal is the operator used for interpolation inside double-quoted strings the same way that the backticks or $() construct would be used in Bash.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
I enjoy testing and see it as a necessity to being more productive. Some advantages are that you will be motivate to stay more organized, and you will work step by step moving forward with your code vs finishing it then having to de bug it later on.

//Googled Answer
NA

#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
An instance variable allows you to share that variable in different methods and objects.

//Googled Answer
An instance variable has a name beginning with @ , and its scope is confined to whatever object self refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.
@names.each do |name|
  puts "Hello #{name}!"
end
@names is now getting iterated over and turned into a string!

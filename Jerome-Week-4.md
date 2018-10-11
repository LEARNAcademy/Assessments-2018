# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

My answer

  A method in Ruby includes different elements that can/will be used to render a website, for example, instance variables, functions, and what page to render. A function in Javascript does not render an HTML webpage. A JS function is meant to only perform a specific action(s)/instruction(s).

Googled Answer

  Methods and Functions are exactly the same thing. They are just two different ways to say a function (or method)


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]

  Class inheritance means that one class can take on the characteristics of another class - like a parent and child - the child inherits characteristics from the parent.

[Googled Answer]

  Inheritance is a relation between two classes. We know that all cats are mammals, and all mammals are animals. The benefit of inheritance is that classes lower down the hierarchy get the features of those higher up, but can also add specific features of their own.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer

  Rspec is a way to test your Ruby code. In Rspec you specify what you are testing and what it should do and then you run the test.

//Googled Answer

  RSpec is a 'Domain Specific Language' (DSL) testing tool written in Ruby to test Ruby code.[4] It is a behavior-driven development (BDD) framework which is extensively used in the production applications. The basic idea behind this concept is that of Test Driven Development (TDD) where the tests are written first and the development is based on writing just enough code that will fulfill those tests followed by refactoring.


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer

  is_a
  has_a
  has_many

//Googled Answer

  has_a
  has_many
  belongs_to


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

My Answer

  It is injecting Ruby and interpolating it into a string

Googles answer

  The #{} literal is the operator used for interpolation inside double-quoted strings the same way that the backticks or $() construct would be used in Bash. From a practical point of view, the expression inside the literal is evaluated, and then the entire #{} expression (including both the operator and the expression it contains) is replaced in situ with the result.


#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer

  I feel like I enjoy testing and I see plenty of benefits to testing code. The pros/advantages of testing are writing cleaner code that is easy to bug fix and read. Cons are it takes time (which is a big drawback when dealing with tight deadlines). Barriers are my lack of experience in coding to be able to write tests prior to coding.

//Googled Answer

  BBD keeps the focus on the end user and their needs. It’s easy for engineers to get bogged down in implementation details and architecture choices. They can lose sight of the fact that all those things ultimately have to serve the user of the software. BDD forces you to take a step back and look at the application from the end user’s perspective.

  Many companies are founded by engineers who had a cool idea and put something together. And a lot of times, extensive testing isn’t a part of that. There are conflicting schools of thought on the best way to implement testing, even within a single organization. And everyone is very passionate about their particular point of view.


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer

  Instance variables allow you to use a variable in the Controller and use it in the View (or render) of a page. A normal, local variable would only be able to use in that scope (not in the render/view)

//Googled Answer

  A local variable can be used only within the method in which it is defined (or, when the variable is defined at the top level, only outside of any method). An instance variable can be used from any method that is called on the same instance.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

-Ruby was born in Japan
-_FILE_ is interpreted as the whole .RB file
-Commas are not allowed in numbers, but underscores are (useful for making larger numbers more readable)
-Ruby does recognize negative numbers with a "-" at the beginning of the number
-Symbols are lightweight strings. Usually, symbols are used in situations where you need a string but you won’t be printing it to the screen.
 ex. :a, :b, or :ponce_de_leon are examples.
 -Global variables begin with a dollar sign $
 -@@ means attribute all
 -block arguments are established by using pipes |x,y|

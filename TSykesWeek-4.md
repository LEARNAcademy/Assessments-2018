# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
Like JS functions, a method is a chunk of code that when executed returns a value and can be used over and over.  Also, variables keep local scopes when made in the method. The syntax is different from JavaScript - you don't need curly braces or parentheses after the method name. Ruby methods uses def to start and end to end.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

In Ruby, everything is an object which means everything belongs to a class.  You can add qualities to the generic (parent) class that will be then passed to the smaller (child) groupings.  The child classes can have attributes that are specific to themselves.  The syntax is class Child < Parent.

[Googled Answer]
Inheritance is when a class inherits behavior from another class. The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass. We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass. This lets us keep logic in one place.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
Rspec is an auto-testing software for Ruby.  It allows you to tests code on what you expect it to do before you write the  actual production code. The first step is to create a separate rspec file that links to the Ruby file. Each block of testing code should test one behavior and should be written to test the smallest test case (unit) possible for that behavior. The process follows the RED GREEN REFACTOR protocol:  write the test first, make sure the test fails, then write the code that will pass the test (RED). Next, pass the test (GREEN), Then refactor your code.   

//Googled Answer
RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications.writing tests for some code we already have.  the process:  write the smallest possible test case that matches what we need to program. Run the test and watch it fail. This gets you into thinking how to write only the code that makes it pass.Write some code with the goal of making the test pass.Run your test suite. Repeat steps 3 and 4 until all tests pass.Go back and refactor your new code, making it as simple and clear as possible while keeping the test suite green.

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
belongs_to, has_a, has_many

//Googled Answer
 HAS-A relationship. This relationship is between two or more classes where the use of instance variables are references to other objects. In other words, when a class uses another object to provide some or all of its functionality.Composition aims at solving the pitfalls of inheritance through encapsualtion, de-coupling, and delegation. Instead of the tightly coupled objects sometimes created as a result inheritance, composition allows us to keep objects independent of each other, without fear of indirectly affecting dependent objects.

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
String interpolation. The content between the brackets is a placeholder for information that will be inserted into the string once the code is executed.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
 I enjoy the testing process, although I need a lot more practice using it.  I like it enough to see it as a potential career path. I think the biggest advantage to testing is that it provides the tools to write cleaner, less breakable code, and less code overall in your production file.  It is time-consuming, and in the early stages of learning testing, can prove to be quite frustrating. However, I think the value outweighs these negative aspects. Plus, it is extremely satisfying to see the test fail (weird, but true), and then see it pass.  

//Googled Answer
The testing workflow means taking time to think carefully about what exactly it is we need to build, and how. When we always start with the implementation, it is easy to lose focus, write unnecessary code, and get stuck.

#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
In ruby, you can't see something unless you make it visible.  An instance variable is assigned to every instance of a class. Each instance can have it's own name.  A local variable can be seen only in the method in which it's declared, while instance variables can be seen by all the methods in a class.

//Googled Answer
An instance variable has a name beginning with @, and its scope is confined to whatever object it refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables. From outside the object, instance variables cannot be altered or even observed (i.e., ruby's instance variables are never public) except by whatever methods are explicitly provided by the programmer. As with globals, instance variables have the nil value until they are initialized.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.
- in Ruby, you can open a class up again and modify it. The changes will be present in any new objects you create and even available in existing objects of that class.
-to just list methods defined for an object, tell it to not include ancestors by passing it the parameter (false)

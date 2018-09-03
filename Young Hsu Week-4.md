# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

A method is module of code that runs the same sort of function(s) again and again. It is similar to a function in JavaScript. However, one difference is that since Ruby is an object-oriented programming language, Ruby methods are usually connected to an object and represent some sort of action that object can take whereas functions in Javascript can be more standalone in nature.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
When a class inherits from another class, it has access to all the properties and methods that the parent class has. Ruby classes can only inherit from ONE parent at a time. Using super() allows the child to deliver arguments to the parent that also uses those arguments.

[Googled Answer]


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
Rspec is an automated test engine that allows you to write tests in ruby code. The general process for writing tests is to do the red-green-refactor method. You first write the tests for the functionality that you want to see. Since no actual code is written yet, all the tests will fail (red). Then, you write the code needed to pass the tests that you have written so that they all pass (green). Then, you move on to writing more tests for the next function that you want your program to have and refactor your code to meet those requirements.


//Googled Answer


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer

has_many, has_a, part_of

//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

This is used for string interpolation. The #{} will interpret everything that is inside it, and convert it into a string that can be outputted.



#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer

For some of the examples we did in class, it did seem like testing was pretty superfluous; however, I can see that for incredible large programs, testing is something that is critically important.

//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
An instance variable is a variable that is defined within a Ruby class. Every object that is instantiated by that class will have a individual instance of the instance variable.
//Googled Answer

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

- The name "Ruby" was chosen for Matsumoto's programming language because it is the birthstone of one of his colleagues.
- Ruby has something called "duck typing"; this means that the suitability of an object is determined by its methods and attributes rather than the object's type.

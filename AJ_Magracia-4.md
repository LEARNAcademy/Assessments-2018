# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
A method in Ruby is a function that belongs to a class. It is not much different except that it is defined with a def keyword rather than a function keyword.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
If a class inherits from another class, that means it automatically receives the attributes and methods the parent class has. So if there is a Ford class that inherits from a Car class, the Ford class has all the attributes and methods that the Car class has, as well as its own attributes/methods (and the Car class will not have these).

[Googled Answer]
"Inheritance is a relation between two classes. We know that all cats are mammals, and all mammals are animals. The benefit of inheritance is that classes lower down the hierarchy get the features of those higher up, but can also add specific features of their own. If all mammals breathe, then all cats breathe. In Ruby, a class can only inherit from a single other class. Some other languages support multiple inheritance, a feature that allows classes to inherit features from multiple classes, but Ruby doesn't support this."

"Object inheritance is where an object inherits the properties and methods of a parent object. This means the child object will automatically have those methods, without having to implement them.

When you invoke a method on an object, Ruby will first check the class to see if it has that particular method.

If the class does not have the method, Ruby will walk up the chain of ancestors to find an implementation of the method.

Ruby is a single inheritance language and so an object can only inherit from a single parent.

As we saw in Writing Ruby Classes, if you do not specify the parent of a class, the class will automatically extend from Object."

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
Rspec is a testing framework for Ruby. The general process for writing tests involves first describing a unit of code, and then testing example cases to see if what is expected actually occurs.

//Googled Answer
"RSpec is a 'Domain Specific Language' (DSL) testing tool written in Ruby to test Ruby code. It is a behavior-driven development (BDD) framework which is extensively used in the production applications. The basic idea behind this concept is that of Test Driven Development (TDD) where the tests are written first and the development is based on writing just enough code that will fulfill those tests followed by refactoring. It contains its own mocking framework that is fully integrated into the framework based upon JMock. The simplicity in the RSpec syntax makes it one of the popular testing tools for Ruby applications."

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
Has-a, Has-many, Belongs-to

//Googled Answer
has_many, belongs_to, has_and_belongs_to_many, has_one, has_many :through, has_one :through

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
The convention is called string interpolation. It allows one to insert variables or perform operations within a string without having to close and re-open the string.


#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
I like testing; the only thing I have trouble with is that I lack the domain knowledge to be as precise as I can be with my tests. I like the pros of being able to test my code by simply running a file of tests, rather than running my code with different values every time. It does slow down coding a bit, but I believe that to be simply because it takes a while to figure out how to write the tests since I'm not quite familiar with it yet.

//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
An instance variable is declared with an @ symbol. It is different from a normal variable in that it is available throughout the whole code file, rather than just in the scope it was declared.

//Googled Answer
A local variable that is defined inside one method, for example, cannot be accessed by another method. An instance variable is a variable that is accessible in any instance method in a particular instance of a class.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poignant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

attr_accessor :name enables the use of .name and .name=

You can use respond_to? on ruby-defined methods!
def say_hi
   if @names.nil?
     puts "..."
   elsif @names.respond_to?("each")
     # @names is a list of some kind, iterate!
     @names.each do |name|
       puts "Hello #{name}!"
     end
   else
     puts "Hello #{@names}!"
   end
 end

The "method of not caring about the actual type of a variable, just relying on what methods it supports is known as “Duck Typing”, as in “if it walks like a duck and quacks like a duck…”. The benefit of this is that it doesn’t unnecessarily restrict the types of variables that are supported."

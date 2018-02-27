Week 4 Assessment
Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
Everything in ruby is an object so methods are objects in addition to providing traditional function functionality.
I would say that methods are really no different functions and google confirmed that for me.

2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.
[Your Answer]
Inheritance is written with the following syntax.... Class y < x
where y is inherits from x.  In this case y is a child of x and carries all the properties and methods that x has including the ones specified for only y.


[Googled Answer]

3. What is rspec and what is the general process for writing tests in RSpec?
//Your Answer
rspec is a ruby gem and provides a syntax for writing tests in ruby scripts.  for writing scripts you want to follow Behavior Driven Development process,
using user stories to first write tests, then have those tests fail, then writing the code that fulfills that test.
//Googled Answer

4. Name three possible non-inheritance relationships between ruby objects?
//Your Answer
has many
has one
belongs to


//Googled Answer

5. What do we call the #{} convention used below? What is it accomplishing?
x = 1022
puts "I am printing a random number #{x}"
string interpolation, it is inserting the value of the variable as a string in the output message.
6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?
//Your Answer
I like the style of testing... it slows down/provides a more logical flow for my development process.
The barrier is just syntax and practice.
//Googled Answer

7. What is an instance variable in Ruby? How is it different from a normal, local variable?
//Your Answer
instance variables are defined within objects using the @sign.  The @sign enables variables from methods and properties within the object to be available to the whole object.
//Googled Answer

8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)
Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

Obj.instance_methods can be used to access all of the available methods on an object.
Greeter.instance_methods(false) is reduced to the ones that we specifically defined.

__FILE__ is used in irb to reference the current file.
$0 is used in irb to name the starting file of the program.

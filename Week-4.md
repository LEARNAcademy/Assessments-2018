# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

[Your Answer]
Methods in Ruby are for the most part the same as functions in JS. They are declared using a different syntax, but just like JS they can be global or located within Classes.

[Googled Answer]
In Ruby, all functions are called methods. In JavaScript, all functions are functions but methods are only functions within objects/classes.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
When a class inherits from another class, it has access to the methods of the parent class by default, and can have access to the attributes if they are passed down using the super keyword.

[Googled Answer]
Only additional note -- classes can only inherit from one class at a time.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
Rspec is the format used for writing formal tests in Ruby. Test Driven Development entails first writing a test that fails. Figure out what you want a particular class or method to do, test for it first and ensure the test fails. Then, write the minimum amount of code that makes the test pass. Finally, refactor your code to be more readable and elegant and make sure the tests still pass.

//Googled Answer
RSpec is a 'Domain Specific Language' testing tool written in Ruby to test Ruby code. It is a behavior-driven development framework which is extensively used in the production applications. --Wikipedia

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
Has-a, has-many, belongs-to. For example, in terms of the Taxi Service project. A Taxi belongs-to a TaxiService. A Taxi has-a TaxiService. A TaxiService has-many Taxis.

//Googled Answer
Add "is-a"

#### 5. What do we call the #{} convention used below? What is it accomplishing?

String interpolation. Same like JS, it allows programmers to inject variables and/or bits of logic into strings to allow for dynamic printing.
```ruby
x = 1022
puts "I am printing a random number #{x}"
```

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
I like testing. At this point it seems a bit silly, as the programs we write are on such a small scale, it's easy to test them using the terminal or expected output. However, the thought process of writing a test before writing the code helps solidify what I am expecting a certain code block to output in no uncertain terms. This process is a different way of approaching coding that seems like it will be far more useful when it comes to larger scale projects.

//Googled Answer
Pro- helps keep the end user in mind
Con- requires a time investment

#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
An instance variable declared within a class is available to all methods in the class; normal local variables are only available to the method in which they are declared.

//Googled Answer
Class variables are shared by all "class instances" (i.e. subclasses), whereas class instance variables are specific to only that class. --Stack Overflow

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

https://ruby-doc.org/core-2.2.0/Proc.html
I learned about Proc, which is a tool that can be used to save a method with some specific arguments already bound to it. One would first declare the function generally:

>def gen_times(factor)
>  return Proc.new {|n| n*factor }
>end

Next, you can declare a more specific function, which basically is assigning that broader function a static factor.

>times5 = gen_times(5)

Now, even though times5 doesn't appear to take any arguments, we still want to pass it some value to take the place of 'n' in the gen_times factor. We use the built in .call() method on the times5 method, which passes that argument to the Proc.

>times5.call(5) # => returns 25

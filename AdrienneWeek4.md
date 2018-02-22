# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

// Adrienne: A method is a function that runs inside a class of objects.

// Google: A set of expressions that returns a value. Similar to functions.


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

// Adrienne: A parent class has attributes and methods, and a child class that inherits from the parent will be able to inherit those methods and attributes.

// Google: Classes lower in the hierarchy get the features of those higher up, while having their own features.


#### 3. What is rspec and what is the general process for writing tests in RSpec?

// Adrienne: Rspec is a way to test Ruby code.  My understanding is that you should write your test first, ensure that it fails, then write your code and get it to pass.

// Google: RSpec is a testing tool for Ruby, created for BDD. Process: determine behavior, create describe and it blocks to assert how it should behave, run tests to make sure they fail, implement software to make tests pass, add more expects and repeat until complete.


#### 4. Name three possible non-inheritance relationships between ruby objects?

// Adrienne: Has one, has many, both have many.

// Google: I think that's right based on what Google told me.


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

// Adrienne: String interpolation. Allows you to put a variable directly into a string and have it print the value. Handy.

// Google: It performs expression substitution inside a string literal. Lets you put Ruby code within a string.


#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

// Adrienne: I feel pretty comfortable with testing, but don't really enjoy it. Pros would be that it's easier to see where your code isn't working, and can help you better understand exactly what your code should be doing; cons would be extra time involved in writing your programs.

// Google: I don't think google has much to say about my feelings for BDD.


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

// Adrienne: An instance variable is denoted with an @ symbol, and it makes the variable available outside its local scope.  It differs from local variables because it can be used outside a function it is declared in.

// Google: Instance variables live in, and are visible everywhere in the object's scope. An object keeps track of its instance variables as long as the object exists.


#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

// You can use a method on a variable in #{}s: #{name.capitalize}. Cool.
// The coolness that is case & when. Bypass all those equal signs in those ifs.
// Class methods can also be called with a double colon instead of a period

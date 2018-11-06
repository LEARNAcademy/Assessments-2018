# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

[Your Answer]
A method is Ruby is essentially the same thing as a method in JavaScript; however, since everything is Ruby is an object, ruby has methods rather than functions. That is, instantiated objects call the methods associated with their, or their ancestor's, methods.

[Google Answer]
There were some variations I found from different websites, but they said the same thing I said... more or less.


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
Inheritance is what you set up when you want to have one class inherit the attributes and methods of some other class. This would follow the "is a" and "has a" relationships between classes.


[Googled Answer]
One key things I found on google was that a class can only inherit from a single other class. A nice quote from rubylearning.com states, "The benefit of inheritance is that classes lower down the hierarchy get the features of those higher up, but can also add specific features of their own." That sentence basically sums the whole thing up... at least I think so.


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
Rspec is a testing library that is used for writing test files for ruby code. Rspec is written in ruby, but it has specific keywords and formatting for test files.

You typically do this by describing some sort of expected output from a method call.

//Googled Answer
The following link is a great resource for an introduction to rspec, https://blog.teamtreehouse.com/an-introduction-to-rspec

I found the idioms section pretty useful to understand how to think in rspec.


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
The non-inheritance relationships I cant think of are the one-to-one, one-to-many, and many-to-one.

//Googled Answer
I found an interesting site that talks about UML diagramming. No, it's not specific to Ruby, but I believe all of these relationships can be demonstrated in ruby in one way or another. It shows the following:

1. association
2. directed association
3. reflexive association
4. multiplicity
5. aggregation
6. composition
7. inheritance
8. realization

I think the three that were needed for this question are association, direct association, and multiplicy... an maybe aggregation.

ref. https://creately.com/blog/diagrams/class-diagram-relationships/

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
This is string interpolation. It's essentially using the variable in the string. That way, the needed value isn't hard coded into the string.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
Testing is pretty difficult when trying to test for edge cases or things that are not entirely obvious. Having a solid understanding of the problem, requirements, program, etc. help ensure that testing can be relatively thoroughly. That is, using TDD can help with understanding things thoroughly before the actually code is written.

//Googled Answer
We didn't talk much (or at all) about BDD; however, my understanding of BDD is that it should be used in conjunction with TDD. Essentially, it is used as a way to test the behavior of a function (duh?), not necessarily its output. A classic example that was used in my Software Engineering course was testing a counter method. You could test a method to see if it returns a specific number after it runs, but hat would mean that it would always have to start with the same input number. Instead, BDD is used to test that the counter increased whatever input by some incremental number (could be 1, 2, 3, etc.). I can see myself struggling with this because it would mean I would have to have a deeper understanding of the problem, know how to write the test, and take the time to actaully think all that stuff out.

#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
An instance variable can be used anywhere an class instance (an object of a class), is used. This is different from a local variable because local variables are generally tied to a specific method or class.

//Googled Answer
I found more or less the same stuff from google.

ruby-for-beginner.ruby had a good walkthrough.

ref: http://ruby-for-beginners.rubymonstas.org/writing_classes/instance_variables.html

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

[Your Answer]
I learned there are many, many cross-platform tools that can be used with ruby (mostly text editors).

I really liked the following statement from poignant, "Ruby will teach you to express your ideas through a computer. You will be writing stories for a machine."

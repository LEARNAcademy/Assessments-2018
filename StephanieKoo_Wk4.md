# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
A method is an object in Ruby. It is similar to functions in JavaScript in that it performs but different in that Ruby is consisted of classes.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

[Your Answer]
Ruby inheritance is the ability to grab all the attributes and objects in another class. A class can take inherit another's objects and attributes from another class.

[Googled Answer]
Inheritance is when a class inherits behavior from another class. The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass. We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass.


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
RSpec is a Ruby testing tool, specifically for BDD. General process for writing tests in RSpec is first knowing what we are testing and what kind of data type it will result in, like String, integer, boolean etc.

//Googled Answer
RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications.

General process for writing test:
1.Write the smallest possible test case that matches what we need to program.
2.Run the test and watch it fail. This gets you into thinking how to write only the code that makes it pass.
3.Write some code with the goal of making the test pass.
4.Run your test suite. Repeat steps 3 and 4 until all tests pass.
5.Go back and refactor your new code, making it as simple and clear as possible while keeping the test suite green.

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
The three possible non-inheritance relationships between ruby object are
1. An object has many objects
2. An object belongs to objects
3. An object has one object

//Googled Answer
1. belongs_to
2. has_one
3. has_many
4. has_many :through
5. has_one :through
6. has_and_belongs_to_many


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

//#{} is called String Interpolation and the x which equals to 1022 will be printed in the string "I am printing a random number 1022"

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
I feel okay in regards to testing. I can see that BDD is helpful for when I am implementing my code as my code will be more accurate and credible. However, I do see that it will take more time and definitely more thinking is required to build and test. I know that I have to practice building and testing at the same time which will require more work to be done.

//Googled Answer
1. Strong collaboration. With BDD, all the involved parties have a strong understanding of the project and they can all have a role in communication and actually have constructive discussions. BDD increases and improves collaboration. It enables everyone involved in the project to easily engage with the product development cycle. And by using plain language, all are able to write behavior scenarios.
2. High visibility. By using a language understood by all, everyone gets strong visibility into the project’s progression.
3. The software design follows business value. In fact, BDD puts great importance on the business value and needs. By setting priorities with the client, based on the value it provides, developers are able to provide a better result because they have a strong understanding of how the client thinks. By focusing on the value, no useless features are built.
4. The ubiquitous language. As mentioned earlier, the ubiquitous language is understandable by all the members of the team, which reduces misconceptions and misunderstanding and makes it easier for new members to join the working process.
5. Software development meets user need. By focusing on the business’s needs, you get satisfied users, and that implies a happy business, of course. With BDD, as its name says, you focus on the behavior, which has a stronger impact than the implementation itself.
6. More confidence from the developers' side. Teams using BDD are in general much more confident that they won’t break the code, and have better predictability when it comes to their work.
7. Lower costs. By improving the quality of the code, you are basically reducing costs of maintenance and minimizing the project’s risks.


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
Instance variable can be used throughout different classes globally in Ruby. It is different from a normal local variable because local variable cannot be used outside of the local scope, but instance variable can be used outside of the local scope.

//Googled Answer
An instance variable has a name beginning with @ , and its scope is confined to whatever object self refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables.


#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

1. to_a converts values to arrays.
2. After I code a method in Ruby, I should "Read the following code aloud to yourself" to see if it makes sense.
3. Symbols are lightweight strings. Usually, symbols are used in situations where you need a string but you won’t be printing it to the screen.
4. Like the methods described above (also called instance methods), class methods are usually attached after variables and constants. Rather than a dot, a double colon is used.
5. Variables which begin with a dollar sign are global.

# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
A method is a block that (optionally can take in inputs and) process some sort of logic, and maybe return a value from that logic. As far as I can tell it's basically the same thing as functions in other languages, insofar that depending on how it's called, it can be called by itself, or as a modifier on some other object

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance. 
[Your Answer]
Inheritance makes it so that a class has all the instance variable methods and methods from the class it's inheriting. You can then redifine them to override the existing methods, or use Super to change the specified values
[Googled Answer]
You can only inherit from a single class. However, you can nest them by having the class it's inheriting from be inheriting from yet another class itself

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
rspec is a tool used to test a ruby program. You define a class or method, and then use it "description" do/ expect (value) or {execution} to be a specified value or behavior. Generally you want to use an {execution} test to make sure something works, and then have your (values) to do behavioral tests, making sure it's outputting what you expected.
//Googled Answer
You can use before to set up an object which is avaiable in all the later tests
if you're operating directly on the object (as opposed to a variable inside it), you can make a direct operator using something like it {is_expected.to test}
some best practices: only test one thing per test
Edge cases are the most important thing to test
but don't forget to test invalid cases to catch unexpected results 

#### 4. Name three possible non-inheritance relationships between ruby objects? 

//Your Answer
has some, has many, has a
//Googled Answer
belongs_to. TBH, my googling is having trouble finding the terms we used in class

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

#{} is used for string interpolation, where you insert the contents of the {} into the string. For example, that will print "I am printing a random number 1022" You have to use "" for the string, instead of '', if you want to string interpolate. 

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
While I do like the idea of testing, especially with regards to trying to find edge cases that break the program, I'm less sold on the paradigm which dicates you write all your tests before you even open your code. While you naturally would have some idea about the I/O for any given function, it seems backwards to have to have it set in stone before you go about implimenting it. Especially when Ruby can be rather particular about the syntax and format of some of it's data. It's probably just a matter of scale, since like was said earlier, the main advatage comes when verifying the functionality of some code that you aren't intimately famliar, and making sure it still behaves properly after changes are made. I'm just not sure that the test-first paradigm is worth the extra effort, compared to testing after you already know how your code is going to behave. I guess most of my prior background was from before TDD had it's major push, and in adition was matlab and hardware description langues, which obviously come from engineering style education, where the testing was analogous to just going in and attaching probes at each stage of the process to track down where, exactly, the abberant behavior was coming from. 

Also, maybe I'm just not searching in the right docs, but it really seems like a pain in the ass to test the value for classes inside other classes. Or worse yet, an instance variable that has an array of class objects
//Googled Answer
I'm not sure what the googled answer is supposed to be for this kind of question, which is just about our feelings?

#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
An instance variable are the ones that are declared using an @. Which, unlike normal variables, are accessible to the other methods and processes inside the class. They stick around with the object, whereas scoped variables disapear when the scope is closed
//Googled Answer
They're similar, but distinct from class variables, in that each instance of a class has it's own instance variable (which seems obvious when said out loud), whereas class variables are the same. in other languages (not sure with ruby), class variables are declared static. Ruby uses @@ for class variables, but it's not recommended yo use them

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

You can use respond_to to see if something can use a method
You can use ctrl-D to quit IRB
you can use respond_to and duck casing to have some code resilliance in the case that a new class is applicable, e.g. using respond_to("join") instead of .class==array
if ___FILE__ ==$0 to execute the file if it's standalone, but do nothing if it's being imported into another file
you can use $ for global variables
class variables (see previous question)
{} is equivalent to do/end
use dots for ranges .. for inclusive, ... to exclude the last value 
you can use [] to retrieve a key from a hash
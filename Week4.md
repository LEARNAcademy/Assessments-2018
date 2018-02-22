# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

// Your Answer

My first instinct was to say that in ruby everything is an object so methods in ruby all work on objects, but you can still make a ruby method that just works on the assignment so that wouldn't be modifying an object. I guess I haven't seen any anonymous methods in ruby so that's a big difference. It definitely seems like methods in ruby are a little more static that those in javascript, by which i mean ruby methods are all:

def methods
 #code
end

while in JS they can be anonymous functions assigned to variables, they can be functions inside of for each loops, they can be named functions, or big arrow functions.

//Googled Answer

Gosh darn it, it was a trick question. They're "exactly the same" according to several sites i've looked at.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


// Your Answer

A class inherits the attributes and methods from a parent class. Just like inheritance in JS. This is used to create variations on a parent class. To use a game-based example, if you were to have an "adventurer" class, with a base set of statistics and skills, you could then create "paladin" "rogue" and "wizard" as extensions of that class without having to copy all of their similar attributes and methods three times. The term super is used for inheritance just like in JS.

//Googled Answer

Pretty much what I said, though i did get confirmation that ruby only supports inheriting form a single class, which I had just assumed. But apparently there are languages that support multiple inheritance, but ruby just isn't one of them.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer

RSPEC is a testing method for ruby programs. In general you will create your rspec file at the same time as your main program file and write your tests as you write your code. If you work for an employer with resources you may even have a dedicated QA staffer who writes the tests along side the developer. BY testing as you go you can make better isolate where problems in your code are arising from, because each test will check a specific class or method.

=========================
require 'rspec'                         ##these are the relations to other files
require 'code_to_test.rb'               ##all files tested need to be present

describe Test do

 #optional hook                         ## assuming you need to reate mutliple
                                        ## classes to test, a hook will do this for  
                                        ## you so you don't have to do it before each test

 it "Is a test" do                      ## this describes what the test does so that in your error codes you know where the error is coming from
  expect(Class)to_not raise_errors      ## expect (what your testing) to / to not - option conditional like eq -
 end                                    ## what your looking for could be a value to rspec method like raise_errors

end

//Googled Answer

I was close but not exactly correct, my it "Is a test" should have been wrapped in another describe, especially if i'm using a hook.


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer

Methods

//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
// My answer

'String interpolation'. It is actually printing the value of x in a string. This allows us to include variables in strings.

// Googled

nope, i'm wrong wrong WRONG - it's called string literal and the function it's performing is called an expression substitution - though I described what it does correctly.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer

It feels extremely useful yet bulky. Since you have to take time to make sure your tests actually work and then make sure your code works using your tests, you're increasing the time it takes to write. I think with practice it will feel much more natural and tests will feel like they write themselves, but right now it feels kinda daunting. Almost like the i'm going to double my writing time but only maybe reduce my error hunting time.

Behavior driven development still seems like a tremendously useful framework for developing code. It seems especially useful for narrowing down where problems arise in your code. Especially if you have many classes or methods that interact with each other, and you add a new method into that web, it may affect some or many of your already tested code. That means that a previously written test will come up as red and point you towards where your new method may have had unforseen consequences.

While we were testing for relatively simple things, I suspect that at higher levels of development, it's not just writing a test, but figuring out WHAT about your classes/methods to test.


//Googled Answer

Pro i hadn't considered: Writing clear english language test names serves as an amazing first first draft at documentation, and can serve as a great refferrence point for everyone on your team to know what the code is actually doing, even if they are not primarily developers.

You also need to make sure your team refactors their tests while they refactor their code. If you write your tests when you create a project, but never update them they can become outdated.

#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer

Instance variable stands in for a class attribute using the @ symbol in the initializer of a class.

class Example
  def initialize
    @instance_variable = true

  def example_method
    @instance_variable
  end
end

The above class has an attribute of instance_variable which is set to true, and the method example_method will call that attribute using the instance variable. (attr_accessor & attr_reader would do the same thing as the method)

//Googled Answer

I did not realize (or more likely had forgotten) that instance variables do not need need to be be declared in an initializer. So:

class Example
  def set_variable
    @instance_variable = true
  end
end

Example now has the attribute @instance_variable, though it cannot be accessed without a specific method to return it or an attr_accessor.


#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

I chose Why's guide, and while I didn't necessarily learn anything I was wonderfully entertained, and found several great metaphors for ruby concepts.

# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?


[Your Answer]

def hi
    puts 'Hello, world!'
end

The above is a method in Ruby, it is not declared with the => or the word function but with 'def' and it is closed with 'end'.  A method in Ruby does not require quotes, paranthesis, or curly brackets but paranthesis can be used if the programmer wants to use them for passing arguments.  Methods in Ruby have implicit returns that return the last line in the method.  The programmer can define methods in the terminal and can call a method on a method.  Scope works mostly like Javascript.  

[Googled Answer]

A method in Ruby is a set of expressions that returns a value.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance. 


[Your Answer]
The open carrot (<) indicates the class on the left inherits the attributes and methods from the class on the right of the symbol.  The class on the left is called the child class and the one on the right is called the parent aka super class.  It is possible to inherit from two class but only one at a time in a grandparent, to parent, then to child path but not from two parents at once.  The child class does not need an initialize method, it will take/use the initialize method from the super class.  The child class may also use an additional initialize method that will expand the number of attributes the child class has.  Using super() in the child class will deliver arguments to the parent's initialize method from the child's initialize method.  

[Googled Answer]

Inheritance is a relation between two classes. We know that all cats are mammals, and all mammals are animals. The benefit of inheritance is that classes lower down the hierarchy get the features of those higher up, but can also add specific features of their own. If all mammals breathe, then all cats breathe. In Ruby, a class can only inherit from a single other class. Some other languages support multiple inheritance, a feature that allows classes to inherit features from multiple classes, but Ruby doesn't support this.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer

rspec is an accompanying file testing system in Ruby that is tested in the terminal with succesful tests printed in green and failed tests printed in red.  In the same folder as the file to be tested create a file with the naming convention of "filename_spec.rb" where filename is the same as the file name of the file to be tested.  In the _spec.rb file the first two lines must be 1) require 'rspec' and 2) require_relative 'filename'.  General layout of test is described below.

describe Car do
    it "can be created" do
        expect {Car.new}.to_not raise_error
    end
end

Car is a class in the original file.  .new is a method that is being unit tested in the spec file.  Curly brackets or paranthesis are determined by the type of test being run on the code.  Generally {} are for testing if a method works and () are for checking a value.


//Googled Answer

RSpec is a tool in the behavior-driven development (BDD) process of writing human readable specifications that direct and validate the development of applications. 

Example:
context 'when not valid' do
  it { is_expected.to respond_with 422 }
end

#### 4. Name three possible non-inheritance relationships between ruby objects? 

//Your Answer

has_a
has_many


//Googled Answer

is_a
has_a
has_many

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

This is String Interpolation.  The #{} is the format used in Ruby.  String Interpolation allows code, such as variables, to be inserted with the most recent relevant information of the program (such as the number 1022 in place of x) into a text display that will show in the output to the user.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer

I like breaking things so it's fun to think about all the ways the program could get broken.  So far I like it and intend on writing tests for the side project I'm reformating into React...not sure if it's going to take the same shape that I originaly thought of but that's sort of the point.  I suppose if the test didn't imagine a particularly strange behavior than the tests could fall short of accounting for edge cases that would definitely be an issue but I also imagine that with time thinking up really odd behavior becomes second nature for QA developers...or at least I hope so.

//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer

An instance variable is the way information is passed from the Controller to the View.  It is different from a local variable in that it's scope is not limited.  It acts more like state and props in React than a variable inside a function in JS.

//Googled Answer

A normal variable has scope only within the current context; an instance variable has scope throughout one instance of a class.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.


On poigniant guide to Ruby:

1) very apparently not uncommon for text about code to include many tangents and funny ones at that
2) didn't know Ruby has always been free
3) felt like I was reading Tom Robbins only about code this time
4) not uncommon for folks to be surprisingly passionate about Ruby
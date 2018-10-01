# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

My Answer:
In Ruby, everything is an object. A method is a function, like a javascript function only written in Ruby, that lives inside a ruby class and is passed or modifies the key value pairs of that object.

Google's Answer:
A method in Ruby is a set of expressions that returns a value. With methods, one can organize their code into subroutines that can be easily invoked from other areas of their program. Other languages sometimes refer to this as a function. A method may be defined as a part of a class or separately.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]

Classes are blueprints for objects, and create objects that are instances of that class. Classes have relationships with each other such as "has_a", "has_many", "is_a", "type_of", etc. When Ruby classes inherit from a parent class, they will automatically be able to respond to the parent's methods.

[Googled Answer]

Inheritance is when a class inherits behavior from another class. The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass. We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer

'Rspec' is Ruby's testing gem/program. Test-driven programming in Ruby entails writing a test in rspec before coding it. You would then find all the ways your test could fail (to test for edge cases), and then write a passing test.

If I were to write a piece of code that defines a class with two parameters that have a built in "setter" and "getter" using attr_accessor for attributes "name" and "gender," I would write the following tests to make sure that my class generates a valid object, and that I can access that object's instance variable for the attribute @name with me.name:

describe Person do
    before do
        me = Person.new("Mary", "Female")
    end
end

    it "Be able to create object from Person class" do
        expect{Person.new}.to_not raise_error
    end

    it "Say my first name" do
        expect(me.name)to eq("Mary")
    end

//Googled Answer

RSpec is a 'Domain Specific Language' (DSL) testing tool written in Ruby to test Ruby code.[4] It is a behavior-driven development (BDD) framework which is extensively used in the production applications. The basic idea behind this concept is that of Test Driven Development (TDD) where the tests are written first and the development is based on writing just enough code that will fulfill those tests followed by refactoring.

Describing the behavior of objects
As mentioned above, RSpec provides a domain-specific language to describe the behavior of objects. The keywords used in RSpec are similar to the ones used in other languages and/or TDD frameworks.[6] For example, if the keywords used in Test::Unit are considered, they can be mapped to the RSpec keywords as follows:

Assertion becomes expectation
Test method becomes Example code
Test case becomes Example group
There are many such keywords which are used in the same context but with the similar names. The syntax of RSpec provides the ease of readability and describes the behavior of the code thereby providing freedom to the programmer. Every testing framework works in the following flow - given some context, when some event occurs, what outcome is expected. The methods like describe(), context() and it() form the analogy and the skeleton respectively of the test code.

describe()
The describe() method is used to describe a class, method or an example group. This is the outer block which actually contains the test code and it depicts the characteristics of the code enclosed in it. This method takes a number of arguments and an optional block.[6] However, normally one or two arguments are used to describe the behavior of the example group. The first argument represents the reference to the class or module whereas the second argument is optional whose datatype would be String.[6] The example groups can be nested as well. An example of using the describe method is as follows:[6]

describe User, "with no account balance" {....}
=> User with no account balance
[6]

context()
The context() block is used to describe the context in which the class or method mentioned in the describe block is being used. This can be considered as an alias to the word describe() in this scenario and they both can be used interchangeably. Generally, describe() is used for things and context() is used for contexts. It helps to venture out different outcomes in different scenarios. The example mentioned above can be described using the context() method as follows:[6]

describe User do
    context "has no account balance" do
        ....
    end
end
[6] Using context() makes it easier to scan a spec file and makes it clear what it relates to.

it()
It is a RSpec method which describes the specifications of the sample in the context. The it() block takes a string as an argument and the string after the 'it' keyword can be considered as the function that the block is expected to perform or in other words it can be considered as a test case. Consider the following example:[6]

describe User do
    context "has no account balance" do
        it "is not allowed to sanction a housing loan" do
            puts "The loan cannot be sanctioned due to no balance in the account."
        end
    end
end
[6]

RSpec::Expectations
In RSpec, an expectation is a statement expressing the state that something is expected to be in, at a particular point in the execution of a code example. RSpec uses a simple framework and keywords like should() and should_not() to express expectations. It supports matchers, that is objects that try to match an expected outcome, for common operations as well as uncommon expressions. For example, if the expected outcome of a result is say numeric value 5, a RSpec expectation that uses the matcher equal for the same would be written as follows:[6]

result.should equal(5)

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer

"has_a", "has_many", "belongs_to"

//Googled Answer

belongs_to
has_one
has_many
has_many :through
has_one :through
has_and_belongs_to_many

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

This is string interpolation in Ruby. Curly braces are used because we are plugging in x as a key:value pair object into a string and combining them to make one string.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer

It is very hard to resist the temptation to code first and then write tests. My brain wants to approach the logic with trial and error, and tests seem like a long winded approach to achieving that because you have to add all the extra syntax. I see the value in using BDD not only because employers expect it, but because I know that in the real world I will most likely be jumping into a program written by many other people, and be asked to work on only a small segment. Tests would be an invaluable "road map" of other's code, and also writing my own would help prevent my contributions from breaking the program somewhere else.

//Googled Answer

What are the benefits of using BDD?
BBD keeps the focus on the end user and their needs. It’s easy for engineers to get bogged down in implementation details and architecture choices. They can lose sight of the fact that all those things ultimately have to serve the user of the software. BDD forces you to take a step back and look at the application from the end user’s perspective.

Another great thing about BBD is that documentation is built in. By writing a high-level list of specifications, you’ll provide a description of what your application actually does in simple terms that every member of your team can understand. You can use these specs to create living documentation that can be viewed by everyone working on the project.

Also, both BDD and test-driven development (TDD) allow you to refactor code really well. I feel like a lot of times, with refactoring, it’s easy to take the “Jenga approach:” does everything break if I delete this line of code? Having comprehensive test coverage enables you to edit things very efficiently without having to worry about what breaks. Your tests will tell you what breaks right away. If I’m not sure if I need a module, I’ll delete the whole thing and see what happens. Provided I have the right coverage and the tests provide meaningful feedback, it’ll tell me what broke, so I can fix those things and leave the rest.

What about the drawbacks?
Many companies are founded by engineers who had a cool idea and put something together. And a lot of times, extensive testing isn’t a part of that. There are conflicting schools of thought on the best way to implement testing, even within a single organization. And everyone is very passionate about their particular point of view.

It can be hard to get the whole team on the same page. Everyone notices problems with the new thing more than they notice problems with the status-quo — which is typical when you’re implementing any kind of change.

Purism is also a challenge. You get situations where the orthodox approach isn’t necessarily the best one. People aren’t great at recognizing exceptions to rules: they’re either too rigid, not allowing any exceptions at all — or they’ll let anything fly, and everything goes to hell.

Another thing: Cucumber is becoming much more opinionated, and that’s a good thing. I see people who are using Cucumber incorrectly, which causes them to dislike the tool. Historically, it’s given people more than enough rope to hang themselves with. To some extent, that’s true of BDD in general. There are a lot of bad practices and poor implementations out there.


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer

An instance variable is unique to the object in which it lives. If class Person took in the parameters (name, gender) and me = Person.new("Mary", "female"), then the instance variable @name = "Mary" and @gender = "female" would be unique to the object "me." Instance variables are private to Ruby objects and need "getter" and "setter" methods in order to be displayed or changed. Normal local variables are more easily accessed and therefore modified.

//Googled Answer

A normal variable has scope only within the current context; an instance variable has scope throughout one instance of a class. The variable surname cannot be accessed outside of the context of the set_name method.

see example:

class User
  def set_name
    @name = "Bob"
    surname = "Cratchett"
  end

  def hi
    puts "Hello, " + @name
  end

  def hello
    puts "Hello, Mr " + surname
  end
end

irb(main):022:0> u = User.new
=> #<User:0x29cbfb0>
irb(main):023:0> u.set_name
irb(main):024:0> u.hi
Hello, Bob
=> nil
irb(main):025:0> u.hello
NameError: undefined local variable or method 'surname'

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

Yukihiro Matsumoto created Ruby on February 24, 1993.

Ruby is free and open-source.

Commas are not allowed in numbers, but underscores are. So if you feel the need to mark your thousands so the numbers are more readable, use an underscore. (population = 12_000_000_000)

Symbols are words that look just like variables. Again, they may contain letters, digits, or underscores. But they start with a colon.

:a, :b, or :ponce_de_leon are examples.

Symbols are lightweight strings. Usually, symbols are used in situations where you need a string but you won’t be printing it to the screen.

Constants are words like variables, but constants are capitalized. If variables are the nouns of Ruby, then think of constants as the proper nouns. In English, proper nouns are capitalized. The Empire State Building. You can’t just move The Empire State Building. You can’t just decide that the Empire State Building is something else. Proper nouns are like that. They refer to something very specific and usually don’t change over time. In the same way, constants can’t be changed after they are set. (EmpireStateBuilding = "350 5th Avenue, NYC, NY")

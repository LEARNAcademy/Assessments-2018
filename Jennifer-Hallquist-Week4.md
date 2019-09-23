# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

A method is a function that belongs to an object, similar to JavaScript. The
syntax for defining a method differs between the languages.

```
def method_name arg1, arg2
end

vs

function method_name(arg1, arg2) {

}
```

Additionally, Ruby has implicit returns as well as the concepts of private,
public, etc methods. In Ruby, arguments do not have to be enclosed inside
parentheses. Also, Ruby methods that don't take any arguments do not
need parentheses when called. For example, `name_string.length`.


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

[Your Answer]

To say that a class inherits from another class means that the parent class
has initial methods and properties that can be passed down to its children. So
if you know that certain methods and properties must be common to all instances
of a class, while others belong to only a subclass, then the subclass can
inherit the former and still define the latter for itself.

The syntax for inheritance looks like `Child < Parent`

[Googled Answer]

Inheritance is a relation between two classes. We know that all cats are
mammals, and all mammals are animals. The benefit of inheritance is that classes
lower down the hierarchy get the features of those higher up, but can also add
specific features of their own. If all mammals breathe, then all cats breathe.
In Ruby, a class can only inherit from a single other class. Some other
languages support multiple inheritance, a feature that allows classes to inherit
features from multiple classes, but Ruby doesn't support this.


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer

rspec is a Ruby gem that provides a tool for testing Ruby code.

Writing rspec tests is a solid way of testing your code's behavior. One approach
is to practice test-driven development, which involves writing failing tests
at first. This is followed by writing the code that will make these tests
pass.

An rspec test may look something like:
```
describe 'count'
  it 'should return number of users'
    expect(count).to_be a number
  end
end
```

//Googled Answer

RSpec is a 'Domain Specific Language' (DSL) testing tool written in Ruby to test
Ruby code. It is a behavior-driven development (BDD) framework which is
extensively used in the production applications. The basic idea behind this
concept is that of Test Driven Development (TDD) where the tests are written
first and the development is based on writing just enough code that will fulfill
those tests followed by refactoring. It contains its own mocking framework that
is fully integrated into the framework based upon JMock. The simplicity in
the RSpec syntax makes it one of the popular testing tools for Ruby
applications.

```
describe Burger do
  describe "#apply_ketchup" do
    subject { burger }
    before  { burger.apply_ketchup }

    context "with ketchup" do
      let(:burger) { Burger.new(:ketchup => true) }

      specify { subject.has_ketchup_on_it?.should be_true }
    end

    context "without ketchup" do
      let(:burger) { Burger.new(:ketchup => true) }

      specify { subject.has_ketchup_on_it?.should be_false }
    end
  end
end
```


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer

has_many
has_one
belongs_to

//Googled Answer

belongs_to
has_one
has_many
has_many through
has_one through
has_and_belongs_to_many


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

That is string interpolation. It evaluates Ruby code inside strings.


#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer

I feel comfortable with testing. I have written many tests for my past projects.
Even the rspec formatting was very similar to what I've written before.

I have experienced for myself how I could've avoided or caught bugs if only I
had written a test first. I do need to be more diligent about practicing TDD
because it's not really my preferred way of coding, other than that, it's really
just a matter of getting better at writing more reliable tests.

//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer

An instance variable in Ruby will have an `@` symbol preceding it. Instance
variables are scoped to each instance of the class. In contrast, a local
variable is scoped only to a single instance, whichever one it's declared in.

//Googled Answer

An instance variable has a name beginning with `@`, and its scope is confined to
whatever object self refers to. Two different objects, even if they belong to
the same class, are allowed to have different values for their instance
variables. From outside the object, instance variables cannot be altered or even
observed (i.e., ruby's instance variables are never public) except by whatever
methods are explicitly provided by the programmer. As with globals, instance
variables have the nil value until they are initialized.

A variable that only exists inside of a code block or method is called a
local variable. A local variable has a name starting with a lower case letter
or an underscore character `_`.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

- If you only want to see methods you've defined for an object,
use `object_name.instance_methods(false)`
- `__FILE__` is the variable that contains the name of the current file.
- Ruby's `each` method magically calls `yield` on each element for us, which
makes each methods much terser

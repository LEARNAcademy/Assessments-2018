#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
tempArray.map { |e| e*2}
#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods
#1. using a bang! to change an accesor into a mutator
x= [3,4,1,2]
x.sort
p x
x.sort!
p x
#2. %w to create an array of strings without having to use ""s and commas
hi = %w(hello world)
p hi
#3. use raise to create your a custom error
def square(x)
  if x.class == Integer || x.class== Float
    return x*x
  else
    # raise "that's not a number"
    # ^ uncomment to test
  end
end
puts square("a")

#### 3. Look at this horrible ruby code, and fix it to be good ruby code. 

# ruby
require "Date"
class Example
  attr_accessor :day
  def initialize(day)
    @day=Date.parse(day)
  end
  
  def Say_hi
    case  @day.strftime('%A')
    when "Friday"
      puts "TGIF!"
    when "Monday"
      puts "Its monday again"
    else
      puts "another day"
    end
  end
end
monday=Example.new("8/27")
monday.Say_hi
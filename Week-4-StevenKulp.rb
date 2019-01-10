#### 1. Use Ruby to loop over this array, multiplying each element by 2.

temp_array = [1, 2, 6, 9, 3, 21]

temp_array.each do |x|
  puts x * 2
end



#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# Example A) Reversing an array is convenient and simple:
x = [1,2,3,4,5]
x.reverse.each do |array_item|
  puts array_item
end

# Example B) Sorting arrays is cool:
class Apple
  attr_accessor :color
  def initialize
    @color = "red"
  end
end
class Orange
  attr_accessor :color
  def initialize
    @color = "orange"
  end
end
class Banana
  attr_accessor :color
  def initialize
    @color = "yellow"
  end
end
an_apple = Apple.new
an_orange = Orange.new
a_banana = Banana.new

fruit_array = [an_apple, an_orange, a_banana]
fruit_array.sort! {|x,y| x.color <=> y.color}
p fruit_array

# Example C) Create a series of integers with minimal code:
x = 0
20.times do
  puts x+=1
end



#### 3. Look at this horrible Ruby code, and fix it to be good Ruby code.

class Example
  attr_accessor :day
  def initialize
    @day = day
  end
  def say_hi(day)
    if day == "Friday"
      puts "TGIF!"
    elsif day == "Monday"
      puts "Its monday again"
    else
      puts "another day"
    end
  end
end

my_day = Example.new
my_day.say_hi("Friday")

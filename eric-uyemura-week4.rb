#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

newArray = []

tempArray.each {|item| newArray << (item * 2) }

p newArray

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

#1. shorthand notation of conditional blocks. reduces amount of code and is very readable.

my_var = true

puts "this shorthand is great" if my_var

#2 and #3. ruby select and map methods, just like these were great in javavscript when i learned how to use them, they are equally useful in ruby.  these chained array methods can be confusing to look at but our helpful to do.  this one selects all the elements that are even and then performs a function ono all those elements, in this case, simply outputting the eleement itself and that it is even.

tempArray = [1, 2, 6, 9, 3, 21]

tempArray.select{ |el| el.even? }.map{|el| puts "#{el} is an even number"}


#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

# ``` ruby
class Example
  def initialize(day)
    @day=day
  end

  def say_hi
    if(@day == "Friday")
      puts "TGIF!"
    elsif(@day == "Monday")
      puts "Its monday again"
    else
      puts "another day"
    end
  end
end

calendar = Example.new("Friday")
calendar.say_hi

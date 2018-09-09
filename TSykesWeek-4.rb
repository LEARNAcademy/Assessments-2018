### 1. Use Ruby to loop over this array, multiplying each element by 2.

  tempArray = [1, 2, 6, 9, 3, 21]

  tempArray.map {|n| n * 2}


### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.
gets & chomp:
      username = gets.chomp.capitalize
      (gets takes in user input and chomp cuts off the line ending of the string. capitalize makes first letter uppercase.)
puts:  puts "Hello  #{username}."
      (puts displays results of code and adds a newline afterward.)


#### 3. Look at this horrible ruby code, and fix it to be good ruby code.
#
# ``` ruby
class Example
  def initialize(day)
    @day=day
  end

  def Say_hi
    if(@day == "Friday")
      puts "TGIF!"

    elsif(@day == "Monday")
      puts "Its monday again"

    else
      puts "another day"
    end
  end
end
# ```

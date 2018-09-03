#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
tempArray.each do |number|
  puts number * 2
end

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods
1. The Shovel Operator
newArr = [3]
newArr << 5
=> [3,5]

2. Select
array = ['hello', 'hi', 'goodbye']
array.select{|word| word.length > 3}
 => ["hello", "goodbye"]

3. The Ternary Operator
puts x == 10 ? "x is ten" : "x is not ten"

#If x is ten, x = "x is ten", else x = "x is not ten"


#### 3. Look at this horrible ruby code, and fix it to be good ruby code.
class Example
  def initialize(day)
    @day = day
  end

  def say_hi
    if day == 'Friday'
      puts 'TGIF!'
    elsif day == 'Monday'
      puts 'Its monday again'
    else
      puts 'another day'
    end
  end
end

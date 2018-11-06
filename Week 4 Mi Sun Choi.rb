#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
for i in tempArray do
  puts i * 2
end


#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods
p "hello".capitalize # Hello
p "HELLO".downcase # hello
p "hello".length # 5

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.


class Example
  def initialize(day)
    @day = day
  end

  def say
    if (@day.capitalize == "Friday")
      puts "TGIF!"
    elsif (@day.capitalize == "Monday")
      puts "Its monday again"
    else
      puts "another day"
    end
  end
end

new_example = Example.new("friday")
puts new_example.say

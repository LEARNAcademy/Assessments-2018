#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

tempArray.each do |el|
  tempArray *= 2
  print tempArray
end

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

myArr = ["h", "E", "l", "L", "o"]

p myArr.to_s # HElLo

p myArr.downcase # hello

p myArr.include?("e") # true



#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class example
  def initialize(day)
    @day = day
  end

  def say_hi
    if(day == "Friday")
      puts "TGIF!"

    elsif(day == "Monday")
      puts "Its monday again"
    
    else
      puts "another day"
  end
end
```

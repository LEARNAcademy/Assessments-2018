#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

def times_two(tempArray)
  empty_arr = []
    arr.each do |el|
      empty_arr << el * 2
end

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

example_methods = [1, 2, 3, 4, 5]
def add_one.map(array)
  array.map{ |x| x + 1 }
end #adds 1 to each element in array

example_methods = [5, 20, 4, 15]
p example_methods.select { |numbers| numbers > 9 } #will only print numbers greater than 9

first_name = "janice"
last_name = "zosa"
p first_name.upcase #will print out user answer for first name first letter capitalized

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class example
  def initialize(day)
    @day=day
  end

  def Say_hi
    if(day == "Friday"){
      puts "TGIF!"
    }
    elseif(day == "Monday"){
      puts "Its monday again"
    }
    else
      puts "another day"
  end
end
```

class Example
  def initialize (day)
    @day = day
  end

  def say_hi
    if(day === "Friday"){
      puts "TGIF!"
    }
    elsif(day === "Monday"){
      puts "It's Monday again."
    }
    else
      puts "Another day"
  end
end

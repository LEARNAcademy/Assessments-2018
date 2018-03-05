#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

tempArray.each do |element|
  puts element * 2
end

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

#a. .chomp
puts "Hello, what's your name?"
name = gets.chomp
puts "Welcome, #{name}!"

#b. .downcase
name = "Alexa"
name.downcase => "alexa"

#c. .length
array = [2, 4, 6, 8]
array.length => 4

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class Example
  def initialize(day)
    @day=day
  end

  def say_hi
    if(day == "Friday"){
      puts "TGIF!"
    }
    elseif(day == "Monday"){
      puts "Its monday again"
    }
    else{
      puts "another day"
    }
    end
  end
end
```

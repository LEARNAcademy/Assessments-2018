#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here

tempArray.each do |i|
puts i * 2
end

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods
1. .map
  x = [1, 2, 3]
  x.map{|i| i * 2}

2. .nil?
  username = nil
  if username.nil?
      puts "Username does not exist"
  else
      puts "Username exists"
  end

3. .methods
  shows a list of all the methods that can be used on either a hash, string, or an array.
  x = [1, 2, 3]
  x.methods


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

Class Example
  def initialize(day)
    @day = day
  end

  def say_hi
    if @day == 'Friday'
      puts "TGIF!"
    elsif @day == 'Monday'
      puts "It's Monday again"
    else
      puts "another day"
    end
  end

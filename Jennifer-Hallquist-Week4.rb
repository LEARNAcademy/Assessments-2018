#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here

tempArray.each do |number|
  puts num * 2
end

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods

# sample chooses a random element or n random elements from the array
array1 = ["apple", "blueberry", "peach"]
randFruit = array1.sample

# include? returns true if the given object is present in self, false otherwise
array2 = [313, 444, 663, 410]
array2.include?(444)

# start_with? returns true if str starts with one of the prefixes given
str = "October"
str.start_with?("Oct")

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

class Example # :nodoc:
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

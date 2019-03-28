#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

tempArray.each do |x|
  x = x * 2
end



#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# .include?

string = "team"
string.include? "i"
string.include? "m" && "e"

# le shovel: <<

array = ["This", "needs", 4]

array << "things"

# sort

a = [4, 3, 2, 1]
a.sort


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
    def initialize day
      @day = day
    end

    def say_hi
      if day == "Friday"
        puts "TGIF!"
      elsif day == "Monday"
        puts "It's Monday again"
      else
        puts "another day"
      end
    end
end

ex = Example.new("Friday")
ex.say_hi

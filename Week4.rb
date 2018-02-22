#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]



# your ruby loop here

tempArray.map!{|x| x*2}

# i briefly considered doing a tempArray.each{} but then realized that would return the desired values but would not modify the array. Map also returns an array, but map! reassigns that array to the original object.

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods

.to_i & to_f

"4".to_i = 4
"4".to_f = 4.0

#Often times when you are getting unput from a user, even if it's number form it is read by ruby as a string. by using .to_i the value is converted to an integer that can be operated on as a value. to_f does the same thing but allows for decimals to be used as well.

downcase(!) and upcase (!)

"AAAAAH".downcase = "aaaaah"
"aaaaah".upcase = "AAAAAH"

#these are probably not the MOST useful methods for strings, but coming from javascript they feel like a luxury, especially when having to manipulate user inputted information like names and whatnot

flat_map

[[4,4,4],4,[4,[4,[4]]],4,4].flat_map = [4,4,4,4,4,4,4,4,4]

# this method called on an array will let you flatten the array so that all arrays inside the array will just become part of the array, multi-dimensional become one-dimensional

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class example
  def initialize(day)
    @day=day
  end

  def say_hi
    if @day == "Friday"
      puts "TGIF!"
    elsif @day == "Monday"
      puts "Its monday again"
    else
      puts "another day"
  end
end
```

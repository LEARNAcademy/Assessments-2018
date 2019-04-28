#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

tempArray.each do {|element|
  element * 2}
# your ruby loop here

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

rand(numberrange) generates a random number within a specified range
array/hash.blank to check for blank values
array.reverse - reverses the order of an array.
array = []
rand(100) = 68

array.blank? = true

array = [1,2,3,4,5]
array.reverse
[5,4,3,2,1]

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class example
  def initialize day
    @day=day
  end

  def say_hi
    if day == "Friday"
      puts "TGIF!"

    elsif day == "Monday"
      puts "Its monday again"

    else
      puts "another day"
  end
end
```

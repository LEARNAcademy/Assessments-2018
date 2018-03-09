#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
tempArray.each do |x|
  x * 2
end

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful
#### and create examples to show how they work.

# your three built in ruby methods
.flatten!
[1,2,3,[4,5,6]].flatten! >> [1,2,3,4,5,6]

require
require [Component] from 'Main'

.length

arr = [1,2,3]
arr.length >> 3
#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby

class example
attr_accessor :day

  def Say_hi
    if(day == "Friday"){
      p "TGIF!"
    }
    elsif(day == "Monday"){
      p "Its Monday again"
    }
    else
      p "another day"
  end
end
```

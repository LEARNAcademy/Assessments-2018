#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

  tempArray.each {
   |x| puts x*2
  }


#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

1. .to_s
ex) 40.to_s.reverse
- to_string will convert the number into string and then the string result can be reversed into "04".

2. .include?
ex) array = [1,2,3,4,5]
  array.include?(3) //true
  array.include?(10) //false
- include? method will give a true or false to a value to see whether it is contained in the given array.

3. .flatten
ex) list = [1,2,[3,4,5],6,[7,8]]
  list.flatten
  //[1, 2, 3, 4, 5, 6, 7, 8]
- flatten method allows the array to become one big array (no arrays within an array).

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
  class TypeofDay
    def initialize(day)
      @day=day
    end

    def day_note
      if(@day == "Friday")
        puts "TGIF!"

      elsif(@day == "Monday")
        puts "Its monday again"

      else
        puts "another day"
    end
  end
end
```

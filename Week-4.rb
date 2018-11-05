#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
def times_two(arr)
  result = []
  arr.each do |el|
    result << el*2
  end
  result
end
#p times_two(tempArray)

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods
#### A. same loop as above using map
#p tempArray.map { |el| el*2 }

#### B. sorting an array of objects by property value
class Shape
  attr_accessor :name, :edges
  def initialize(name, edges)
    @name = name
    @edges = edges
  end
end

shapes = [Shape.new("square", 4), Shape.new("circle", 1), Shape.new("dodcahedron", 30), Shape.new("triangle", 3)]
# p shapes.sort_by { |shape| shape.edges }

#### C. even? / odd? -- so convenient
nums = [0,1,2,3,4,5,6,7,8,9]
odds = []
nums.each do |num|
  if num.odd?
    odds << num
  end
end
#p odds

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

# ``` ruby
# class example
#   def initialize(day)
#     @day=day
#   end
#
#   def Say_hi
#     if(day == "Friday"){
#       puts "TGIF!"
#     }
#     elseif(day == "Monday"){
#       puts "Its monday again"
#     }
#     else
#       puts "another day"
#   end
# end
# ```

class Example
  def initialize day
    @day = day
  end

  def say_hi
    if @day.downcase == "friday"
      p "TGIF!"
    elsif @day.downcase == "monday"
      p "it's Monday again"
    else
      p "another day"
    end
  end
end

mon = Example.new("Monday")
wed = Example.new("Wednesday")
fri = Example.new("Friday")

# mon.say_hi
# wed.say_hi
# fri.say_hi

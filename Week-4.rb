#### 1. Use Ruby to loop over this array, multiplying each element by 2.

# tempArray = [1, 2, 6, 9, 3, 21]
#
# your ruby loop here

tempArray.each do |temp|
	temp = temp * 2
	puts temp
end



#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods

	.each # creates a loop and iterates over.
	.odd & .even # Will filter out.
	.filter
	.map

	get.chomp


#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

# ruby
class Example
	attr_accessor :day;
  def initialize(day)
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
  # p say_hi("Monday");
end
	new_day = Example.new("Friday")
	p new_day.say_hi
#

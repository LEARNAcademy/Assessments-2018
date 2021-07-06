#### 1. Use Ruby to loop over this array, multiplying each element by 2. #

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
tempArray.each do |num|
    num = num * 2
    puts num
end

#or

doubleArray = tempArray.map{|num| num + num}
puts doubleArray

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work. #

# your three built in ruby methods

puts "Type your first name!"
first_name = gets.capitalize.chomp
puts "Type your last name!"
last_name = gets.capitalize.chomp
puts "Hello, #{first_name} #{last_name}! You are using the gets method for user imput, the capitalization method for the first letter of each name and the chomp method to make everything appear on the same line."

#### 3. Look at this horrible ruby code, and fix it to be good ruby code. #

#ruby
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
#seems like lots of unnecessarily pieces, hopefully this is an okay approach:
def say_hi(day)
    if day == "Friday"
      puts "TGIF!"
    elsif day == "Monday"
      puts "Its monday again."
    else
      puts "Another day.."
    end
end
say_hi("Friday")

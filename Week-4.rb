#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
p tempArray.map{|el| (el * 2)}

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods

#each is always a good built in method to have in your back pocket
#similar to map, but it doesn't return a modified version of the array you used with it.
tempArray.map{|el| p (el * 2)}

#split is good to know
my_string = "Imma string"
p my_string.split

#I used chomp a lot this last week. It's great for getting user input, but leaving the final return character offer
user_input = gets.chomp
p user_input

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

class Example
  def initialize(day)
    @day=day
    say_hi
  end

  def say_hi
    if(@day == "Friday")
      puts "TGIF!"
    elsif(@day == "Monday")
      puts 'It\'s monday again'
    else
      puts "another day"
    end
  end
end

my_example = Example.new("Friday")

#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here

tempArray.each {|x| print x*2, ", " }

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods




#1) .new pretty cool to be able to create new objects with a built in

class Person
    attr_accessor :name, :age, :city

    def initialize(name, age)
        @name = name
        @age = age
        @city
    end
end

me = Person.new("Some Name", 55)


#2) When Tricia and I were working on the date challenge together we were building all these tests and in researching (after sighing about trying to find a way to check for leap years) found that there is a built in method in Ruby to find if a date is valid or not
#We used the format the date defining the method way below.  Way better than manually checking for leap years!


require 'date'
def valid_date?(date)
    date_format = '%Y-%m-%d'
    DateTime.strptime(date, date_format)
    true
rescue ArgumentError
    false
end

puts valid_date?('2018-08-20')

#Output = true


#3) This one was just fun...the method slowly loads each character in the terminal but I'm glad to have found the built in Ruby methods for random and delay...oh and to know that there is a way to use .each on each character in a string.

def anim (str)
    str.each_char do |n|
        print n
        slt = rand(0.02..0.08)
        sleep(slt)
    end
end

#### 3. Look at this horrible ruby code, and fix it to be good ruby code. 

``` ruby
class Example
    attr_accessor :day
  def initialize(day)
    @day=day
  end
  
  def Say_hi
    if day == 'Friday'
      puts 'TGIF!'
    elsif day == 'Monday'
      puts "It is #{day} again"
    else
      puts "another #{day}"
  end
end
```

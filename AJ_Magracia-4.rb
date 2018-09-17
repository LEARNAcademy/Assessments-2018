#### 1. Use Ruby to loop over this array, multiplying each element by 2.

temp_array = [1, 2, 6, 9, 3, 21]

# your ruby loop here

new_array = temp_array.map do |v|
  v * 2
end
p new_array
#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods

# I will use a function created from a class challenge to show how reject, sort_by!, and map are used.

# For the following code, tasks is an array containing objects of class Task that contain an attribute done set to either true or false.
# due_date_tasks is an array of DueDateTask objects which inherit from Task, but also have a due date.
# This method will print a list of incomplete tasks sorted first by tasks that have due dates in the order they are due, followed by tasks without due dates.

def show_incomplete
  # remove tasks marked done from the task list and store what remains in incomplete
  incomplete = tasks.reject(&:done)
  # do the same for due date tasks
  incomplete_dated = due_date_tasks.reject(&:done)
  # sort the incomplete dated tasks by due date
  incomplete_dated.sort_by!(&:date)
  # append the undated tasks to the end of the dated tasks and store in a new variable
  incomplete_list = incomplete_dated + incomplete
  # call the to_s method (shown below) on each member of the incomplete_list array and put the result
  puts incomplete_list.map(&:to_s)
end

# # Task
# def to_s
#   doneness = @done == true ? 'complete' : 'not yet complete'
#   "Task item: #{title.capitalize} (#{description}) is #{doneness}."
# end
#
# # DueDateTask
# def to_s
#   super + ' ' + due_date
# end

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

class Example
  def initialize(day)
    @day = day
  end

  def say_hi
    if day == 'Friday'
      puts 'TGIF!'
    elsif day == 'Monday'
      puts "It's Monday again"
    else
      puts 'Another day'
    end
  end
end

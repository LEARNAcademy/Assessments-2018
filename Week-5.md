# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?

Your Answer
Ruby on Rails is full stack and as long as you follow the convention, there is less coding to write the functions in the many components.

Googled Answer
It's time-efficient. Ruby on Rails contains many ready-made plugins and modules, which allow developers not to waste time on writing boilerplate code.
It's consistent.Developers follow standardized file storage and programming conventions that keep a project structured and readable. It also saves plenty of time.
It’s scalable. If you expect to get a lot of users for your application you should make sure that it can cope with all the visitors you’re hoping to attract.


### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?

Your Answer
Ruby on Rails use the MVC framework by having different folders and files specified for each component, which also interacts with each other.

Googled Answer
Rails promotes the concept that models, views, and controllers should be kept separate by storing the code for each element as separate files in separate directories. Each component of the model-view-controller architecture has its place within the app subdirectory—the models, views, and controllers subdirectories respectively.

### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes

  2. Create the controller

  code:
  ```
  class StaticsController < ApplicationController

  def about

  end
  ```

  file: statics_controller.rb

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: about.html.erb


### 4. Look at these sets of Rails routes, they are an example of which principle/term that we touched on briefly in class? Find the term, and explain why it is important.

```
/users/       method="GET"     # :controller => 'users', :action => 'index'
/users/1      method="GET"     # :controller => 'users', :action => 'show'
/users/new    method="GET"     # :controller => 'users', :action => 'new'
/users/       method="POST"    # :controller => 'users', :action => 'create'
/users/1/edit method="GET"     # :controller => 'users', :action => 'edit'
/users/1      method="PUT"     # :controller => 'users', :action => 'update'
/users/1      method="DELETE"  # :controller => 'users', :action => 'destroy'
```

### 5. What is the public folder used for in Rails?

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?

### 9. Why would you use an instance variable in a rails controller?

### 10. Name two rails generator commands and what files they create:

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

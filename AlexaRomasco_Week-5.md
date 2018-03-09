# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?

Ruby on Rails is a full MVC framework; extremely easy to set up an entire, working project; uses convention over configuration, so that as long as you do things "the Ruby way", it's very user-friendly

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?

The Model maintains the relationship between the objects and the database - ActiveRecord is used to translate Ruby code to SQL which can be used to interact with the database; ActiveRecord is an ORM (object relational mapper)

The View is a presentation of data in a particular format, using ERB (embedded Ruby)

The Controller is what directs all of the traffic - querying the models for specific data and organizing that data into a format to be projected in a particular view  

### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes

  2. Create the ___controller_________

  code:
  ```
  class __StatisticsController__________ < ApplicationController

  def about
    ___render "about.html.erb"__
  end
  ```

  file: ___________statistics_controller.rb__________

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: _____about.html.erb________________


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

Restful Routes: naming convention for paths that maps HTTP verbs, controller actions, and CRUD operations in a database; a single entry in the routes file will create these seven basic routes in your application

### 5. What is the public folder used for in Rails?

Static pages

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"

get '/game' => 'main#guess'

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?

Cookies are small pieces of data stored in the user's web browser. They are less secure, can only hold small amounts of data, and cannot hold multiple variables at once.

Sessions are data stored on the server-side. Sessions are more secure (encrypted), can hold unlimited amounts of data, and can store multiple variables at once.

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?

The action attribute of an html form tells the application where to send the data from that form upon submitting it. It is a path which the routes file will use to determine which controller and method to send the data to.

To designate the HTTP verb, use the "method" attribute.

### 9. Why would you use an instance variable in a rails controller?

In order to access that variable in the corresponding views file.

### 10. Name two rails generator commands and what files they create:

rails generate controller : creates a controller file (with any methods specified in the command line), a view file, and a route in the routes file

rails generate scaffold : creates the model, views, controller and database migration files

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

From reading the Ruby on Rails Guides, I learned how to use the forms helper. The form helper uses embedded Ruby to build a form in the view file, rather than pure HTML. The Ruby method used is called "form_with". "scope", "url", and "local" are the attributes used. 

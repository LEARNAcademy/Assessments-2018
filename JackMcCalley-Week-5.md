# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?

It's object oriented, you can do the full stack with it, the syntax is simple.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?

Ruby on Rails uses ActiveRecord to communicate with the database (Model), ActionView to display what is being written in the
backend (View), and ActionController/ApplicationController to bring together the Model and the View (Controller).

I had to look this up.

### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes

  2. Create the main controller

  code:
  ```
  class MainController < ApplicationController

  def about
    render "about.html.erb"
  end
  ```

  file: app/controllers/concerns

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: app/views


### 4. Look at these sets of Rails routes, they are an example of which principle/term that we touched on briefly in class? Find the term, and explain why it is important.

They are examples of HTTP verbs, which include POST, GET, PUT/PATCH, DELETE. These correspond to CRUD operations, and they are important
because they are the relationship between your project and the server.

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

Error message pages, index.html, and your robots.txt file.

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"

get 'game/:guess' => 'main/game'

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?

cookies store user data in the browser until the cookies are cleared, whereas session stores user data in the browser until the
browser is closed.

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?

The "action" attribute is where the information entered into the form is being sent to, and what is being done with it.

### 9. Why would you use an instance variable in a rails controller?

If you wanted to have a function that takes in the value of params, session, or cookies, since it can be easily reassigned and reused throughout the program.

### 10. Name two rails generator commands and what files they create:

rails g controller main ------ generates a main controller
rails g scaffold controllername attribute:type attribute2:type ---- generates a whole project with a prebuilt controller, routes, views, models, and database migration.

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better. 

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

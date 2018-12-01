# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?
it allows you to run ruby code intermingled with an (set of) html pages, intgrating all the steps of the MVC. It also has a number of helper functions which streamline the process of making a page
### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?
Rails is capable of using the full MVC. The model can be linked up to an existing SQL database, the controllers are done in ruby in the app/controllers file, and are linked to corresponding views in the views folder as .html.erb files
### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route: 
  
  code: 
  ```
  get '/about' => 'statics#about' 
  ```
  file: config/routes
  
  2. Create the _controller_
  
  code: 
  ```
  class _StaticController_ < ApplicationController
  
  def about 
    __render 'about.html.erb__
  end
  ```
  
  file: _static_controller.rb_
  
  3. Create the View
  
  code: 
  
  ```
  <div>This is the About page!</div>
  ```
  
  file:_about.html.erb_
  
  
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
This looks like some alternative way of writing routes, except written a different, more explicit way. The routes tell rails what to do (the 2nd column from the left) when a certain page (on the far left) is loaded, by running a method (far right column?) in a specified controller (2nd from right)
### 5. What is the public folder used for in Rails?
static web pages that are served up without any ruby code
### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"
get '/game/:guess' => 'main#game' 
the name of the method isn't specified, I'm guess it's also game?
### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?
cookies are used for data persisitance (between reloads) on the client side (as opposed to using a server-side database). They show up in the site's information when using inspect, so if you want them to not be publically vissible, you would need to use a session instead
### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?
The action is analogous to the destination, where you're sending the information in the form. For the actual verb, you'd use method="verb

### 9. Why would you use an instance variable in a rails controller?
using an instance variable in a controller allows you to use <%= %> to access the variable on the view. Otherwise, the variable would just be locally scoped and be inaccesible.
### 10. Name two rails generator commands and what files they create:
rails generate controller "controllername" "actionname" creates a controller with the specified name, and creates a method for the specified action within it, creates a corresponding view for that action, and links them in the routes

rails destroy controller "controllername" "actionname" will destroy the files associated with that named controller
### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better. 

- https://www.tutorialspoint.com/ruby-on-rails/inddex.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

You can change the base page (i.e. localhost:3000) by using root 'controller#action' (no html verb specified)
if you make a rails form (instead of an html one), your routes are listed in bin/rails routes
rails has active record, which automatically attaches objects in a database
AJAX lets you do stuff without needing to do a refresh/html verb
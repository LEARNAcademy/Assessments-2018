# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?
ruby on rails does a lot of stuff for you.  There are a lot of prebuilt generator commands that can take care of a lot of the more menial work so you don't have to. It provides a really simple way to make a fullstack framework.  However, if you wish to adjust anything, say you just want to have a backend and no frontend, there are ways to make that too, so you dont get all of the bloated code that comes along with a full scaffold.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?

Yes ruby has a very well built system to take care of this framework. First, we have a routes file that takes care of linking a controller to a url.  Rails does this for you automatically when you follow the convention of naming things correctly, that means having parity between your controller, your view, and  the methods of your controller that correspond to the correct view.  This makes it really easy to get your files talk to each other, a user sends a get request, the routes file links the url to the controller, and depending on the page the user wants, it will execute a method that corresponds to the same name view.

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
  class _____StaticsController_______ < ApplicationController

  def about
    ________#you don't necessariy need anything here if all you're doing is displaying a view, as the method will automatically render the correct view if not told to do otherwise. _______________
  end
  ```

  file: ____________pages_controller.rb_________

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: _______about.html.erb______________


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

CONVENTION OVER CONFIGURATION?????  right here we see the naming convention of rails, making sure that all your names for this site that seems to store and create new users are the same means that you wont have to do any special configuring in order to get your router to send you to the correct controller, and from there to send you to the correct view page.

### 5. What is the public folder used for in Rails?

Images?  Googled answer: Something about holding view pages that you don't mind anyone seeing, such as a 404 view page that simply tells a user that that page doesn't exist, or maybe something like a login page that everyone should be able to see.

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"

GET '/game/:guess' => "main#game"

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?

cookies are good for saving information that a user may have entered, this information  can then be used to pass into certain pages that may need a parameter in order to function correctly.

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?

The action attribute gives you the url where the input information should be going.


### 9. Why would you use an instance variable in a rails controller?

An instance variable allows you to pass information from the controller to a view, this information can then be used in the view to display information.

### 10. Name two rails generator commands and what files they create:

rails g scaffold  creates a full stack application for you.  it gives you everything you need to create and save information, and then retrieve that information.

rails g controller gives you a controller method with the proper route for that controller's methods.

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html


i use udemy and have bought a course on rails, i learned a lot about what all the different files do in a basic rails app.  

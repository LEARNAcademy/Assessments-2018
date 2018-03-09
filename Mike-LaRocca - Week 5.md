Week 5 Assessment
Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

1. What are some advantages of using Ruby on Rails?
Mike - Rails is very quick to deploy and there is little that needs to be done regarding dependencies.  Ruby on Rails has a very strong community and has been around for enough time that it is proven and has a good deal of support.
Google + Mike- Built on MVC philosophy which aids in scalability.  Rails defines conventions to be used which eliminates the need for excess configuration.
2. How does Ruby on Rails use the Model View Controller (MVC) framework?
Mike - Rails generates very explicit directories that contain controllers, models, and views. After creating a new project i.e. my_project one can then create controllers and models with commands.  rails g controller Users registration.  In this case a file called users_controller will appear in the controller folder and a users view will also be created.  Models typically hold the objects data structure.  Controllers typically do logic on that data.  Views display that data.  Routes connect them all.
Google- Rails g model User will give you the model for the users class.  
3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:
Create a route:
code:

get '/about' => 'statics#about'
file: config/routes

Create the Controller
code:

class Static < ApplicationController

def about
    render
end
file: Controller/statics_controller.rb

Create the View
code:

<div>This is the About page!</div>
file: View/about.html.erb

4. Look at these sets of Rails routes, they are an example of which principle/term that we touched on briefly in class? Find the term, and explain why it is important.
/users/       method="GET"     # :controller => 'users', :action => 'index'
/users/1      method="GET"     # :controller => 'users', :action => 'show'
/users/new    method="GET"     # :controller => 'users', :action => 'new'
/users/       method="POST"    # :controller => 'users', :action => 'create'
/users/1/edit method="GET"     # :controller => 'users', :action => 'edit'
/users/1      method="PUT"     # :controller => 'users', :action => 'update'
/users/1      method="DELETE"  # :controller => 'users', :action => 'destroy'

The above is an example of RESTful routes.  Representational State Transfer is a structure that links database CRUD principles with HTML verbs that best help transfer the data.

5. What is the public folder used for in Rails?
The public folder contains all the error messages, or public pages that are displayed.  As well, it contains the robots.txt file

6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"

get '/guess' => 'main#game'

7. What are cookies for? How do they work? What is the difference between a session and a cookie?
A cookie is used to store user data to be able to customize certain web aspects based on that user.  Sessions are encrypted, cookies are not.
8. In an html form, what does the "action" attribute tell you about the form? How do you designate the HTTP verb for the form?
The action is the route to which the form submission is sent.  action= 'registration' would map to the /registration route.  You designate the http very by listing.... method= 'get'
9. Why would you use an instance variable in a rails controller?
Mike - One would use an instance variable to be able to access that variable throughout the method.  
Google - It would allow you to call that varaiable using class.method/variable notation.  
10. Name two rails generator commands and what files they create:
Rails g controller Users methods...
Controller and view files
Adds routes for methods
Rails g model User...
Model file
11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.
https://www.tutorialspoint.com/ruby-on-rails/index.htm
http://railsforzombies.org
http://guides.rubyonrails.org/getting_started.html

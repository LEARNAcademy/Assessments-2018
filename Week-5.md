# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?
	- Ruby and Ruby on Rails can take care of the Model, View and Controller aspect of a web application.
	- Easy to language to read.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?

### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes

  2. Create the class

  code:
  ```
  class Statics < ApplicationController

  def about
  	render about.html.erb
  end
  ```

  file: app/controllers

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: views/statics/about.html.erb


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
- We could use the public folder to hold HTML template for HTTP error request, such as a 404 page.


### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"



### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?
- Google answer:

- Cookies are key-value data pairs that are stored in the user’s browser until they reach their specified expiration date. They can be used for pretty much anything, most commonly to “bookmark” the user’s place in a web page if she gets disconnected or to store simple site display preferences. You could also store shopping cart information or even passwords but that would be a bad idea – you shouldn’t store anything in regular browser cookies that needs to either be secure or persisted across browser sessions. It’s too easy for users to clear their cache and/or steal/manipulate unsecured cookies.

- Sessions: Are similar but not the same. Session is an entire hash that gets put in the secure session cookie that expires when the user closes the browser. If you look in your developer tools, the “expiration” of that cookie is “session”. Each value in the cookies hash gets stored as an individual cookie.

So cookies and sessions are sort of like temporary free database tables for you to use that are unique to a given user and will last until you either manually delete them, they have reached their expiration date, or the session is ended (depending on what you specified).

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?
- Testing...
### 9. Why would you use an instance variable in a rails controller?

### 10. Name two rails generator commands and what files they create:
- rails generate scaffold: Auto generates a set of model, views, and controller files and folders.
- rails generate resources:

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails? #
Rails is one of the older languages and has been popular for a long time so many websites use it and there are lots of resources. Rails also has a built in structure that allows you to build a website very quickly. It is also a full stack language.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?
Rails is a monolithic application encompassing the

### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes

  2. Create the ____________

  code:
  ```
  class ____________ < ApplicationController

  def about
    _______________________
  end
  ```

  file: _____________________

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: _____________________


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

### 5. What is the public folder used for in Rails? #
It can hold static HTML files such as error message pages.

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie? #
Cookies are keya:value data pairs that store information in the web browser and saved in plain text, sessions are the encrypted version of cookies.

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?

### 9. Why would you use an instance variable in a rails controller?

### 10. Name two rails generator commands and what files they create: #
Rails g controller - writes boilerplate code, generates a controller separate from the model
rails g scaffold - auto generates the model, view, and controller and attributes to be reflected in the the model

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?
Ruby on Rails is a framework that is more readable and programmer friendly. It is known to be cost and time efficient.

1. It’s time-efficient. Ruby on Rails contains many ready-made plugins and modules, which allow developers not to waste time on writing boilerplate code. It’s proven that RoR teams build applications 30–40% faster than teams using other programming languages and frameworks.
2. It’s consistent. Developers follow standardized file storage and programming conventions that keep a project structured and readable. It also saves plenty of time.
3. It’s cost-effective. Ruby on Rails is an open source framework distributed under the MIT license, that means you don’t have to spend money on the framework itself. Gems let to add features without developing them from scratch, so it can save plenty of developer time and effort, too. You can find gems for any purpose and download them for free from GitHub, a platform where developers share open source code.
4. It provides excellent quality and promotes bug-free development. The Minitest tool built into the Rails core is a comprehensive test suite that provides many useful testing features including expectation syntax, test benchmarking, and mocking. In addition, Ruby on Rails encourages test driven development (TDD) and behavior-driven development (BDD) approaches. You can read about them in the article How Test Driven Development (TDD) Helps You Cut Development Costs.
5. It’s scalable. If you expect to get a lot of users for your application you should make sure that it can cope with all the visitors you’re hoping to attract. About Rails scalability you can learn from another article What if I Tell You That Ruby on Rails Is Scalable.

Ruby on Rails Scalability
6. It’s supported. There is a majority of blogs and books, meetups and conferences in the Rails world.
7. It’s secure. Some security features are built into the framework and enabled by default. Using Ruby on Rails also means following the Secure Development Lifecycle, which is a complex security assurance process. We would recommend you one more article to study possible vulnerabilities in the article Ruby on Rails Web Application Vulnerabilities: How to Make Your App Secure.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?
In Ruby on Rails, this is the order of how MVC is used:
Browser > Controller > Model > Database > Model > Controller > View > Browser

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
  class __StaticsController___ < ApplicationController

  def about
    ____about_page_____
  end
  ```

  file: ___app/controllers/statics_controller______

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: ___app/views/statics/about.html.erb____


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

RESTful Routes are important because it connects HTTPS verbs with controller CRUD.
A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.

### 5. What is the public folder used for in Rails?
The public folder contains files like 404.html, 422.html, etc.
In many MVC frameworks (e.g. Rails), the public folder is used to serve static files. So for example, you often see 404.html, 500.html and favicon.ico files in there when creating the project through the "usual" means provided by such frameworks.
The role of the public folder is to have those views that would be publicly accessible in the application. For example, a Login page would generally be a page that anonymous users could access to then log into the site.

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"
get '/game' => 'main#guess'

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?
Cookies are used to store data input like username and it is saved in the browser. Session is a strict way to store information, but unlike cookie, data in session will not be saved in browser. Session is better for security.

cookies[:userid] = params[:userid] unless
params[:userid].nil?
cookies[:password] = params[:password] unless
params[:password].nil?

@name = cookies[:userid]
@password = cookies[:password]

Cookies are stored key/value pairs (with other attributes such as
expiry, domain, path and ssl requirements) in the client's browser.  The
specification for them is in the HTTP specification and these can
(generally) be read by backend languages such as Rails or frontend
technologies such as Javascript.

Sessions are an unrestricted storage area for applications, generally
used by the backend language only (due to encryption and hash protection with
server side secrets), although they may be stored in their entirety in a
client-side cookie for convenience to avoid "sticky sessions" where
requests have to come back to the same backend server.

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?
The action attribute will direct the form to the specific page. The HTTP verb will be designated by the method attribute.

ex) <form action = "game" method = "get">
  <input type = "number" name = "numberStuff" />
  <input type = "submit" value= "Submit your guess"  />
</form>


### 9. Why would you use an instance variable in a rails controller?
Instance variable is used so that the variables can be used outside of the declared a class. Other classes can use the instance variable without declaring again in another class.

An instance variable has a name beginning with @, and its scope is confined to whatever object self refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables. From outside the object, instance variables cannot be altered or even observed (i.e., ruby's instance variables are never public) except by whatever methods are explicitly provided by the programmer. As with globals, instance variables have the nil value until they are initialized.

Instance variables do not need to be declared. This indicates a flexible object structure; in fact, each instance variable is dynamically appended to an object when it is first assigned.



### 10. Name two rails generator commands and what files they create:
1. rails generate controller Statics
This command will generate a statics_controller.rb file.

2. rails generate controller Users index register
This command will generate users_controller.rb with the index and register def.

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

I have learned from guides.rubyonrails.org that I can save the instance variable in the controller and redirect it to itself.

def create
  @article = Article.new(params[:article])

  @article.save
  redirect_to @article
end

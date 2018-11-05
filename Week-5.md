# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?
Ruby on Rails is a good option for beginners and (relatively) small-scale endeavors because it utilizes Ruby which is a very plain-English language good for beginners. It is a full-stack framework which means a relatively novice coder can single-handedly develop a full stack application. Ruby on Rails is also a good choice because it has a lot of built-in intelligence, you can use 'generate' and 'scaffold' keywords from your terminal to essentially do all the heavy lifting on your behalf, including properly naming your files and classes.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?
Ruby on Rails uses MVC explicitly. A project's file system contains the 'model', 'view', and 'controller' directories, in which properly named and formatted files communicate information among each other in a neat flow. A request first engages the routes file which directs to a controller's method based on the request. If the request requires database access, the controller will first query using a model. Controller methods terminate with a render or redirect method, which returns the correct view file as HTML and any necessary dynamic information as embedded Ruby for the client's browser to display.

### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes

  2. Create the __Statics controller__

  code:
  ```
  class __StaticsController__ < ApplicationController

  def about
    __render '/about.html.erb'__
  end
  ```

  file: __statics_controller.rb__

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: __about.html.erb__


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

The 7 methods and corresponding routes above are the built ins you get when you use the scaffold function. They encompass all of 'CRUD', create read update destroy, the verbs that explain the most basic functionality of all web sites.

### 5. What is the public folder used for in Rails?
The public folder is for pages and data that should be accessible to all clients, such as images and error responses.

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"
'/main/game/:guess' => 'main#game'

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?
Cookies and sessions are both used for semi-persistent data. Sessions are encrypted by default so they can't be seen directly by the client, and they tend to be used more when tied to the id of the current user. Cookies are more general information similarly stored in the browser that persists through page reloads.

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?
You can set the method attribute in the form to the correct HTTP verb. The action attribute along with the HTTP verb points to a route which executes the indicated method within the controller.

### 9. Why would you use an instance variable in a rails controller?
You would use an instance variable to pass dynamic information to a view.

### 10. Name two rails generator commands and what files they create:
$ rails generate controller [ControllerName] [method1] [method2]
Creates a ControllerName file that contains ControllerNameController class with 2 methods, method1 and method2. Also creates view files, method1.html.erb and method2.html.erb. Also creates test files.

$ rails generate scaffold ProjName attr1:datatype attr2:datatype
Automatically structures and names all controllers, view files, model files, tests, and other accessory files and folders for a full stack Rails application called ProjName with /attr1 and /attr2 pages and the essential CRUD operators for those pages and the root page.

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

I learned that you can use the generate commands at any point in your project. I initially assumed they were only to be used at the very beginning of the project, but it does seem like if you have a need for a whole new controller, you can just generate it even if you've already built out other functionality in your site.

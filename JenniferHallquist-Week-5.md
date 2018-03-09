# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?

- Can spin up an application quickly
- Is a complete MVC
- Large supporting community
- Convention over configuration => developers don't need to waste as much time
  deciding how to write code because there are already coding and structure
  styles in place
- Has great testing frameworks
- Open source

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?

When a new Rails project is generated, folders are created to contain models,
views, and controllers. Models are Ruby classes that have relationships with
the database. Models communicate with their respective tables to perform queries
like selecting, updating, inserting, and destroying records.

Views display the responses sent back from a request. Their file names end in
html.erb and erb stands for embedded Ruby. This allows us to evaluate or
execute Ruby code inside of HTML webpages.

Controllers receive the HTTP requests and then communicates with the models to
retrieve, save, update, etc the data. The controller then makes the data
available to the views so that it can be displayed.


### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes.rb

  2. Create the controller

  code:
  ```
  class StaticsController < ApplicationController

    def about; end

  end
  ```

  file: app/controllers/statics_controller.rb

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: app/views/statics/about.html.erb


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

I think this question is referring to RESTful routing.

REST stands for Representational State Transfer. RESTful routing is the Rails
standard for handling routes. Essentially, a RESTful route provides mapping
between HTTP verbs, controller actions, and database CRUD operations.

This principle is important because using REST makes for more readable code
and Rails already has conventions that help using REST feel more natural. This
is one example of adhering to the Rails motto of convention over configuration.

As an example of how a RESTful route works, navigating to the /users/ URL will
create an HTTP get request. This request will invoke the users controller's
index action. The users table will be queried to select all records.
Finally, the response will be sent back, and a list of all users will be
displayed in the view.

### 5. What is the public folder used for in Rails?

Contains files that don't normally change, like images, static HTML pages, some
JavaScript files.

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"

get 'game/:guess' => 'main#guess'

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?

Cookies are computer files that hold data belonging to a specific user or
website. They can be accessed by web servers and allow webpages to display
user-specific information, such as that user's name or username. Cookies contain
key-value pairs. By default, they expire when the browser is closed but can be
made to persist for longer than that. Data is stored inside a cookie typically
on page loading. For example, when someone submits a login form, information
about that user is stored inside a cookie to prevent that person from having
to log in again the next time they visit that page.

Whereas cookies are stored in the browser, session data is stored on the server,
so sessions are more secure.

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?

This attribute specifies where to send the form data on submission. The "method"
attribute lets you designate the HTTP verb for the form.

### 9. Why would you use an instance variable in a rails controller?

Declaring controller variables as instance variables makes them available in
the view.

### 10. Name two rails generator commands and what files they create:

`rails generate migration`
This will create a file inside the db/migrate directory. The file name will
begin with a timestamp corresponding to when the migration was generated. Rails
will use the timestamps when determining the order in which to run the
migration files. Depending on what arguments, if any, were passed to the
`rails generate migration` command, the migration file will either contain
an empty "change" method or the appropriate statements for whatever changes you
wanted to make to the database.

`rails generate controller <name of Controller> <name of action>`
If we wanted to create a controller named Users with a "register" action, this
command would create a controller file named `users_controller.rb`, a view file
named `register.html.erb`, a test file, a helper file, a CoffeeScript file, and
a stylesheet. It would also create a route that gets "users/register".


### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

We can perform validation within our Model classes. For example, if we have a
users table that contains a email column that cannot be null, then we can add
`validates_presence_of :email` to the User model. This will make sure that when
a user fills out the registration form, the email field cannot be left empty.

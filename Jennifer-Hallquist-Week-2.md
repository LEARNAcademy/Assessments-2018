### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

//Your Answer

Inside the `<head> </head>` tags, use `<link />` to include your CSS file.


//Googled Answer

With an external style sheet, you can change the look of an entire website by changing just one file.

Each page must include a reference to the external style sheet file inside the `<link>` element. The `<link>` element goes inside the `<head>` section:


`<link rel="stylesheet" type="text/css" href="style.css"`


#### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?

//Your Answer

A CSS class allows us to re-use styling on multiple elements. All elements that we have attributed the class to will use the same styling.

To use CSS classes in HTML, add a `class` property to an element and give it the name of the class. For example: `<div class="container"></div>`

IDs should be used when we won't want to repeat styling on elements.

//Googled Answer

The .class selector selects elements with a specific class attribute.

You can apply a class to an HTML element like this:

`<h2 class="blue-text">CatPhotoApp</h2>`

HTML elements can have more than one class name, each class name must be separated by a space.

In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”).

The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.


#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

```
.heading-box {
border: 5px solid #000;
display: flex;
justify-content: center;
align-items: center;
}
```

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?

//Your Answer

Bootstrap is a front-end web development tool that includes many different kinds of components that we typically see on websites. They include buttons, navigation bars, tables, grid layouts, dialogs, etc.

You might choose to use Bootstrap because the components are responsive. The media queries are helpful in creating mobile-friendly interfaces. Bootstrap is very popular, so there's a large community that's answering questions about it when you don't understand something. Also, it's still being regularly maintained.


//Googled Answer

Bootstrap is a free and open-source front-end library for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only.

Bootstrap 3 supports the latest versions of the Google Chrome, Firefox, Internet Explorer, Opera, and Safari (except on Windows).

Since 2.0, Bootstrap supports responsive web design. This means the layout of web pages adjusts dynamically, taking into account the characteristics of the device used (desktop, tablet, mobile phone).

Starting with version 3.0, Bootstrap adopted a mobile-first design philosophy, emphasizing responsive design by default.


#### 5. Name 4 semantic html tags.
Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages and web applications rather than merely to define its presentation or look.

Some semantic HTML tags are `<nav>`, `<article>`, `<footer>`, `<figure>`.


#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped.

//Your Answer

A block is code enclosed with curly brackets. Block scope refers to scoping variables to their respective blocks.

In contrast, JavaScript's global scope includes variables declared outside of functions. Local scope may refer to the scope of variables declared inside functions.

`let` and `const` are block scoped.

//Googled Answer

A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets and may optionally be labelled.

Variables declared with `var` do not have block scope. Variables introduced with a block are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. In other words, block statements do not introduce a scope.

By contrast, identifiers declared with `let` and `const` do have block scope

#### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

//Your Answer

Front-end development largely focuses on the view layer of web applications. It may include working with HTML, CSS, JavaScript, and front-end frameworks.

An eye for web design may be required of front-end developers more so than of back-end developers. Being comfortable with image-editing software may also be useful.

//Googled Answer

Front-end web development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.

The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site. They need to ensure that their site comes up correctly in different browsers (cross-browser), different operating systems (cross-platform) and different devices (cross-device), which requires careful planning on the side of the developer.

HyperText Markup Language (HTML) is the backbone of any website development process, without which a web page doesn't exist.

Cascading Style Sheets (CSS) controls the presentation aspect of the site and allows your site to have its own unique look.

JavaScript is an event-based imperative programming language (as opposed to HTML's declarative language model) that is used to transform a static HTML page into a dynamic interface.

#### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

String interpolation is a different way of concatenating strings that lets you pass in variables using template string syntax. This can cut down on the number of new strings you create when concatenating with `+`.

```
const firstName = "Kiba";
const lastName = "Hallquist";

const myName = `My name is ${firstName} ${lastName}`;
```

In the above example, the backticks are required to use string interpolation. We use `${var_name}` syntax to concatenate the firstName and lastName variables.


#### 9. What is the difference between a div and a span?


//Your Answer

A div can contain large amounts of text or hold more content. A span is typically used for short pieces of text or code.

//Googled Answer

The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.


#### 10. How would you explain the idea of "inheritance" in object oriented programming?

//Your Answer

In OOP, we create classes that act as blueprints for objects we can instantiate from the class.

When creating a class, we can give it properties and methods. Every instance of that class will have those same properties and methods.

But if we want to create a new class that may be similar to the original class but has a few new methods or properties, inheritance would be really useful here.

If a child class extends a parent class, then the child class will inherit its parent's methods and properties. But this child can also have its own unique methods and properties too.

//Googled Answer

Inheritance is when a class uses code constructed within another class. If we think of inheritance in terms of biology, we can think of a child inheriting certain traits from their parent. That is, a child can inherit a parent’s height or eye color. Children also may share the same last name with their parents.

Classes called child classes or subclasses inherit methods and variables from parent classes or base classes.

We can think of a parent class called Parent that has class variables for last_name, height, and eye_color that the child class Child will inherit from the Parent.

Because the Child subclass is inheriting from the Parent base class, the Child class can reuse the code of Parent, allowing the programmer to use fewer lines of code and decrease redundancy.

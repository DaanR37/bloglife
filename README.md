# Social Brothers

## Introduction

Thank you for the nice conversation! As promised, the front-end case. You can e-mail the finished case to me (Luuk@socialbrothers.nl).

Good luck!

## The case

You received an invitation to a Invision project which you have to recreate. When logged in to your account, you can click the inspect button to inspect the exact values being used in the design (margins, colors, etc.).

Be sure to hand in your project in a state that is ready for production.

The functionality that should be in the application is:

- **Creating blogposts**: Blogposts should be able to be created in the form on the left-hand side of the homepage. The endpoint that this data should be submitted to is documented in the [Postman collection](https://documenter.getpostman.com/view/3923287/UVJWrfnK). All inputs should be required. Be sure to make using this form a user-friendly experience.

- **Showing the lastest blogposts**: On the right-hand side there should be a preview of the latest 4 posts. There should also be a button to load the next 4 posts. Those posts should be appended to the current posts, not replaced.

- **Showing the blog archive**: On the "Blog"-page, there should be an archive of all blog posts. These blogs should be able to be paginated, so that the user can navigate to next or previous pages. Tip: use a library for rendering the pagination component. Implementing this yourself in a UX-friendly way will take quite some time. Invest this time in the general UX and functionality of the application.

- **Navigation**: The user should be able to navigate to the different pages through a menu.

These are the requirements that we set. Please fill these requirements in a way that you think is most UX-friendly. Also, don't be shy to add any other details that might not explicitely be described hereabove, if you think that it improves the user experience.

## The API

The API returns file paths relative to the filestorage location of the server. This filestorage location is `{{apiUrl}}/storage`. That means if you receive a path value of '/images/sample-image.pong', it will be hosted al `{{apiUrl}}/storage/images/sample-image.png`. The API documentation is available via [Postman](https://documenter.getpostman.com/view/3923287/UVJWrfnK).

## What are the ranking criteria?

The first thing we look at, is whether the functionalities above are implemented and whether the design has been followed in a detailed manner. This is more or less the minimum to qualify for the next round in the interview process. If that's met, we judge your seniority by the following aspects (in random order):

- Structured, reusable code
- Perfomance / SEO
- Maintainability of code
- Choise of techniques
- Good understanding of programming principles
- User experience
- Additional functionalities/details

# FamilySpot
This frontend web application is a fictitious Family Reunion App. It's purpose is to show how to internalize and organzie browser code as well as to showcase how I like to work.

## Base Requirements

- Create a high-fidelity version of the FamilySpot main screen, which breaks responsively to mobile width. (As demonstrated in the sketch file).
- When you click the 'Edit Info' button, it launches a live edit modal. Changes to the modal should reflect on the screen after you click 'Save.'
- Don't worry about session management/account creation/login. It's fine to store data in localstorage, or even a global variable.

## Additional Features
- Using Everplan's [React Boilerplate](https://github.com/everplans/react-boilerplate).
- Useing frontend integration tests (mocha, jasmine, etc.). Also provided in Everplan's React Boilerplate

## Tech and Libraries
- Front-End: [React.js](https://facebook.github.io/react/) JavaScript library
- [Webpack](https://webpack.github.io/) for model bundler and Node.js server, [Stylus](http://stylus-lang.com/) for dynamic CSS (Part of Everplan's React Boilerplate).  
- Form Modal: [W3Schools](http://www.w3schools.com/howto/howto_css_modals.asp) How To: CSS/JS Modal

## Takeaways from this Project
- Would love to explore more using Stylus - incorporate more dynamic values for colors, margin, padding, and font sizes, and conditional statemens for breakpoints.
- A little clunky with using SVGs for icons and small images.

## Future Features?
- Allow user login
- Connect all form and application data to database, rather then preset-state storage
- Allow to add/modify/delete Invites and Activities

## Running this Application
Fork or clone this repo and run from command line...

```
$ ~/FamilySpot: npm install
```
...run localhost server using webpack...

```
$ ~/FamilySpot: npm run dev
```
...and view in broswers on [http://localhost:3001/](http://localhost:3001)

View Running Application from [Heroku](https://family-spot.herokuapp.com/)

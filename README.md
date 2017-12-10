This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [What is a Book Trackin App](#about-app)
  -[App Functionality](#app-functionality)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Something Missing?](#something-missing)

## What is a Book Trackin App

This is my UDACity project which I am working to submit the concept of the fundaments about REACT.

In the project, I'll create a bookshelf app that allows me to select and categorize books I have read, am currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that I will use to persist information as I interact with the application.

### `App Functionality`

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

1. Currently Reading
2. Want to Read
3. Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let me know](http://www.sumitkumartiwari.com) or [Write a suggestion or create a issues](https://github.com/sumittiwari87/react-books-tracking-app.git)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [What is a Book Trackin App](#about-app)
  - [App Functionality](#app-functionality)
- [Available Scripts](#available-scripts)
  - [npm install](#npm-install)
  - [npm start](#npm-start)

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

When a book is on a bookshelf, it should have the same state on both the main application page. On the search page also When it is not already on a bookshelf, it should be checked as "None".

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## Available Scripts

In the project directory, you can run:
### `npm install`

Open the terminal and go to the project root directory `cd project-root-directory`

Then run the command `npm install`<br>
 
It will install all the `dependencies` required to run the application. Before running the app, do not forget to install the `dependencies`.
 
### `npm start`

After installing the dependencies, run the command `npm start`

It will run the app in the development mode<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

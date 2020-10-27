This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

Install Node on your machine from https://nodejs.org/en/download/
Clone the repository locally
In your terminal, go to the `test-sketch` directory and run `npm start`
The app will start in your browser

## Project structure

### used atomic design

assets - holds all the images
components - dumb components
pages - Home and Document, the 2 pages of the app
sections - the distinct section of a view. A view is a way to display the document data. You can view the document as a list of artboards OR a full size artboard with navigator at the top
style - anything related to global styling
app.jsx
index.jsx - entry point

## What I used

### for pretty code and no nitpick review comments

`prettier` and `eslint` with `eslint-config-airbnb` and `eslint-config-prettier`
format on save file

### coding

`react` hooks
`react-router-dom` for routing
`@apollo/client` for running graph ql queries
`prop-types` to do props validation

### styling

first time using `styled-components`
used `styled-reset` to reduce browser inconsistencies
defined a global theme with reusable component styles and variables (could divide it further into files)

## If I had more time

a git hook for linting
would have liked to decouple the sections code from the server object structure, make them agnostic of it - write some adapters

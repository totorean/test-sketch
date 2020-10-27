This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

Install Node on your machine from https://nodejs.org/en/download/<br/>
Clone the repository locally<br/>
In your terminal, go to the `test-sketch` directory and run `npm i && npm start`<br/>
The app will start in your browser on http://localhost:3000/<br/>

## Project structure

### used atomic design

assets - holds all the images<br/>
components - dumb components<br/>
pages - Home and Document, the 2 pages of the app<br/>
sections - the distinct section of a view. A view is a way to display the document data. You can view the document as a list of artboards OR a full size artboard with navigator at the top<br/>
style - anything related to global styling<br/>
app.jsx<br/>
index.jsx - entry point<br/>

## What I used

### for pretty code and no nitpick review comments

`prettier` and `eslint` with `eslint-config-airbnb` and `eslint-config-prettier`<br/>
format on save file

### coding

`react` hooks<br/>
`react-router-dom` for routing<br/>
`@apollo/client` for running graph ql queries<br/>
`prop-types` to do props validation<br/>

### styling

first time using `styled-components`<br/>
used `styled-reset` to reduce browser inconsistencies<br/>
defined a global theme with reusable component styles and variables (could divide it further into files)<br/>

## If I had more time

a git hook for linting<br/>
would have liked to decouple the sections code from the server object structure, make them agnostic of it - write some adapters

# App-movies π₯ ποΈ

## Description

This is an App created with React and Redux, using the [TMDB API.](https://www.themoviedb.org/documentation/api?language=es)

[Live demo!](https://upbeat-brattain-c6f23e.netlify.app/)

Hope you like it! πΏ 

## Getting started

You need to have installed [Node.js](https://nodejs.org/), and then:

1. `$ git clone git@github.com:pmontesano/app-movies.git`
2. `$ npm i`
3. `$ npm run start-dev` + open `http://localhost:3000/`

## Structure

```
app-movies
βββ public
β   βββ favicon.ico
β   βββ index.html
β   βββ manifest.json
βββ src
β   βββ actions
β   β   βββ ...
β   β   assets
β   β   βββ ...
β   β   auth
β   β   βββ ...
β   β   bookmarks
β   β   βββ ...
β   β   client
β   β   βββ ...
β   β 
β   βββ components
β   β   βββ bookmarks
β   β   β   βββ ...
β   β   βββ card
β   β   β   βββ ...
β   β   βββ image
β   β   β   βββ ...
β   β   βββ layout
β   β   β    βββ ...
β   β   βββ bookmarks
β   β   β   βββ ...
β   β   βββ list
β   β   β   βββ ...
β   β   βββ loading
β   β   β   βββ ...
β   β   βββ main
β   β   β   βββ ...
β   β   βββ modal
β   β   β   βββ ...
β   β   βββ movies
β   β   β   βββ ...
β   β   βββ rating
β   β   β   βββ ...
β   β   βββ skeleton
β   β   β    βββ ...
β   β   βββ slider
β   β   β   βββ ...
β   β   βββvideo
β   β
β   βββ config
β   β   βββ ...
β   βββ controllers
β   β   βββ ...
β   βββ config
β   β   βββ ...
β   βββ controllers
β   β   βββ ...
β   βββ pages
β   β   βββ bookmarks
β   β   β   βββ ...
β   β   βββ details
β   β   β   βββ ...
β   β   βββ login
β   β   β   βββ ...
β   β   βββ main
β   β   β    βββ ...
β   β   βββ notFound
β   β   β   βββ ...
β   β   βββ register
β   β   β   βββ ...
β   β   βββ search
β   β   β   βββ ...
β   βββ reducers
β   β   βββ ...
β   βββ routers
β   β   βββ ...
β   βββ server
β   β   βββ ...
β   βββ styles
β   β   βββ ...
β   βββ utils
β   β   βββ ...
β   βββ styles
β   β   βββ ...
|   βββ index.js
βββ .babelrc
βββ webpack.config.js
βββ package.json

```

## Skills 

- Javascript / ES6
- React.js + react-router 
- Redux 
- LocalStorage API
- Mui library Styled components +  Emotion Styled Components
- NodeJs / ExpressJs
- Formik
- Webpack, babel.

## How I worked and what are the reasons for my approach

- For the state management I've used Redux, to have all the states in one state manager. 
- For the bookmarks feature I've used useContext hook with localStorage API to save the user's favorite preferences. 
- To style the App, I've used Styled components and Mui library and Emotion Styled Components to set up the UI.

## To Do

* Tests with Jest


# App-movies 🎥

## Description

This is an App created with React and Redux, using the [TMDB API.](https://www.themoviedb.org/documentation/api?language=es)

[See a demo!](https://upbeat-brattain-c6f23e.netlify.app/)

Hope you like it! 🍿 

## Getting started

You need to have installed [Node.js](https://nodejs.org/), and then:

1. `$ git clone https://github.com/leireriel/shopping-cart.git`
2. `$ npm i`
3. `$ npm run dev` + open `http://localhost:3000/`

## Structure

```
app-movies
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── actions
│   │   └── ...
│   │   assets
│   │   └── ...
│   │   auth
│   │   └── ...
│   │   bookmarks
│   │   └── ...
│   │   client
│   │   └── ...
│   │ 
│   ├── components
│   │   ├── bookmarks
│   │   │   └── ...
│   │   ├── card
│   │   │   └── ...
│   │   ├── image
│   │   │   └── ...
│   │   ├── layout
│   │   │    └── ...
│   │   ├── bookmarks
│   │   │   └── ...
│   │   ├── list
│   │   │   └── ...
│   │   ├── loading
│   │   │   └── ...
│   │   ├── main
│   │   │   └── ...
│   │   ├── modal
│   │   │   └── ...
│   │   ├── movies
│   │   │   └── ...
│   │   ├── rating
│   │   │   └── ...
│   │   └── skeleton
│   │   │    └── ...
│   │   ├── slider
│   │   │   └── ...
│   │   └──video
│   │
│   ├── config
│   │   └── ...
│   ├── controllers
│   │   └── ...
│   ├── config
│   │   └── ...
│   ├── controllers
│   │   └── ...
│   ├── pages
│   │   ├── bookmarks
│   │   │   └── ...
│   │   ├── details
│   │   │   └── ...
│   │   ├── login
│   │   │   └── ...
│   │   ├── main
│   │   │    └── ...
│   │   ├── notFound
│   │   │   └── ...
│   │   ├── register
│   │   │   └── ...
│   │   ├── search
│   │   │   └── ...
│   ├── reducers
│   │   └── ...
│   ├── routers
│   │   └── ...
│   ├── server
│   │   └── ...
│   ├── styles
│   │   └── ...
│   ├── utils
│   │   └── ...
│   ├── styles
│   │   └── ...
|   └── index.js
└── .babelrc
└── webpack.config.js
└── package.json

```

## Skills 

⚙️ Javascript / ES6
⚙️ React.js + react-router 
⚙️ Redux 
⚙️ LocalStorage API
⚙️ Mui library Styled components +  Emotion Styled Components
⚙️ NodeJs / ExpressJs
⚙️ Formik
⚙️ Webpack, babel.

## How I worked and what are the reasons for my approach

- For the state management I've used Redux, to have all the states in one state manager. 
- For the bookmarks feature I've used useContext hook with localStorage API to save the user's favorite preferences. 
- To style the App, I've used Styled components and Mui library and Emotion Styled Components to set up the UI.

## To Do

* Tests with Jest


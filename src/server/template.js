const root = (component, initialState) =>
  `<!DOCTYPE html>
        <html>
        <head>
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.netlify.com/img/global/favicon/apple-touch-icon.png">
         <meta name="viewport" content="width=device-width, initial-scale=1">
          <script>window._PRELOADED_STATE = ${JSON.stringify({
            initialState,
          })}</script>
          <link rel="stylesheet" type="text/css" href="/app.css" />
        </head>
        <body>
        <div id="app">${component}</div>
        <script src="/app.js"></script>
      </body>
      </html>`;

export default root;

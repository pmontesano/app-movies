const root = (component, initialState) =>
  `<!doctype html>
        <html>
        <head>
          <script>window._PRELOADED_STATE = ${JSON.stringify({
            initialState,
          })}</script>
        </head>
        <body>
        <div id="root">${component}</div>
        <script src="/static/bundle.js"></script>
      </body>
      </html>`;

export default root;

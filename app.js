var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(8888);


// Client ID fee7a3c135dc44e69557d6eb151a4ef5

// Client Secret b8a00147732d4495864e25cba6b5ff66

const config = {
    clientId: "<SPOTIFY CLIENT ID>",
    redirectUrl: "<REDIRECT URL, MUST MATCH WITH AUTH ENDPOINT AND SPOTIFY DEV CONSOLE>",
    scopes: ["streaming"], // see Spotify Dev console for all scopes
    tokenExchangeUrl: "<URL OF TOKEN EXCHANGE HTTP ENDPOINT>",
    tokenRefreshUrl: "<URL OF TOKEN REFRESH HTTP ENDPOINT>",
  };
  
  cordova.plugins.spotifyAuth.authorize(config)
    .then(({ accessToken, expiresAt }) => {
      console.log(`Got an access token, its ${accessToken}!`);
      console.log(`Its going to expire in ${expiresAt - Date.now()}ms.`);
    });
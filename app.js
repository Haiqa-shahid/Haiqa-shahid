const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My DevOps App</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f4f4f4; }
        h1 { color: #333; }
        p { color: #666; }
        a { text-decoration: none; color: #007bff; }
      </style>
    </head>
    <body>
      <h1>Welcome to My DevOps App!</h1>
      <p>This is running on Node.js and Express </p>
      <p><a href="/about">Learn more</a></p>
    </body>
    </html>
  `);
});


app.listen(3000);

// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// const port = 8080;

// app.get("/", (req, res) => {
//   res.send("Hello from the backend!");
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(`Received message => ${message}`);
    server.clients.forEach((client) => {
      client.send(message);
    });
  });
});

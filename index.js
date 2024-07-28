const express = require('express')
const http = require("http");
const fs= require('fs')
const app = express();
const indexrouter = require("./routes/index");
const apirouter = require("./routes/api")
require('dotenv').config();
const { mongodbaccess } = process.env
const port = 3000;
const server = http.createServer(app);
const { connect, connection } = require('mongoose')
const chatSchema = require('./schema/chat')
app.use(express.static(__dirname + '/public/'));
app.use("/api", apirouter);



app.all('*',(req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
})


connection.on("connection", (stuff) => {
    console.log("[MongoDB] Connecting...");
});
connection.on("connected", (stuff) => {
    console.log("[MongoDB] Connected!");
});
connection.on("disconnected", (stuff) => {
    console.log("[MongoDB] Disconnected...");
});
connection.on("err", (stuff) => {
    console.log("[MongoDB] ERR");
});
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  (async () => {
    await connect(mongodbaccess).catch(console.error)
})();
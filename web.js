const express = require('express')
const http = require("http");
const fs= require('fs')
const app = express();
const indexrouter = require("./routes/index");
const port = 3000;
const server = http.createServer(app);
app.use(express.static(__dirname + '/public/'));


app.get("/chatmessage", (req, res) => {

})

app.post("/sendmessage", (req, res)=> {
    const { name } = req.body;
})
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
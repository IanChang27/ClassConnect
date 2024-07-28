var express = require("express");
const http = require("http");
const mongoose = require('mongoose')
var router = express.Router();
const chatSchema = require('../schema/chat')
const app = express();
const { rateLimit } = require("express-rate-limit");
const bodyParser = require("body-parser");
router.use(bodyParser.json())
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    limit: 10, // each IP can make up to 10 requests per `windowsMs` (5 minutes)
    standardHeaders: true, // add the `RateLimit-*` headers to the response
    legacyHeaders: false, // remove the `X-RateLimit-*` headers from the response
  });
router.get("/", function (req, res, next) {
    res.send("OK");
});
router.get("/chatmessage",limiter, (req, res) => {
    (async () => {
        const getallmessages = await chatSchema.find();
        console.log(getallmessages)
        res.json(getallmessages)
    })();
})

router.post("/sendmessage",limiter, (req, res) => {
    (async () => {
        console.log(req)
        let newmessage = new chatSchema({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            message: req.body.message
        })
        await newmessage.save().catch(console.log)
        res.json({
            success: true
        })
    })();
})

module.exports = router;

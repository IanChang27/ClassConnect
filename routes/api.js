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
    windowMs: 5 * 60 * 1000, 
    limit: 10, 
    standardHeaders: true, 
    legacyHeaders: false,
  });
  const limiter2 = rateLimit({
    windowMs: 5 * 60 * 1000, 
    limit: 100, 
    standardHeaders: true, 
    legacyHeaders: false,
  });
router.get("/", function (req, res, next) {
    res.send("OK");
});
router.get("/chatmessage",limiter2, (req, res) => {
    (async () => {
        const getallmessages = await chatSchema.find();
        res.json(getallmessages)
    })();
})

router.post("/sendmessage",limiter, (req, res) => {
    (async () => {
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

router.post("/submitform", limiter, (req, res) => {
    res.redirect("/thank_you.html")
})

module.exports = router;

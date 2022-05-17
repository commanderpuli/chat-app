const express = require('express');
const { json } = require('express/lib/response');

const app = express();

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

app.listen(3000);

let messages = [];

app.post("/newmessage", (req, res) => {
    res.send("received!")
    console.log(req.body)
    messages.push(req.body)
    console.log(messages)
})

app.get("/", (req, res) => {
    res.render('index', {message:"world"})
})

app.get("/messages", (req, res) => {
    res.json(messages);
})
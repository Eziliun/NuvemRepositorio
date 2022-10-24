var express = require("express");
var app = express();
var fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const login = fs.readFileSync("login.html", "utf8");
const register = fs.readFileSync("register.html", "utf8");
app.get("/", (req, res) => {
    res.end(html);
})
app.get("/login", (req, res) => {
    res.end(login);
});
app.get("/register", (req, res) => {
    res.end(register);
});
app.post("/session", (req, res) => {
    console.log(req.body)
});

app.listen(8080, err => {
    if(err) {
        console.log(err);
    } else {
        console.log("Iniciou!!")
    }
})
var express = require("express");
var fs = require("fs");
const { ppid } = require("process");
var app = express();

var html = fs.readFileSync("Login.html");

app.get("/", function(request, response){
    response.end(html);
});

app.get("/login/:nome?", function(request, response){
   let nome =  request.query.name;
   let idade = request.query.idade;
    if (nome == undefined) {
        nome = String("usuário");
    }
    response.end("Bem vindo, " + String(nome) + "!" + idade);
});

app.get("/nome/: teste", function(request, response){
    let nome = request.params.teste;
    response.end("Seu nome eh: " + nome);
});

app.listen(8080, function(erro){
    if(erro){
        console.log(erro);
    }else{
        console.log("Servidor online");
    }
});
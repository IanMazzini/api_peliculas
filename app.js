const express = require('express');
const app = express();
const port = 3000;

const pelis = [
    {
        nombre: "Venom",
        codigo:1,
        estreno:"4 de octubre de 2018",
        genero:"accion",
        director:"Ruben Fleischer",
        espectadores:10000
    },
    {
        nombre: "Wonder Woman",
        codigo:2,
        estreno:"2 de junio de 2017",
        genero:"accion",
        director:"Patty Jenkins",
        espectadores:1000
    },
    {
        nombre: "The Avengers",
        codigo:3,
        estreno:"26 de abril de 2012",
        genero:"accion",
        director:"Joss Whedon",
        espectadores:100000
    },
    {
        nombre: "Jumanji",
        codigo:4,
        estreno:"11 de julio de 1996",
        genero:"Fantasia",
        director:"Joe Johnston",
        espectadores:1000
    },
    {
        nombre: "Jumanji: The Next Level",
        codigo:5,
        estreno:"9 de enero 2020",
        genero:"Aventura",
        director:"Jake Kasdan",
        espectadores:10000
    },
    {
        nombre: "Ready Player One",
        codigo:6,
        estreno:"29 de marzo de 2018",
        genero:"western",
        director:"Steven Spielberg",
        espectadores:1000
    },
    {
        nombre: "Deadpool",
        codigo:7,
        estreno:"11 de febrero de 2016",
        genero:"Accion",
        director:"Tim Miller",
        espectadores:10000
    },
    {
        nombre: "Deadpool 2",
        codigo:8,
        estreno:"1 de mayo de 2018",
        genero:"Accion",
        director:"David Leitch",
        espectadores:1000
    },
    {
        nombre: "X-Men",
        codigo:9,
        estreno:"14 de julio de 2000",
        genero:"accion",
        director:"Bryan Singer",
        espectadores:10000
    },
    {
        nombre: "X-Men: First Class",
        codigo:10,
        estreno:"25 de mayo de 2011",
        genero:"Accion",
        director:"Matthew Vaughn",
        espectadores:100
    }
]


app.get("/", function(req,res){
    res.send(pelis);
});

app.get("/pelis/:codigo",function(req,res){
    let a = req.params.codigo;
    res.send(pelis.find(e=>e.codigo==a));
});

app.get("/pelis", function(req,res){
    res.send(pelis.sort(function(x,y){
        return y.views-x.views;
    }));
});

app.listen(port, function(){
    console.log("El servidor esta funcionando en el puerto 3000");
})
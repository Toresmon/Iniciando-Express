const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();
const port = 5000;
let precio = 0;

app.get('/quepuerto', (request, response) => {
    response.send(`el puerto utilizado es ${port}`)
  });

  app.post('/frutasyverduras', (request, response) => {
    precio+= app.body.precio;
    response.send(`el precio de las frutas es de ${precio}`)
  });

const response = require('express');
const express = require('express');
const request = require('http');
const app = express();
const port = 5000;
let precio = 0;
let determinante = 0;



app.get('/quepuerto', (request, response) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

  app.post('/frutasyverduras', (request, response) => {
    for(x of request.body){
      if(x.tipo == "fruta"){
          precio += x.precio;
      }
    }
    response.send(`el precio de las frutas es de ${precio}`)
  });

  app.post('/determinante', (req, res) => {
    determinante = (req.body[0][0]*req.body[1][1])-(req.body[1][0]*req.body[0][1]);
    res.send(`el determinante de la matriz es: ${determinante}`)
  });
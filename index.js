const express = require("express");
const app = express();
const prueba = require("./prueba.json")

app.get('/', function (req, res) {
    res.send(
      "hola"
    );
  });

app.get('/updates', function (req, res) {
  res.send(
    prueba
  );
});
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});
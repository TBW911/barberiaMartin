const express = require("express");
const elementoSchema = require("../models/elemento");
const datoSchema = require("../models/datos");

const router = express.Router();

router.get("/save-data/:valores", (req, res) => {
  elementoSchema
    .find()
    .then((data) => {
        console.log("Respuesta Recibida");
      const { valores } = req.params;
      let arreglo_datos = valores.split("_");

      let temp = {
        elemento: "Temperatura",
        valor: arreglo_datos[0],
      };

      let humedad = {
        elemento: "Humedad",
        valor: arreglo_datos[1],
      };

      let distancia = {
        elemento: "Distancia",
        valor: arreglo_datos[2],
      };

      const datos = datoSchema(temp);
      datos
        .save();

        const dato = datoSchema(humedad);
      dato
        .save();

        const dat = datoSchema(distancia);
      dat
        .save();


let datosFormateados={};
      data.forEach((item, index) => {
        datosFormateados[item.elemento] = item.statusdato;
      });

      res.json(datosFormateados);
    })
    .catch((error) => res.json({ message: error }));
});

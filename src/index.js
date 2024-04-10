const express = require('express');
const { default: mongoose } = require('mongoose');
require("dotenv").config();
const elementoRoutes = require("./routes/elemento");
const datoRoutes = require("./routes/datos");
const saveRoutes = require("./routes/save");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;
const dbURI = process.env.DB_URI;



mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conexión a MongoDB establecida correctamente');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  });

//middleware
app.use(express.json());
app.use(cors());
app.use('/api', elementoRoutes);
app.use('/api', datoRoutes);
//app.use('/api', saveRoutes);

//routes
app.get('/', (req, res) => {
  res.send('Ejecutando API REST con Node.js y Express')
})

// Escuchar en todas las interfaces de red
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${port}`);
});

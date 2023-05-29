const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) /*Turn to true to activate x-www-form-urlencoded*/
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Bonjour API Simulateur est fonctionnel, it's ready!");
});

// Require employee routes
const clientsRoutes = require('./src/routes/clients.routes')
const simulationRoutes = require('./src/routes/simulateur.routes')

// using as middleware
app.use('/api/v1/clients', clientsRoutes)
app.use('/api/v1/simulations', simulationRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
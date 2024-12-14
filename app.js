require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const truckRoutes = require('./routes/truckRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const repairRoutes = require('./routes/repairRoutes');
const customerRoutes = require('./routes/customerRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');
const tripRoutes = require('./routes/tripRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/trucks', truckRoutes);
app.use('/employees', employeeRoutes);
app.use('/repairs', repairRoutes);
app.use('/customers', customerRoutes);
app.use('/shipments', shipmentRoutes);
app.use('/trips', tripRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

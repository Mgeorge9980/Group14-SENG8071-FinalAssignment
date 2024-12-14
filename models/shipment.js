module.exports = (sequelize, DataTypes) => {
  const Shipment = sequelize.define('Shipment', {
    weight: DataTypes.FLOAT,
    value: DataTypes.FLOAT,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    customerId: DataTypes.INTEGER,
  });
  return Shipment;
};

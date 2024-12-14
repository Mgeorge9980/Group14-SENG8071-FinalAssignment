module.exports = (sequelize, DataTypes) => {
  const Truck = sequelize.define('Truck', {
    brand: DataTypes.STRING,
    load_capacity: DataTypes.FLOAT,
    year: DataTypes.INTEGER,
    num_repairs: DataTypes.INTEGER,
  });
  return Truck;
};

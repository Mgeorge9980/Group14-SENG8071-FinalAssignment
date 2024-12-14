module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    route_from: DataTypes.STRING,
    route_to: DataTypes.STRING,
    truckId: DataTypes.INTEGER,
    driver1Id: DataTypes.INTEGER,
    driver2Id: DataTypes.INTEGER,
  });
  return Trip;
};

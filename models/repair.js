module.exports = (sequelize, DataTypes) => {
  const Repair = sequelize.define('Repair', {
    truckId: DataTypes.INTEGER,
    mechanicId: DataTypes.INTEGER,
    estimated_time_days: DataTypes.INTEGER,
  });
  return Repair;
};

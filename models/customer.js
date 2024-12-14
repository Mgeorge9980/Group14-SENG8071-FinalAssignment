module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number_1: DataTypes.STRING,
    phone_number_2: DataTypes.STRING,
  });
  return Customer;
};

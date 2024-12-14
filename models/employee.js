module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    seniority: DataTypes.INTEGER,
    role: DataTypes.STRING,
    specialization: DataTypes.STRING,
  });
  return Employee;
};

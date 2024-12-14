const { Truck } = require('../models');

const TruckRepository = {
  createTruck: (data) => Truck.create(data),
  getAllTrucks: () => Truck.findAll(),
  getTruckById: (id) => Truck.findByPk(id),
  updateTruck: (id, data) => Truck.update(data, { where: { id } }),
  deleteTruck: (id) => Truck.destroy({ where: { id } }),
};

module.exports = TruckRepository;

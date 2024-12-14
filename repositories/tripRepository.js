const { Trip } = require('../models');

const TripRepository = {
  createTrip: (data) => Trip.create(data),
  getAllTrips: () => Trip.findAll(),
  getTripById: (id) => Trip.findByPk(id),
  updateTrip: (id, data) => Trip.update(data, { where: { id } }),
  deleteTrip: (id) => Trip.destroy({ where: { id } }),
};

module.exports = TripRepository;

const { Shipment } = require('../models');

const ShipmentRepository = {
  createShipment: (data) => Shipment.create(data),
  getAllShipments: () => Shipment.findAll(),
  getShipmentById: (id) => Shipment.findByPk(id),
  updateShipment: (id, data) => Shipment.update(data, { where: { id } }),
  deleteShipment: (id) => Shipment.destroy({ where: { id } }),
};

module.exports = ShipmentRepository;

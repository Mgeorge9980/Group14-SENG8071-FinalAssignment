const request = require('supertest');
const app = require('../app');
const { Truck } = require('../models');

describe('Truck API', () => {
  beforeEach(async () => {
    await Truck.destroy({ where: {}, truncate: true });
  });

  it('should create a new truck', async () => {
    const response = await request(app)
      .post('/trucks')
      .send({ brand: 'Volvo', load_capacity: 15, year: 2020, num_repairs: 0 });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.brand).toBe('Volvo');
  });

  it('should fetch all trucks', async () => {
    await Truck.create({ brand: 'Volvo', load_capacity: 15, year: 2020, num_repairs: 0 });
    const response = await request(app).get('/trucks');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
  });

  it('should fetch a truck by ID', async () => {
    const truck = await Truck.create({ brand: 'Volvo', load_capacity: 15, year: 2020, num_repairs: 0 });
    const response = await request(app).get(`/trucks/${truck.id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.brand).toBe('Volvo');
  });

  it('should update a truck', async () => {
    const truck = await Truck.create({ brand: 'Volvo', load_capacity: 15, year: 2020, num_repairs: 0 });
    const response = await request(app)
      .put(`/trucks/${truck.id}`)
      .send({ brand: 'Mercedes' });
    expect(response.statusCode).toBe(204);

    const updatedTruck = await Truck.findByPk(truck.id);
    expect(updatedTruck.brand).toBe('Mercedes');
  });

  it('should delete a truck', async () => {
    const truck = await Truck.create({ brand: 'Volvo', load_capacity: 15, year: 2020, num_repairs: 0 });
    const response = await request(app).delete(`/trucks/${truck.id}`);
    expect(response.statusCode).toBe(204);

    const deletedTruck = await Truck.findByPk(truck.id);
    expect(deletedTruck).toBeNull();
  });
});

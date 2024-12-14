const request = require('supertest');
const app = require('../app');
const { Repair } = require('../models');

describe('Repair API', () => {
  beforeEach(async () => {
    await Repair.destroy({ where: {}, truncate: true });
  });

  it('should create a new repair', async () => {
    const response = await request(app)
      .post('/repairs')
      .send({ truckId: 1, mechanicId: 1, estimated_time_days: 3 });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.truckId).toBe(1);
  });
});

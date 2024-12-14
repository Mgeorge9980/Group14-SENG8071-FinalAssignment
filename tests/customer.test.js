const request = require('supertest');
const app = require('../app');
const { Customer } = require('../models');

describe('Customer API', () => {
  beforeEach(async () => {
    await Customer.destroy({ where: {}, truncate: true });
  });

  it('should create a new customer', async () => {
    const response = await request(app)
      .post('/customers')
      .send({ name: 'Jane Doe', address: '123 Main St', phone_number_1: '1234567890', phone_number_2: '0987654321' });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Jane Doe');
  });
});

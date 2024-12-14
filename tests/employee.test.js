const request = require('supertest');
const app = require('../app');
const { Employee } = require('../models');

describe('Employee API', () => {
  beforeEach(async () => {
    await Employee.destroy({ where: {}, truncate: true });
  });

  it('should create a new employee', async () => {
    const response = await request(app)
      .post('/employees')
      .send({ name: 'John', surname: 'Doe', seniority: 5, role: 'Driver', specialization: 'N/A' });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('John');
  });

  it('should fetch all employees', async () => {
    await Employee.create({ name: 'John', surname: 'Doe', seniority: 5, role: 'Driver', specialization: 'N/A' });
    const response = await request(app).get('/employees');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
  });

  it('should fetch an employee by ID', async () => {
    const employee = await Employee.create({ name: 'John', surname: 'Doe', seniority: 5, role: 'Driver', specialization: 'N/A' });
    const response = await request(app).get(`/employees/${employee.id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('John');
  });

  it('should update an employee', async () => {
    const employee = await Employee.create({ name: 'John', surname: 'Doe', seniority: 5, role: 'Driver', specialization: 'N/A' });
    const response = await request(app)
      .put(`/employees/${employee.id}`)
      .send({ role: 'Mechanic' });
    expect(response.statusCode).toBe(204);

    const updatedEmployee = await Employee.findByPk(employee.id);
    expect(updatedEmployee.role).toBe('Mechanic');
  });

  it('should delete an employee', async () => {
    const employee = await Employee.create({ name: 'John', surname: 'Doe', seniority: 5, role: 'Driver', specialization: 'N/A' });
    const response = await request(app).delete(`/employees/${employee.id}`);
    expect(response.statusCode).toBe(204);

    const deletedEmployee = await Employee.findByPk(employee.id);
    expect(deletedEmployee).toBeNull();
  });
});

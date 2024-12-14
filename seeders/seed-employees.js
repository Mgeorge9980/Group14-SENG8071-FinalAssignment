module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Employees', [
      {
        name: 'John',
        surname: 'Doe',
        seniority: 5,
        role: 'Driver',
        specialization: 'N/A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane',
        surname: 'Smith',
        seniority: 10,
        role: 'Mechanic',
        specialization: 'Volvo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mike',
        surname: 'Johnson',
        seniority: 7,
        role: 'Driver',
        specialization: 'N/A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Employees', null, {});
  },
};

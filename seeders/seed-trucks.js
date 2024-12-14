module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Trucks', [
      {
        brand: 'Volvo',
        load_capacity: 20,
        year: 2020,
        num_repairs: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand: 'Mercedes',
        load_capacity: 18,
        year: 2018,
        num_repairs: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand: 'Scania',
        load_capacity: 25,
        year: 2021,
        num_repairs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Trucks', null, {});
  },
};

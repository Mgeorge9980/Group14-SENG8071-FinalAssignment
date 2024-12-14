module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Repairs', [
      {
        truckId: 1,
        mechanicId: 2,
        estimated_time_days: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        truckId: 2,
        mechanicId: 2,
        estimated_time_days: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Repairs', null, {});
  },
};

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Trips', [
      {
        route_from: 'Toronto',
        route_to: 'Vancouver',
        truckId: 1,
        driver1Id: 1,
        driver2Id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        route_from: 'Montreal',
        route_to: 'Calgary',
        truckId: 2,
        driver1Id: 1,
        driver2Id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Trips', null, {});
  },
};

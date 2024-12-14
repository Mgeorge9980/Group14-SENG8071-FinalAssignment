module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Shipments', [
      {
        weight: 500,
        value: 10000,
        origin: 'Toronto',
        destination: 'Vancouver',
        customerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weight: 1000,
        value: 20000,
        origin: 'Montreal',
        destination: 'Calgary',
        customerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Shipments', null, {});
  },
};

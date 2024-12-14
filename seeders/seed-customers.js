module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Customers', [
      {
        name: 'Alice',
        address: '123 Main St',
        phone_number_1: '1234567890',
        phone_number_2: '0987654321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob',
        address: '456 Elm St',
        phone_number_1: '1122334455',
        phone_number_2: '6677889900',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Customers', null, {});
  },
};

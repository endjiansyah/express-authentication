module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customers", {
        nama: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        alamat: {
            type: Sequelize.TEXT
        }
    });

    return Customer;
};
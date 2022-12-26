module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        customerId: {
            type: Sequelize.INTEGER,
        },
        productId: {
            type: Sequelize.INTEGER,
        },
        tanggal: {
            type: Sequelize.DATE,
        },
        status: {
            type: Sequelize.STRING
        }
    })

    return Order;
}
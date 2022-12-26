module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        nama: {
            type: Sequelize.STRING
        },
        harga: {
            type: Sequelize.INTEGER
        },
        deskripsi: {
            type: Sequelize.STRING
        },
        uom: {
            type: Sequelize.STRING
        },
        stok: {
            type: Sequelize.INTEGER
        },
        brand: {
            type: Sequelize.STRING
        }
    });

    return Product;
};
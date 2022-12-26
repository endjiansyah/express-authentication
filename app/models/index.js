const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const { update } = require("../../controllers/customer.controller.js");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {}; //membuat object dengan nama db

db.Sequelize = Sequelize; //memasukkan Sequelize ke object db
db.sequelize = sequelize;//memasukkan settingan sequelize ke object db

db.user = require("./user.model.js")(sequelize, Sequelize); //memasukkan user.model ke object db
db.role = require("./role.model.js")(sequelize, Sequelize); //memasukkan role.model ke object db
db.customer = require("./customer.model.js")(sequelize, Sequelize); //memasukkan customer.model ke object db
db.product = require("./product.model.js")(sequelize, Sequelize); //memasukkan product.model ke object db
db.order = require("./order.model.js")(sequelize, Sequelize); //memasukkan order.model ke object db

db.role.belongsToMany(db.user, {  //memasukkan role ke object db
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, { //memasukkan user ke object db
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

// [customer.customerId]==1====N==[order.customerId , order.productId]==N=======1==[product.productId]
db.customer.hasMany(db.order, {
    foreignKey: "customerId",
});
db.order.belongsTo(db.customer, { foreignKey: 'customerId' })

db.product.hasMany(db.order, {
    foreignKey: "productId",
});
db.order.belongsTo(db.product, { foreignKey: 'productId' })

// onDelete = 'RESTRICT'===> yg didelete hilang, yg berelasi masih ada (rawan error)
// onDelete= 'CASCADE' ===> yg didelete hilang, yg berelasi juga hilang
// onDelete = 'SET NULL' ===> yg didelete hilang, yg berelasi diisi null pada idrelasinya

// onUpdate = 'RESTRICT' ===> parent di update, relasinya tetap
// onUpdate = 'CASCADE' ===> parent di update, relasinya ikut update

// paranoid: true; ===> soft delete table

db.ROLES = ["user", "admin", "moderator"]; //memasukkan db.ROLES ke object db

module.exports = db; //export object db
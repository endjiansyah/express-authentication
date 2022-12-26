const { authJwt } = require('../../middleware')
const orderController = require('../../controllers/order.controller')

module.exports = function (app) {
    app.use(function (request, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get('/api/order', [authJwt.verifyToken], orderController.read)
    app.post('/api/order', [authJwt.verifyToken], orderController.create)
}
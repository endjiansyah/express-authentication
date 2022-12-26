const { authJwt } = require('../../middleware')
const customerController = require('../../controllers/customer.controller')

module.exports = function (app) {
    app.use(function (request, response, next) {
        response.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get('/api/customer', customerController.read)
    app.get('/api/customer/:id', [authJwt.verifyToken], customerController.readone)
    app.post('/api/customer', [authJwt.verifyToken], customerController.create)
    app.put('/api/customer/:id', [authJwt.verifyToken], customerController.update)
    app.delete('/api/customer/:id', [authJwt.verifyToken], customerController.destroy)
}
const { authJwt } = require('../../middleware')
const productController = require('../../controllers/product.controller')

module.exports = function (app) {
    app.use(function (request, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get('/api/product', productController.read)
    app.get('/api/product/:id', [authJwt.verifyToken], productController.readone)
    app.post('/api/product', [authJwt.verifyToken], productController.create)
    app.put('/api/product/:id', [authJwt.verifyToken], productController.update)
    app.delete('/api/product/:id', [authJwt.verifyToken], productController.destroy)
}
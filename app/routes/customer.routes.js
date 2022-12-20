const { authJwt } = require('../../middleware')
const customerController = require('../../controllers/customer.controller')

module.exports = function (app) {
    app.get('/api/customer', customerController.read)
    app.post('/api/customer', customerController.create)
    app.put('/api/customer/:id', customerController.update)
    app.delete('/api/customer/:id', customerController.destroy)
}
const { response } = require('express')
const db = require('../app/models')
const Product = db.product

function create(request, response) {
    Product.create({
        customerId: req.body.customerId,
        productId: req.body.productId,
        tanggal: req.body.tanggal_order,
        status: req.body.status
    }).then(result => {
        response.status(200).json(result)
    }).catch(err => {
        response.status(400).json({ msg: err })
    })
}
function read(request, response) {
    Product.findAll()
        .then(
            result => response.
                status(200).
                json(result)
        )
        .catch(
            err => response.
                status(400).
                json({ msg: err })
        )
}

module.exports = { create, read }
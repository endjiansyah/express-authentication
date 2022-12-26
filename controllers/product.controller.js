const { response } = require('express')
const db = require('../app/models')
const Product = db.product

function create(request, response) {
    Product.create({
        nama: request.body.nama,
        harga: request.body.harga,
        deskripsi: request.body.deskripsi,
        uom: request.body.uom,
        stok: request.body.stok,
        brand: request.body.brand
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

function readone(request, response) {
    Product.findOne({
        where: {
            id: request.params.id
        }
    })
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

function update(request, response) {
    Product.update({
        nama: request.body.nama,
        harga: request.body.harga,
        deskripsi: request.body.deskripsi,
        uom: request.body.uom,
        stok: request.body.stok,
        brand: request.body.brand
    }, {
        where: {
            id: request.params.id
        }
    }).then(result => response.status(200).send(request.body)).catch(err => response.status(400).json({ msg: err }))
}

function destroy(request, response) {
    Product.destroy({
        where: {
            id: request.params.id
        }
    }).then(result => response.json(result)).catch(err => response.json({ msg: err }))
}

module.exports = { create, read, readone, update, destroy }
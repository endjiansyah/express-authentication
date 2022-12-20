const { response } = require('express')
const db = require('../app/models')
const Customer = db.customer

function create(request, response) {
    Customer.create({
        nama: request.body.nama,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        alamat: request.body.alamat
    }).then(result => {
        response.status(200).json(result)
    }).catch(err => {
        response.status(400).json({ msg: err })
    })
}

function read(request, response) {
    Customer.findAll().then(result => response.status(200).json(result)).catch(err => response.status(400).json({ msg: err }))
}

function update(request, response) {
    Customer.update({
        nama: request.body.nama,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        alamat: request.body.alamat,
    }, {
        where: {
            id: request.params.id
        }
    }).then(result => response.status(200).send(request.body)).catch(err => response.status(400).json({ msg: err }))
}

function destroy(request, response) {
    Customer.destroy({
        where: {
            id: request.params.id
        }
    }).then(result => response.json(result)).catch(err => response.json({ msg: err }))
}

module.exports = { create, read, update, destroy }
const express = require('express');
const router = express.Router();

const _ = require('lodash');
const Customer = require('./../entities/Customer');


router.route('/api/customers')
    .get(function(req, res) {
        Customer.findAll().then(function(customers) {
        res.json(customers);
        })
    })
    .post(function(req, res) {
        var customer = Customer.build(_.pick(req.body, ['name', 'address', 'phone']));
        customer.save().then(function(customer){
        res.json(customer);
        });
    });


router.route('/api/customers/:customer_id')
    .get(function(req, res) {
        Customer.findById(req.params.customer_id).then(function(customer) {
            res.json(customer);
        });
    })
    .put(function(req, res) {
        Customer.findById(req.params.customer_id).then(function(customer) {
            customer.update(_.pick(req.body, ['name', 'address', 'phone'])).then(function(customer) {
                res.json(customer);
            });
        });
    })
    .delete(function(req, res) {
        Customer.findById(req.params.customer_id).then(function(customer) {
            customer.destroy().then(function(customer) {
                res.json(customer);
            });
        });
    });

module.exports = router;

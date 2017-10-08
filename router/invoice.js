const express = require('express');
const router = express.Router();

const _ = require('lodash');
const Invoice = require('./../entities/Invoice');


router.route('/api/invoices')
    .get(function(req, res) {
        Invoice.findAll().then(function(invoices) {
            res.json(invoices);
        })
    })
    .post(function(req, res) {
        var invoice = Invoice.build(_.pick(req.body, ['customer_id', 'discount', 'total']));
        invoice.save().then(function(invoice){
            res.json(invoice);
        });
    });

router.route('/api/invoices/:invoice_id')
    .get(function(req, res) {
        Invoice.findById(req.params.invoice_id).then(function(invoice) {
            res.json(invoice);
        });
    })
    .put(function(req, res) {
        Invoice.findById(req.params.invoice_id).then(function(invoice) {
            invoice.update(_.pick(req.body, ['customer_id', 'discount', 'total'])).then(function(invoice) {
                res.json(invoice);
            });
        });
    })
    .delete(function(req, res) {
        Invoice.findById(req.params.invoice_id).then(function(invoice) {
            invoice.destroy().then(function(invoice) {
                res.json(invoice);
            });
        });
    });


module.exports = router;
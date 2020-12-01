const express = require('express');
const error_handler = require('./error_handler');
const end_router = express.Router();
const {ResourceNotFound} = require('../../../model/src/exceptions');



    end_router.route('*')
    .get((req, res) => {
        error_handler(res, new ResourceNotFound());
    })
    .post((req, res) => {
        error_handler(res, new ResourceNotFound());
    })
    .delete((req, res) => {
        error_handler(res, new ResourceNotFound());
    })
    .patch((req, res) => {
        error_handler(res, new ResourceNotFound());
    });

module.exports = end_router;
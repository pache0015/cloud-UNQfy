const express = require('express');
const end_router = express.Router();


    end_router.route('*')
    .get((req, res) => {
        res.status(404);
        res.json({
            status: 404,
            errorCode: "RESOURCE_NOT_FOUND"
        });
    })
    .post((req, res) => {
        res.status(404);
        res.json({
            status: 404,
            errorCode: "RESOURCE_NOT_FOUND"
        });
    })
    .delete((req, res) => {
        res.status(404);
        res.json({
            status: 404,
            errorCode: "RESOURCE_NOT_FOUND"
        });
    })
    .patch((req, res) => {
        res.status(404);
        res.json({
            status: 404,
            errorCode: "RESOURCE_NOT_FOUND"
        });
    });

module.exports = end_router;
const express = require('express');
const activated_router = express.Router();

activated_router.route('/activated')
    .get((req, res) => {
    console.log("ACTIVATED");
    res.status(200);
    res.json("OK");
});

module.exports = activated_router;
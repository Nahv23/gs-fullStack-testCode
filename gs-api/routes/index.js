const express = require('express');
const router  = express.Router();

const phoneData = require('../controllers/phone.controller');

router.get('/phones', phoneData.getData);

module.exports = router;

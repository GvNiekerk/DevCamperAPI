const express = require('express');
const { getBootcamps, updateBootcamp, deleteBootcamp, createBootcamp, getBootcamp } = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').delete(deleteBootcamp).put(updateBootcamp).get(getBootcamp);

module.exports = router;
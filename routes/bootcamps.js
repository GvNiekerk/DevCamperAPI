const express = require('express');
const { getBootcamps, updateBootcamp, deleteBootcamp, createBootcamp, getBootcamp, getBootcampsInRadius } = require('../controllers/bootcamps');

//Include other resource routers
const courseRouter = require('./courses');

const router = express.Router();

//Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').delete(deleteBootcamp).put(updateBootcamp).get(getBootcamp);

module.exports = router;
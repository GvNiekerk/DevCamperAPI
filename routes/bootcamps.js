const express = require('express');
const { getBootcamps,
    updateBootcamp,
    deleteBootcamp,
    createBootcamp,
    getBootcamp,
    getBootcampsInRadius,
    bootcampPhotoUpload
} = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');

//Include other resource routers
const courseRouter = require('./courses');

const router = express.Router();

//Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/:id/photo').put(bootcampPhotoUpload);

router.route('/').get(advancedResults(Bootcamp, 'courses'), getBootcamps).post(createBootcamp);

router.route('/:id').delete(deleteBootcamp).put(updateBootcamp).get(getBootcamp);

module.exports = router;
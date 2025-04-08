const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();
// router.param('id', tourController.checkID);

// Create a checkBody middleware function
// Check if body contains the name property and price property
// If not, send back a 400 (bad request)
// Add it to the post handler stack

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .delete(tourController.deleteTour)
  .get(tourController.getTour)
  .patch(tourController.updateTour);

module.exports = router;

const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();
// router.param('id', tourController.checkID);

// Create a checkBody middleware function
// Check if body contains the name property and price property
// If not, send back a 400 (bad request)
// Add it to the post handler stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .delete(tourController.deleteTour)
  .get(tourController.getTour)
  .patch(tourController.updateTour);

module.exports = router;

const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

// POST /tour/:tourId/reviews - get access to tourId
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview,
  )
  .get(reviewController.getAllReviews);

module.exports = router;

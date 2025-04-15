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
    reviewController.setTourUserIds,
    reviewController.createReview,
  )
  .get(reviewController.getAllReviews);

router
  .route('/:id')
  .delete(reviewController.deleteReview)
  .patch(reviewController.updateReview)
  .get(reviewController.getReview);

module.exports = router;

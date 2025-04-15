const mongoose = require('mongoose');

// review / rating / createdAt / ref to tour / ref to user
const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      trim: true,
      required: [true, 'Review cannot be blank!'],
      maxLength: [200, 'A review must have fewer than 200 characters'],
    },
    rating: {
      type: Number,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'A review must be associated with a tour'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A review must have an associated user id'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

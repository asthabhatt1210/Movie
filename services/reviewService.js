import Review from '../models/reviewModel.js';

export const createReview = async (reviewData) => {
    const review = new Review(reviewData);
    return await review.save();
};

export const fetchReviewsByMovie = async (movieId) => {
    return await Review.find({ movieId }).populate('userId', 'username');
};

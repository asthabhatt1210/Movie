import * as reviewService from '../services/reviewService.js';

export const addReview = async (req, res) => {
    try {
        const reviewData = req.body;
        const savedReview = await reviewService.createReview(reviewData);
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getReviews = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const reviews = await reviewService.fetchReviewsByMovie(movieId);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

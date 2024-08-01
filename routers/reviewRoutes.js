import express from 'express';
import * as reviewController from '../controllers/reviewController.js';

const router = express.Router();

router.post('/reviews/reviews', reviewController.addReview);
router.get('/reviews/reviews/:movieId', reviewController.getReviews);

export default router;

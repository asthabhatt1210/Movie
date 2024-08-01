import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;
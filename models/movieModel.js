import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true },
    releaseDate: { type: Date, required: true }
});

export default mongoose.model('Movie', movieSchema);

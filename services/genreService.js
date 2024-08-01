import Genre from '../models/genreModel.js';

const createGenre = async (genreData) => {
    const genre = new Genre(genreData);
    return await genre.save();
};

export default { createGenre };

import Movie from '../models/movieModel.js';
import Genre from '../models/genreModel.js';

const createMovie = async (movieData) => {
    const genre = await Genre.findById(movieData.genre);
    if (!genre) {
        throw new Error('Genre not found');
    }
    const movie = new Movie(movieData);
    await movie.save();
    return await Movie.findById(movie._id).populate('genre', 'name').populate('createdBy', 'username'); // Populate the user
};

const updateMovie = async (id, movieData) => {
    const movie = await Movie.findByIdAndUpdate(id, movieData, { new: true });
    if (!movie) {
        throw new Error('Movie not found');
    }
    return movie;
};

const listMovies = async (filters) => {
    const query = {};
    if (filters.genre) {
        query.genre = filters.genre;
    }
    if (filters.name) {
        query.name = { $regex: filters.name, $options: 'i' };
    }
    if (filters.date) {
        query.releaseDate = { $gte: new Date(filters.date) };
    }
    return await Movie.find(query).populate('genre').populate('createdBy', 'username'); // Populate the user
};

export default { createMovie, updateMovie, listMovies };

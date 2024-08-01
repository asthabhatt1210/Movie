import Movie from '../models/movieModel.js';
import Genre from '../models/genreModel.js';

const createMovie = async (movieData) => {
    const genre = await Genre.findById(movieData.genre);
    if (!genre) {
        throw new Error('Genre not found');
    }
    const movie = new Movie(movieData);
    await movie.save();
    return await Movie.findById(movie._id).populate('genre', 'name').populate('createdBy', 'username');
};

const updateMovie = async (id, movieData, userId) => {
    const movie = await Movie.findById(id);
    if (!movie) {
        throw new Error('Movie not found');
    }
    if (movie.createdBy.toString() !== userId) {
        throw new Error('Unauthorized: Only the creator can update this movie');
    }
    Object.assign(movie, movieData);
    await movie.save();
    return await Movie.findById(id).populate('genre', 'name').populate('createdBy', 'username');
};

const deleteMovie = async (id, userId) => {
    const movie = await Movie.findById(id);
    if (!movie) {
        throw new Error('Movie not found');
    }
    if (movie.createdBy.toString() !== userId) {
        throw new Error('Unauthorized: Only the creator can delete this movie');
    }
    await Movie.findByIdAndDelete(id);
    return { message: 'Movie deleted successfully' };
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
    return await Movie.find(query).populate('genre').populate('createdBy', 'username');
};

export default { createMovie, updateMovie, deleteMovie, listMovies };

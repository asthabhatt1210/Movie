import movieService from '../services/movieService.js';

const createMovie = async (req, res) => {
    try {
        const movieData = { ...req.body, createdBy: req.userId }; // Attach userId to the movie data
        const movie = await movieService.createMovie(movieData);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateMovie = async (req, res) => {
    try {
        const movie = await movieService.updateMovie(req.params.id, req.body, req.userId);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const result = await movieService.deleteMovie(req.params.id, req.userId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listMovies = async (req, res) => {
    try {
        const movies = await movieService.listMovies(req.query);
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default { createMovie, updateMovie, deleteMovie, listMovies };

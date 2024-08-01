import movieService from '../services/movieService.js';

export const createMovie = async (req, res) => {
    try {
        const movieData = { ...req.body, createdBy: req.userId };
        const movie = await movieService.createMovie(movieData);
        res.status(201).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movieData = { ...req.body, updatedBy: req.userId };
        const movie = await movieService.updateMovie(id, movieData);
        res.status(200).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const listMovies = async (req, res) => {
    try {
        const filters = req.query;
        const movies = await movieService.listMovies(filters);
        res.status(200).json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

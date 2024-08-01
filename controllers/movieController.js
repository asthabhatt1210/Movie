import movieService from '../services/movieService.js';

export const createMovie = async (req, res) => {
    try {
        const movie = await movieService.createMovie(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const updateMovie = async (req, res) => {
    try {
        const movie = await movieService.updateMovie(req.params.id, req.body);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const listMovies = async (req, res) => {
    try {
        const movies = await movieService.listMovies(req.query);
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

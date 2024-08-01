import genreService from '../services/genreService.js';

export const createGenre = async (req, res) => {
    try {
        const genre = await genreService.createGenre(req.body);
        res.status(201).json(genre);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

import express from 'express';
import { createMovie, updateMovie, listMovies } from '../controllers/movieController.js';

const router = express.Router();

router.post('/movies/create', createMovie);
router.put('/movies/update/:id', updateMovie);
router.get('/movies/list', listMovies);

export default router;

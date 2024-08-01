import express from 'express';
import { createMovie, updateMovie, listMovies } from '../controllers/movieController.js';
import attachUserId from '../middleware/userMiddleware.js';

const router = express.Router();

router.post('/movies/create', attachUserId, createMovie);
router.put('/movies/update/:id', attachUserId, updateMovie);
router.get('/movies/list', listMovies);

export default router;

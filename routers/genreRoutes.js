import express from 'express';
import { createGenre } from '../controllers/genreController.js';

const router = express.Router();

router.post('/genres/create', createGenre);

export default router;

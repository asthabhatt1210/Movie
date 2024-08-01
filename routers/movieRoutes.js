import express from 'express';
import movieController from "../controllers/movieController.js";
import attachUserId from "../middleware/userMiddleware.js";

const router = express.Router();

router.post('/movies/create', attachUserId, movieController.createMovie);
router.put('/movies/update/:id', attachUserId, movieController.updateMovie);
router.delete('/movies/delete/:id', attachUserId, movieController.deleteMovie); // Add this route
router.get('/movies/list', movieController.listMovies);

export default router;

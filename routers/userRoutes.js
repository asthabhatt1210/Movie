import express from 'express';
import { 
    createUserController, 
    updateUserController, 
    deleteUserController, 
    getUserByIdController, 
    getAllUsersController 
} from '../controllers/userController.js';

const router = express.Router();

// Define routes without `/api` as `/api` is already included in `index.js`
router.post('/users/create', createUserController);
router.put('/users/update/:id', updateUserController);
router.delete('/users/delete/:id', deleteUserController);
router.get('/users/get_byid/:id', getUserByIdController);
router.get('/users/display', getAllUsersController);

export default router;

import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();
router.get('/get-user', getUsers);
router.post('/create-user', createUser)
router.put('/update-user', updateUser)
router.delete('/delete-user', deleteUser)

export default router;
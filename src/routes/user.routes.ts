import * as express from 'express';
import * as userController from '../controller/user.controller';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;

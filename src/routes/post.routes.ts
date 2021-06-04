import * as express from 'express';
import * as postController from '../controller/post.controller';

const router = express.Router();

router.post('/', postController.createPost);
router.get('/', postController.getPostsByUser);

export default router;

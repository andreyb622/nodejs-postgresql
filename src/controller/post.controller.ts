import * as express from 'express';
import * as userService from '../services/post.service';

export async function createPost(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> {
  try {
    const { title, content, userId } = req.body;
    const newPost = await userService.create(title, content, userId);
    res.json(newPost);
  } catch (e) {
    next(e);
  }
}

export async function getPostsByUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> {
  try {
    const userId = req.query.id;
    const posts = await userService.findAll(userId as string);
    res.json(posts);
  } catch (e) {
    next(e);
  }
}

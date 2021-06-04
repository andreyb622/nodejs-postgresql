import * as express from 'express';
import * as userService from '../services/user.service';

export async function createUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> {
  try {
    const { name, surname } = req.body;
    const newPerson = await userService.create(name, surname);
    res.json(newPerson);
  } catch (e) {
    next(e);
  }
}

export async function getUsers(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> {
  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (e) {
    next(e);
  }
}

export async function getUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> {
  try {
    const userId = req.params.id;
    const user = await userService.findById(userId);
    res.json(user);
  } catch (e) {
    next(e);
  }
}

export async function updateUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> {
  try {
    const { id, name, surname } = req.body;
    const user = await userService.update(id, name, surname);
    res.json(user);
  } catch (e) {
    next(e);
  }
}

export async function deleteUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> {
  try {
    const userId = req.params.id;
    const response = await userService.del(userId);
    res.json(response);
  } catch (e) {
    next(e);
  }
}

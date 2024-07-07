import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(Number(req.params.id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    await userService.createUser(req.body);
    res.status(201).send('User created');
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

import { Request, Response } from 'express';
import User from '../models/user';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

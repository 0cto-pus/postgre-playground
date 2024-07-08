import { Request, Response } from 'express';
import Product from '../models/product';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

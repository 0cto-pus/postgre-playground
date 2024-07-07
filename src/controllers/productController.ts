import { Request, Response } from 'express';
import * as productService from '../services/productService';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(Number(req.params.id));
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    await productService.createProduct(req.body);
    res.status(201).send('Product created');
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

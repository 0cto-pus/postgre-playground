import express from 'express';
import { json } from 'body-parser';
import { getUsers, getUser, addUser } from './controllers/userController';
import {
  getProducts,
  getProduct,
  createProduct,
} from './controllers/productController';

const app = express();
app.use(json());

app.get('/users', getUsers);
app.get('/users/:id', getUser);
app.post('/users/', addUser);

app.get('/products', getProducts);
app.get('/products/:id', getProduct);
app.post('/products', createProduct);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

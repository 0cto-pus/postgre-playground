import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { sequelize } from './models';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(userRoutes);
app.use(productRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

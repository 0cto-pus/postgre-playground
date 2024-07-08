import sequelize from '../config/db';
import User from './user';
import Product from './product';

const models = {
  User,
  Product,
};

export { sequelize, models };

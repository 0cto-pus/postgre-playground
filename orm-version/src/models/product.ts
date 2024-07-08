import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class Product extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: DataTypes.NOW,
    },
  },

  {
    timestamps: false,
    sequelize,
    tableName: 'products',
  }
);

export default Product;

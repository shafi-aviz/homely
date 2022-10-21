import { DataTypes } from 'sequelize';
import sql from '../connection';

const Property = sql.define('Property', {
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cost: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  beds: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  rooms: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  area: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  id: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  },
});

export default Property;

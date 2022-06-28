"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MoneyValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MoneyValue.init(
    {
      amt: DataTypes.INTEGER,
      allowNull: false,
    },
    {
      treasure_id: DataTypes.INTEGER,
      allowNull: false,
    },
    {
      sequelize,
      modelName: "MoneyValue",
    }
  );
  return MoneyValue;
};

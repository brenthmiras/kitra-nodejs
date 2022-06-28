"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Treasure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Treasure.init(
    {
      name: DataTypes.STRING,
      allowNull: false,
    },
    {
      latitude: DataTypes.DOUBLE,
      allowNull: false,
    },
    {
      longitude: DataTypes.DOUBLE,
      allowNull: false,
    },
    {
      sequelize,
      modelName: "Treasure",
    }
  );
  return Treasure;
};

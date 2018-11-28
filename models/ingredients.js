'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredients = sequelize.define('ingredients', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  ingredients.associate = function (models) {
    ingredients.belongsTo(models.recipes, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return ingredients;
};
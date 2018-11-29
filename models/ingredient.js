
module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define("Ingredient", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Ingredient.associate = function (models) {
    Ingredient.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Ingredient;
};
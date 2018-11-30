
module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    instructions: DataTypes.TEXT
  },
  {
    timestamps: false,
    freezeTableName: false
  }, {});
  Recipe.associate = function (models) {
    Recipe.hasMany(models.Ingredient, {
      onDelete: "cascade"
    });
    Recipe.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
    Recipe.belongsTo(models.Member, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Recipe;
};
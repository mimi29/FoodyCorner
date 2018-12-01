
module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    instructions: DataTypes.TEXT
  },
  {
    timestamps: false,
    freezeTableName: false
  }, {});
  Recipe.associate = function(models) {
    Recipe.belongsTo(models.Member, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recipe;
};
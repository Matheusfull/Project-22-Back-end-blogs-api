module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'categories',
      underscored: true,
    });
  
    Category.associate = (models) => {
      Category.belongsToMany(models.posts_categories,
        { foreignKey: 'categoryId', as: 'posts_category' });
    };
  
    return Category;
  };
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

  /* Category.associate = (models) => {
    Category.hasMany(models.PostCategory,
      { foreignKey: 'categoryId', as: 'posts_categories' });
  }; */

  return Category;
};

/*
Requisito 7
Quando vamos criar uma model de uma tabela é a extremidade de uma relacionamento N:N não precisamos parrar as associações, pois elas estarão na tabela intermediária. Basta fazer a criação normal da função sequelize.define e retornar a mesma.
*/
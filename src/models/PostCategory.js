module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {
      postId: { type: DataTypes.INTEGER, foreignKey: true },
      categoryId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories'
    },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  };

  return PostCategory;
};

/*
Requisito 11
1 - temos a criação normal da model, com os três parâmetros da função sequelize.define.
2 - Agora que é a hora. Numa associação de N:N, a tabela/model intermediária é que terá a associação com cada uma das tabelas da extremidade.
- Vamos dizer que a BlogPost está associada com muitas Category
- Ou seja, a BlogPost consegue pegar todas as informações da Category através do apelido categories
- Tudo isso por meio da tabela PostCategory
- Onde essa relação ocorre com a chave estrangeira post_id que está sendo referenciada pela tabela BlogPost

Depois é só fazer o inverso com a outra tabela.
*/
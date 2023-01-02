module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        field: 'post_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa a tabela da referência da associação
          model: 'blog_posts',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        },
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  },
};

/*
Requisito 1
Mesmo raciocínio da migration users
- Toda relação N:N é composta por uma tabela intermediária, que no caso é esta. Porém, as tabelas da extremidade há uma relação de 1:N com a tabela intermediária. Com isso, na do meio, será uma tabela com uma chave primária composta e que vem das tabelas externas.
*/

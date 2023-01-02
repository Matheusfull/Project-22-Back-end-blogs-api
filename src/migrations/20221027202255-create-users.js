module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      display_name: {
        field: 'display_name',
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  },
};

/*
Requisito 1
Criação normal da migration:
1- Na função up, 'para subir a tabela', temos dois parâmetro: um é o queryInterface que é um objeto que armazena dados e operações, e também serve para criar e/ou modificar o banco de dados. Já o segundo parâmetro também é também um objeto que armazena os tipos de dados disponíveis no contexto do banco, meio que ele tipa, falando se é varchar, strng, integer, essas coisas...
2 - Como precisamos de tempo para criar as coisas, vamos usar uma assincronicidade e criar a tabela com a função createTable do queryInterface.
3 - Nessa função, createTable, teremos dois parâmetros:
1 - O nome da tabela, que geralmente é no plural e começa com maiúsculo.
2 - Um objeto com as especificações de cada coluna no banco de dados. Falando se aquela coluna é chave primária, inteiro, não nulo... Estamos criando o banco, logo, temos que passar as informações tudo certinhas.

Para subir: npx sequelize db:migrate

Depois temos a função down, que dropa o banco. Simples assim kkkk
Para dropar: npx sequelize db:migrate:undo
*/

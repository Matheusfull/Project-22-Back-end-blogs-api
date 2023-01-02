module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.INTEGER,
  },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blog_posts' });
  };

  return User;
};

/*
REquisito 2
1 - A Model é uma função que recebe dois parâmetros:sequelize, DataTypes. E essa função representa uma linha no banco de dados e passa as informações das colunas de cada linha para o sequelize.
2 - Nessa função vamos criar uma constante com o nome da Model, para facilitar, que será: sequelize.define(modelName, attributes, options), mãos a obra para passar os parâmetros:
    1 -  Passaremos o nome da Model no singular e começando com maiusculo.
    2 - No segundo parâmetro, vamos meio que tipar cada coluna de uma linha, relacionando se aquela coluna é uma stringo, ou um número, se é chave primária. Aqui ocorre parecido com a migration, porém, ao invés de criar ou modificar alguma tabela, vamos relacionar essa coluna no banco de dados com um objeto no javascript.
    3 - No último parâmetro, podemos colocar o nome da tabela, se vamos ter underscored.

3 - Por fim temos a relação entre as tabelas:
1 - pega as tabelas que se relacionarão
2 - coloca a chave estrageira por meio do qual as tabelas serão vinculadas
3 - coloca o pelido da tabela que queremos ter acesso a todas as informações. Por exemplo, a tabela users terá uma chave primária que será chave estrangeira na tabela blog_posts. Com isso eu posso pegar as informações que eu quiser da tabela blog_post, porém para isso eu preciso de um apelido, tipo um código hahahaha.
*/
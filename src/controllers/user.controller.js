require('dotenv/config');
const jwt = require('jsonwebtoken');
const { insert, getUsers, getUserById } = require('../services/userService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

// Requisito 4
const userInsert = async (req, res) => {
  const infoUser = req.body;

  /* const verifiUser = await getByEmail(infoUser.email);
  console.log(verifiUser);
  if (!verifiUser) {
      return res.status(409).json({ message: 'User already registereddddd' });
  } */

  const user = await insert(infoUser);

  if (!user) {
    return res.status(401).json({ message: 'Usuário não cadastrado' });
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { email: user.email } }, secret, jwtConfig);

  res.status(201).json({ token });
};

// Requisito 5
const getAllUsers = async (_req, res) => {
  const users = await getUsers();
  return res.status(200).json(users);
};

// Requisito 6
const userById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  userInsert,
  getAllUsers,
  userById,
};

/*
Requisito 4
1 - Depois dos dados que vêm no corpo da requisição passarem na validação, vamos cadastrar o user e dar para ele um token para ser a sua credencial. Porém o processo é extremamente simples, só pegar as informações do corpo da requisição e fazer um insert na model.
2 - Feito, está criado. Porém, sem token. Vamos então fazer um processo semilar ao do requisito 3.
      Vamos juntar três coisas para criar essa credencial, digo, token kkkk
      1 - Pegamos no banco de dados o email desse user inserido
      2 - O objeto com as configurações do token, tipo tempo de expiração e algoritmo codificador
      3 - O segredo
      Ao juntarmos isso, temos o token e depois só retornar.
*/

/*
Requisito 5
Como é uma função só para pegar todos os usuários, não precisa fazer try/catch porque não há muita possibilidade de erro. Só fazer a função normal, até porque ela não recebe nenhum parâmetro.
*/

/*
Requisito 6
1 - No try, usaremos a função que busca um user específico com relação ao id vindo pelo corpo da requisição.
2 - Essa função retorna o user específico, se não vier, avisaremos e se vier mandaremos como reposta da requisição.
3 - No catch vamos avisar o erro que deu.
*/
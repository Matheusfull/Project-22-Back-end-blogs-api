// ----------------------------------Validando token nas requisições------------------------------
const jwt = require('jsonwebtoken');

require('dotenv/config');
// const { UserService } = require('../services');

/* Mesma chave privada que usamos para criptografar o token.
   Agora, vamos usá-la para descriptografá-lo.
   Numa aplicação real, essa chave jamais ficaria hardcoded no código assim,
   e muitos menos de forma duplicada, mas aqui só estamos interessados em
   ilustrar seu uso ;) */
const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

module.exports = async (req, res, next) => {
  /* Aquele token gerado anteriormente virá na requisição através do
     header Authorization em todas as rotas que queremos que
     sejam autenticadas. */
  const token = req.header('Authorization');

  /* Caso o token não seja informado, simplesmente retornamos
     o código de status 401 - não autorizado. */
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    /* Através o método verify, podemos validar e decodificar o nosso JWT. */
    jwt.verify(token, secret);

    /* Caso o token esteja expirado, a própria biblioteca irá retornar um erro,
       por isso não é necessário fazer validação do tempo.
       Caso esteja tudo certo, nós então usamos o serviço de usuário para obter seus dados atualizados */

    /* Por fim, chamamos o próximo middleware que, no nosso caso,
       é a própria callback da rota. */
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
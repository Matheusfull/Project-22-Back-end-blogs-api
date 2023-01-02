const { getByEmail } = require('../services/userService');

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const validateUser = async (req, res, next) => {
    const { displayName, email, password } = req.body;
    console.log(email);
    const msg = '"displayName" length must be at least 8 characters long';
    const msg2 = '"password" length must be at least 6 characters long';
    // Será validado que não é possível cadastrar com o campo displayName menor que 8 caracteres
    if (displayName.length < 8) {
        return res.status(400).json({ message: msg });
    // Será validado que não é possível cadastrar com o campo email com formato inválido
    } if (!validateEmail(email)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    // Será validado que não é possível cadastrar com o campo password menor que 6 caracteres
    } if (password.length < 6) {
        return res.status(400).json({ message: msg2 });
    // Será validado que não é possível cadastrar com um email já existente
    } if (await getByEmail(email)) {
        return res.status(409).json({ message: 'User already registered' });
    }
    next();
};

module.exports = {
    validateUser,
};

/*
Requisito 4
Aqui ficará o middleware com as validações dos compos de cadastros para o usuário.
*/
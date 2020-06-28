const db = require('../database');
const Op = db.Sequelize.Op;

const User = db.User;

const get = async (id) => {
    return await User.findByPk(id);
};

const getAll = async () => {
    return await User.findAll();
}

const create = async (body) => {
    const { name, password, email } = body;

    const userExists = await User.count({ where: { email }});

    if (userExists != 0)
        throw 'Usuário já existe';

    const userCreated = await User.create({
        email: email,
        name: name,
        password: password
    });

    return userCreated;
}

const update = async (idParam, body) => {
    const { id, name, password, email } = body;

    if (idParam != id) 
        throw 'Dados inconsistentes';

    const userExists = await User.count({ where: { id }});

    if (userExists === 0)
        throw 'Usuário não existe';

    const emailExists = await User.count({ 
        where: { 
            email: email,
            [Op.not]: {
                id
            }
        }, 
        raw: true
    });

    if (emailExists != 0)
        throw 'E-mail já utilizado';    

    const affecteds = await User.update({
            email: email,
            name: name,
            password: password
        }, 
        { where: { id } }
    );

    return affecteds;
}

const remove = async (id) => {
    const userExists = await User.count({ where: { id }, raw: true});
    
    if (userExists === 0)
        throw 'Usuário não existe';

    const affecteds = await User.destroy({ where: { id }});
    
    return affecteds;
}

module.exports = {
    get,
    getAll,
    create,
    update, 
    remove
}
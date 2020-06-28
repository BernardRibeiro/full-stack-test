'use strict';

const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          // define association here
        }
    };

    User.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });

    User.beforeCreate (async (user, options) => {
        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;
    });
    
    User.beforeBulkUpdate(async (user, options) => {
        const hash = await bcrypt.hash(user.attributes.password, 10);
        user.attributes.password = hash;
    });

    return User;
};
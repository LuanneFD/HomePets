import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                date_of_birth: Sequelize.DATE,
                email: Sequelize.STRING,
                type: Sequelize.STRING,
                password: Sequelize.STRING
            },
            {
                sequelize
            }
        );

        return this;
    }
}

export default User;
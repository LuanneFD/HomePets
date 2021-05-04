import Sequelize, { Model } from 'sequelize';

class Pet extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                age: Sequelize.INTEGER,
                type: Sequelize.STRING,
                breed: Sequelize.STRING,
                id_user: Sequelize.INTEGER,
            },
            {
                sequelize,
                tableName: 'pets'
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
    }
}
export default Pet;
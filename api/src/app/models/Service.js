import Sequelize, { Model } from 'sequelize';

class Service extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                duration: Sequelize.STRING,
                price: Sequelize.STRING,
                id_user: Sequelize.INTEGER,
            },
            {
                sequelize,
                tableName: 'services'
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
    }
}
export default Service;
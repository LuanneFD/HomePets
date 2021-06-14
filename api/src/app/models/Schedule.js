import Sequelize, { Model } from 'sequelize';

class Schedule extends Model {
    static init(sequelize) {
        super.init(
            {
                id_service: Sequelize.INTEGER,
                id_pet: Sequelize.INTEGER,
                id_user: Sequelize.INTEGER,
                time: Sequelize.STRING
            },
            {
                sequelize,
                tableName: 'schedules'
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Service, { foreignKey: 'id_service', as: 'service' });
        this.belongsTo(models.Pet, { foreignKey: 'id_pet', as: 'pet' });
        this.belongsTo(models.User, { foreignKey: 'id_user', as: 'prestador' });
    }
}
export default Schedule;
import Sequelize from 'sequelize';

// importação dos models
import User from '../app/models/User';
import Pet from '../app/models/Pet';

import databaseConfig from '../config/database';

const models = [User, Pet];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}


export default new Database();
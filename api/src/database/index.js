import Sequelize from 'sequelize';

// importação dos models
import User from '../app/models/User';
import Pet from '../app/models/Pet';
import Service from '../app/models/Service';

import databaseConfig from '../config/database';

const models = [User, Pet, Service];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.forEach(model => model.init(this.connection));
    models.forEach(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}


export default new Database();
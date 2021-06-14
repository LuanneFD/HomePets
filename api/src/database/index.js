import Sequelize from 'sequelize';

// importação dos models
import User from '../app/models/User';
import Pet from '../app/models/Pet';
import Service from '../app/models/Service';
import Schedule from '../app/models/Schedule';

import databaseConfig from '../config/database';

const models = [User, Pet, Service, Schedule];

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
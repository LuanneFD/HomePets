import Sequelize from 'sequelize';

// importação dos models
import Provider from '../app/models/Provider';
import Product from '../app/models/Product';
import Salesman from '../app/models/Salesman';
import Sale from '../app/models/Sale';
import SaleHasProduct from '../app/models/SaleHasProduct';
import Cash from '../app/models/Cash';

import databaseConfig from '../config/database';

const models = [Provider, Product, Salesman, Sale, SaleHasProduct, Cash];

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
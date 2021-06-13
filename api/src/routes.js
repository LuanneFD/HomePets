import { Router } from 'express';
// importacao de controllers
import UserController from './app/controllers/UsersController';
import PetsController from './app/controllers/PetsController';
import ServicesController from './app/controllers/ServicesController';

const routes = new Router();

routes.post('/users', UserController.store); // CREATE
routes.get('/users', UserController.index); // READ
routes.get('/users/:id', UserController.show); // READ
routes.post('/users/login', UserController.login); // LOGIN
routes.put('/users/:id', UserController.update);

routes.get('/pets/:id', PetsController.index);
routes.post('/pets', PetsController.store);
routes.put('/pets/:id', PetsController.update);
routes.delete('/pets/:id', PetsController.destroy);

routes.get('/services/:id', ServicesController.index);
routes.get('/services', ServicesController.indexAll);
routes.post('/services', ServicesController.store);
routes.put('/services/:id', ServicesController.update);
routes.delete('/services/:id', ServicesController.destroy);

export default routes;

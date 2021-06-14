import { Router } from 'express';
// importacao de controllers
import UserController from './app/controllers/UsersController';
import PetsController from './app/controllers/PetsController';
import ServicesController from './app/controllers/ServicesController';
import SchedulesController from './app/controllers/SchedulesController';

const routes = new Router();

routes.post('/users', UserController.store); // CREATE
routes.get('/users', UserController.index); // READ
routes.get('/providers', UserController.indexPrestador); // READ
routes.get('/users/:id', UserController.show); // READ
routes.post('/users/login', UserController.login); // LOGIN
routes.put('/users/:id', UserController.update);

routes.get('/pets/:id', PetsController.index);
routes.post('/pets', PetsController.store);
routes.put('/pets/:id', PetsController.update);
routes.delete('/pets/:id', PetsController.destroy);

routes.get('/services', ServicesController.index);
routes.post('/services', ServicesController.store);
routes.put('/services/:id', ServicesController.update);
routes.delete('/services/:id', ServicesController.destroy);


routes.get('/schedules/:id', SchedulesController.index);
routes.post('/schedules', SchedulesController.store);
routes.put('/schedules/:id', SchedulesController.update);
routes.delete('/schedules/:id', SchedulesController.destroy);

export default routes;

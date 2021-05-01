import { Router } from 'express';
// importacao de controllers
import UserController from './app/controllers/UsersController';

const routes = new Router();

routes.post('/users', UserController.store); // CREATE
routes.get('/users', UserController.index); // READ
routes.get('/users/:id', UserController.show); // READ
routes.post('/users/login', UserController.login); // LOGIN
routes.put('/users/:id', UserController.update);


export default routes;

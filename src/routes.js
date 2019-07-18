import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

// Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:userId', UserController.read);
routes.put('/users/:userId', UserController.update);
routes.delete('/users/:userId', UserController.delete);

export default routes;

import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

// Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:userId', UserController.read);

export default routes;

import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:userId', authMiddleware, UserController.read);
routes.put('/users/:userId', UserController.update);
routes.delete('/users/:userId', UserController.delete);

// Session
routes.post('/sessions', SessionController.store);

export default routes;

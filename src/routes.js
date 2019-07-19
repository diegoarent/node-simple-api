import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:userId', authMiddleware, UserController.read);
routes.put('/users/:userId', authMiddleware, UserController.update);
routes.delete('/users/:userId', authMiddleware, UserController.delete);

// Session
routes.post('/sessions', SessionController.store);

// Files
routes.get('/files', FileController.index);
routes.post(
  '/files',
  authMiddleware,
  upload.single('file'),
  FileController.store
);
routes.delete('/files/:fileId', authMiddleware, FileController.delete);

export default routes;

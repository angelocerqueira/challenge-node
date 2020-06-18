import { Router } from 'express';
import MemoryController from './app/controllers/MemoryController';
import StringController from './app/controllers/StringController';

const routes = new Router();

routes.get('/memory_usage', MemoryController.store);

routes.get('/message', StringController.show);

routes.post('/message', StringController.store);

export default routes;

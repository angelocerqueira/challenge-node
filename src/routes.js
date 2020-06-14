import { Router } from 'express';
import MemoryController from './app/controllers/MemoryController';

const routes = new Router();

routes.get('/memory_usage', MemoryController.index);

routes.get('/message', MemoryController.show);

routes.get('/live', (req, res) => res.json({ messege: 'hi, working!' }));

routes.post('/message', MemoryController.store);

export default routes;

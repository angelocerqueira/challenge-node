import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.mongo();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  mongo() {
    mongoose.connect(
      'mongodb://challenge:challenge@cluster0-shard-00-00-k34qv.mongodb.net:27017,cluster0-shard-00-01-k34qv.mongodb.net:27017,cluster0-shard-00-02-k34qv.mongodb.net:27017/challenge?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new App().server;

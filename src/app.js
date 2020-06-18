import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.httpserver = express();
    this.middlewares();
    this.routes();
    this.mongo();
  }

  middlewares() {
    this.httpserver.use(cors());
    this.httpserver.use(express.json());
  }

  routes() {
    this.httpserver.use(routes);
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

export default new App().httpserver;

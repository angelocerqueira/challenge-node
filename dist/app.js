"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
  constructor() {
    this.httpserver = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
    this.mongo();
  }

  middlewares() {
    this.httpserver.use(_cors2.default.call(void 0, ));
    this.httpserver.use(_express2.default.json());
  }

  routes() {
    this.httpserver.use(_routes2.default);
  }

  mongo() {
    _mongoose2.default.connect(
      'mongodb://challenge:challenge@cluster0-shard-00-00-k34qv.mongodb.net:27017,cluster0-shard-00-01-k34qv.mongodb.net:27017,cluster0-shard-00-02-k34qv.mongodb.net:27017/challenge?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
}

exports. default = new App().httpserver;

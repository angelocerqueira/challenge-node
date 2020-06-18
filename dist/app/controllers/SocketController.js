"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Message = require('../models/Message'); var _Message2 = _interopRequireDefault(_Message);

// import { io } from '../../server';

class SocketController {
  async index(req, res) {
    const response = await _Message2.default.find().sort({ _id: -1 }).limit(1);

    const string = response.map((a) => {
      return a.msg;
    });
    return string;
  }
}

exports. default = new SocketController();

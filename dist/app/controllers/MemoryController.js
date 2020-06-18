"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Memory = require('../models/Memory'); var _Memory2 = _interopRequireDefault(_Memory);

class MemoryControler {
  async store(req, res) {
    try {
      const heapTotal = Math.round(
        ((process.memoryUsage().heapTotal / 1024 / 1024) * 100) / 100
      );
      const heapUsed = Math.round(
        ((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100
      );
      const rss = Math.round(
        ((process.memoryUsage().rss / 1024 / 1024) * 100) / 100
      );
      const response = await _Memory2.default.create({ heapTotal, heapUsed, rss });

      return res.status(200).json(response);
    } catch (err) {
      return res.status().json({ err });
    }
  }
}

exports. default = new MemoryControler();

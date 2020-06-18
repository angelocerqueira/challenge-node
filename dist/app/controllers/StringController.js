"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Message = require('../models/Message'); var _Message2 = _interopRequireDefault(_Message);

class StringController {
  async show(req, res) {
    try {
      const menssage = await _Message2.default.find().sort({ _id: -1 }).limit(1);

      const string = menssage.map((a) => {
        return a.msg;
      });
      if (string == ' ' || string == '') {
        return res.status(419).json({ msg: ' deu ruim' });
      }
      const toInter = +string;

      if (typeof toInter === 'number') {
        return setTimeout(() => {
          return res.json(string);
        }, toInter * 1000);
      }
      return res.json(string);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async store(req, res) {
    const { string } = req.query;
    try {
      let message = await _Message2.default.findOne({ msg: string });
      if (!message) {
        message = await _Message2.default.create({ msg: string });
      }
      return res.status(204).json(message);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

exports. default = new StringController();

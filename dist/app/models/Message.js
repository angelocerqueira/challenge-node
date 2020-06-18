"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const MessageSchema = new _mongoose2.default.Schema({
  msg: String,
});

exports. default = _mongoose2.default.model('Message', MessageSchema);

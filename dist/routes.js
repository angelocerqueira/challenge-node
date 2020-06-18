"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _MemoryController = require('./app/controllers/MemoryController'); var _MemoryController2 = _interopRequireDefault(_MemoryController);
var _StringController = require('./app/controllers/StringController'); var _StringController2 = _interopRequireDefault(_StringController);

const routes = new (0, _express.Router)();

routes.get('/memory_usage', _MemoryController2.default.store);

routes.get('/message', _StringController2.default.show);

routes.post('/message', _StringController2.default.store);

exports. default = routes;

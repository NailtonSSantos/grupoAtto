const { request } = require('express');

const agricultoresController = require('./agricultoresController');

module.exports = {
  agricultores: agricultoresController,
};
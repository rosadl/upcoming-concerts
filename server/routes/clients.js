const express = require('express');
const Client = require('../models/Client');
const ensureLogin = require("connect-ensure-login");
const mongoose = require('mongoose');
const User = require('../models/User');
const clientRoutes = express.Router();

clientRoutes.post('/clients/new', (req, res, next) => {
  const clientInfo = {
    name: req.body.name,
    lastName: req.body.lastName,
    city: req.body.city,
    email: req.body.email,
    imageUrl: req.body.imageUrl,
    userID: req.body.userID
  };
console.log(clientInfo);
  const newClient = new Client(clientInfo);

  newClient.save( (err) => {
    if (err) { return next(err); }
});
});


clientRoutes.get('/clients/:id', (req, res, next) => {
  const userId = req.params.id;

  Client.find({userID: userId}).then( client => {

    res.json(client);
  });
});


clientRoutes.post('/clients/:id', (req, res, next) => {
  const clientId = req.params.id;

  const updates = {
    name: req.body.name,
    lastName: req.body.lastName,
    city: req.body.city,
    email: req.body.email,
    imageUrl: req.body.imageUrl,
};

Client.findByIdAndUpdate(clientId, updates, (err, client) => {
  if (err){ return next(err); }
  return res.redirect('/:username');
});
});

clientRoutes.post('/clients/:id/delete', (req, res, next) => {
  const clientId = req.params.id;
  Client.findByIdAndRemove(clientId, (err, client) => {
  if (err){ return next(err); }
  return res.redirect('/:username');
});
});

module.exports = clientRoutes;

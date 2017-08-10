const express = require('express');
const Admin = require('../models/Admin');
const ensureLogin = require("connect-ensure-login");
const mongoose = require('mongoose');
const User = require('../models/User');
const adminRoutes = express.Router();

adminRoutes.post('/admins/new', (req, res, next) => {
  const adminInfo = {
    name: req.body.name,
    location: req.body.location,
    email: req.body.email,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    userID: req.body.userID
  };
console.log(adminInfo);
  const newAdmin = new Admin(adminInfo);

  newAdmin.save( (err) => {
    console.log('entrando a salvar');
    if (err) { return next(err); }
});
});

adminRoutes.get('/admins/:id', (req, res, next) => {

  const adminId = req.params.id;

  Admin.find({userID: adminId}).then( admin => {
    res.json(admin);
  });
});

module.exports = adminRoutes;

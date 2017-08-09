const express = require('express');
const ensureLogin = require("connect-ensure-login");
const mongoose = require('mongoose');
const LastfmAPI = require('lastfmapi');
const Assistant = require('../models/Assistant');
const Concert = require('../models/Concert');
const assistantRoutes = express.Router();

assistantRoutes.post('/concerts/:id/assistants', (req, res, next) => {
  const newAssistant = new Assistant({
    clientId: req.body.clientId,
    concertId: req.body.concertId,
    similarArtist: req.body.similarArtist
  });
  console.log(req.body.similarArtist);
  newAssistant.save().then( assistant => {
      Assistant.find({concertId: concertId}, (err,assistants) => {
        if (err) { return err; }
      res.status(200).json(assistant);
  }).catch( error => { res.json(error); });
});
});
assistantRoutes.get('/concerts/:id/assistants', (req, res, next) => {
  const concertId = req.params.id;

  Concert.findById({_id: concertId}).then( result => {

  Assistant.find({concertId: concertId}, (err,assistants) => {
        if (err) { return err; }
        let promisesAssistants = [];
        assistants.forEach((c) => {
          promisesAssistants.push(new Promise((resolved, reject)=> {
            c.populate('clientId', (err, client) => {
            if (err) { return err;}
              resolved(client);
          });
          })
        );
      });
      Promise.all(promisesAssistants).then((assistantsPopulated)=>{
      res.status(200).json(assistantsPopulated);
    });
    });
});
});
module.exports = assistantRoutes;

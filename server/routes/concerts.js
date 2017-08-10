const express = require('express');
const Concert = require('../models/Concert');
const ensureLogin = require("connect-ensure-login");
const mongoose = require('mongoose');
const LastfmAPI = require('lastfmapi');
const Assistant = require('../models/Assistant');
const concertRoutes = express.Router();



concertRoutes.get('/concerts', (req, res, next) => {
  Concert.find()
    .then( concerts => {res.json(concerts);})
    .catch( err => console.log(err));

});

concertRoutes.get('/concerts/artist/:artist', (req, res, next) => {

  Concert.find({artist: req.params.artist })
  // .then(result => console.log(result))
  .then( result => {res.json(result);})
  .reject(err => { console.log("no encuentra");});
});

concertRoutes.get('/concerts/:id', (req, res, next) => {
  const concertId = req.params.id;

  Concert.findById({_id: concertId}).then( result => {
    res.json(result);
  });
});

concertRoutes.post('/concerts/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Concert.findByIdAndRemove(id, (err, concerts) => {
    if (err){ return next(err); }

    Assistant.remove({concertId:id}, (err, Assistant) => {
      if (err){ return next(err); }
    console.log("borrado");
      // return res.redirect('/events');
    });
  });
});

concertRoutes.post('/concert/new', (req, res, next) => {
  var lfm = new LastfmAPI({
    'api_key': 'cf253a592726e7dd143153ef3a2927d8',
    'secret': '295ed7ebe32f49bb7171d6ffa5a324b7'
  });


let artistPromise = new Promise((resolve, reject) => {
  lfm.artist.getInfo({
      artist: req.body.artist
    }, function(err, artist) {
      if (err) {throw err;}
      resolve(artist);
    });
});

artistPromise.then(data => {
  let concertInfo = {
    userID: req.body.userID,
    artist: req.body.artist,
    date: req.body.date,
    capacity: req.body.capacity,
    imgUrl: [data.image[1]['#text'], data.image[4]['#text']],
    summary: data.bio.summary,
    similarArtist: [data.similar.artist[0].name, data.similar.artist[1].name, data.similar.artist[2].name],
    tags: [data.tags.tag[0].name, data.tags.tag[1].name, data.tags.tag[2].name, data.tags.tag[3].name]
  };

  const newConcert = new Concert(concertInfo);
  newConcert.save((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(newConcert);
  });
});
});





module.exports = concertRoutes;

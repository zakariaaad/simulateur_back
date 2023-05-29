'use strict';

const Simulateur = require('../models/simulateur.model');

exports.findAll = function(req, res) {
    Simulateur.findAll(function(err, simulateur) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', simulateur);
      res.send(simulateur);
    });
  };
  
  
  exports.create = function(req, res) {
      const new_Simulateur = new Simulateur(req.body);
  
      //handles null error 
     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
          res.status(400).send({ error:true, message: 'Please provide all required field' });
      }else{
        Simulateur.create(new_Simulateur, function(err, simulateur) {
              if (err)
              res.send(err);
              res.json({error:false,message:"simulateur added successfully!",data:simulateur});
          });
      }
  };
  
  
  exports.findById = function(req, res) {
    Simulateur.findById(req.params.id, function(err, simulateur) {
          if (err)
          res.send(err);
          res.json(simulateur);
      });
  };
  
  
  exports.update = function(req, res) {
      if(req.body.constructor === Object && Object.keys(req.body).length === 0){
          res.status(400).send({ error:true, message: 'Please provide all required field' });
      }else{
        Simulateur.update(req.params.id, new Simulateur(req.body), function(err, simulateur) {
              if (err)
              res.send(err);
              res.json({ error:false, message: 'Simulation successfully updated' });
          });
      }
    
  };
  
  
  exports.delete = function(req, res) {
    Simulateur.delete( req.params.id, function(err, simulateur) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Simulation successfully deleted' });
    });
  };
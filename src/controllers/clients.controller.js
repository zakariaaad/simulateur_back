'use strict';

const Clients = require('../models/clients.model');

exports.findAll = function(req, res) {
  Clients.findAll(function(err, Clients) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', Clients);
    res.send(Clients);
  });
};


exports.create = function(req, res) {
    const new_Clients = new Clients(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Clients.create(new_Clients, function(err, Clients) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Clients added successfully!",data:Clients});
        });
    }
};


exports.findById = function(req, res) {
    Clients.findById(req.params.id, function(err, Clients) {
        if (err)
        res.send(err);
        res.json(Clients);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Clients.update(req.params.id, new Clients(req.body), function(err, Clients) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Clients successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Clients.delete( req.params.id, function(err, Clients) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Clients successfully deleted' });
  });
};
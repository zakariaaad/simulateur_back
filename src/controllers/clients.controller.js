"use strict";

const Client = require("../models/clients.model");

exports.findAll = function (req, res) {
  Client.findAll()
    .then((clients) => {
      console.log("find all clients", clients);
      res.send(clients);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.create = function (req, res) {
  const client = req.body;

  if (client.constructor === Object && Object.keys(client).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
    return;
  }

  Client.create(client)
    .then((data) => {
      res.json({ error: false, message: "Client added successfully!", data });
    })
    .catch((err) => res.send(err));
};

exports.findById = function (req, res) {
  const id = req.params.id;

  Client.findAll({
    where: { id_client: id },
  })
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
};

exports.update = function (req, res) {
  const id = req.params.id;
  const updatedClient = req.body;
  if (
    updatedClient.constructor === Object &&
    Object.keys(updatedClient).length === 0
  ) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
    return;
  }

  Client.update(updatedClient, {
    where: { id_client: id },
  })
    .then(() =>
      res.json({ error: false, message: "Clients successfully updated" })
    )
    .catch((err) => res.send(err));
};

exports.delete = function (req, res) {
  const id = req.params.id;
  Client.destroy({
    where: { id_client: id },
  })
    .then(() =>
      res.json({ error: false, message: "Clients successfully deleted" })
    )
    .catch((err) => res.send(err));
};

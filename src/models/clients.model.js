"user strict";
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");

const Client = sequelize.define(
  "clients_credit",
  {
    id_client: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_prenom_client: {
      type: DataTypes.STRING,
    },
    numero_cin_client: {
      type: DataTypes.STRING,
    },
    age_client: {
      type: DataTypes.INTEGER,
    },
    date_naissance_client: {
      type: DataTypes.DATE,
    },
    revenu_principale_client: {
      type: DataTypes.INTEGER,
    },
    telephone_client: {
      type: DataTypes.STRING,
    },
    profession_client: {
      type: DataTypes.STRING,
    },
    adresse_client: {
      type: DataTypes.STRING,
    },
    notes_client: {
      type: DataTypes.STRING,
    },
    ville_client: {
      type: DataTypes.STRING,
    },
    email_client: {
      type: DataTypes.STRING,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = Client;

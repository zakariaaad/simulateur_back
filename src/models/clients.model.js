'user strict';
var dbConn = require('../../config/db.config');

//Clients object create
var Clients = function(clients){
    this.nom_prenom_client     = clients.nom_prenom_client;//client. input[]
    this.numero_cin_client      = clients.numero_cin_client;
    this.age_client          = clients.age_client;
    this.date_naissance_client          = clients.date_naissance_client;
    this.revenu_principale_client   = clients.revenu_principale_client;
    this.telephone_client    = clients.telephone_client;
    this.profession_client         = clients.profession_client;
    this.adresse_client         = clients.adresse_client;
    this.notes_client     = clients.notes_client;
    this.ville_client     = clients.ville_client;
    this.email_client     = clients.email_client;
    this.deleted         = clients.deleted ? clients.deleted : 0;

    // this.created     = new Date();
};
Clients.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO clients_credit set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Clients.findById = function (id, result) {
    dbConn.query("Select * from clients_credit where id_client = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Clients.findAll = function (result) {
    dbConn.query("Select * from clients_credit", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Clientss : ', res);  
            result(null, res);
        }
    });   
};
Clients.update = function(id, clients, result){
  dbConn.query("UPDATE clients_credit SET nom_prenom_client=?,numero_cin_client=?,age_client=?,date_naissance_client=?,revenu_principale_client=?,telephone_client=?,profession_client=? WHERE id_client = ?", 
  [clients.nom_prenom_client,clients.numero_cin_client,clients.age_client,clients.date_naissance_client,clients.revenu_principale_client,clients.telephone_client,clients.profession_client, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Clients.delete = function(id, result){
     dbConn.query("DELETE FROM clients_credit WHERE id_client = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Clients;
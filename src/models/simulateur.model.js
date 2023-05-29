'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Simulateur = function(simulateur){
    this.prix_produit_simulation     = simulateur.prix_produit_simulation;
    this.duree_simulation      = simulateur.duree_simulation;
    this.type_taux_simulation          = simulateur.type_taux_simulation;
    this.tauxinteret_simulation          = simulateur.tauxinteret_simulation;
    this.montant_remise_simulation   = simulateur.montant_remise_simulation;
    this.frequence_simulation    = simulateur.frequence_simulation;
    this.assurance_deces_simulation         = simulateur.assurance_deces_simulation;
    this.avance_credit_simulation         = simulateur.avance_credit_simulation;
    this.frais_dossier_simulation         = simulateur.frais_dossier_simulation;
    this.echeance_mensuelle_simulation         = simulateur.echeance_mensuelle_simulation;
    this.assurances_simulation         = simulateur.assurances_simulation;
    this.caractéristiques_simulation         = simulateur.caractéristiques_simulation;
    this.mensualite_simulation         = simulateur.mensualite_simulation;
    this.id_client       = simulateur.id_client;
    this.date_simulation     = new Date();
    this.deleted         = simulateur.deleted ? simulateur.deleted : 0;

};
Simulateur.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO simulation_credit set ?", newEmp, function (err, res) {
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
Simulateur.findById = function (id, result) {
    dbConn.query("Select * from simulation_credit where id_simulation = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Simulateur.findAll = function (result) {
    dbConn.query("Select * from simulation_credit where deleted = 0 ", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('simulation_credit : ', res);  
            result(null, res);
        }
    });   
};
Simulateur.update = function(id, simulation, result){
  dbConn.query("UPDATE simulation_credit SET prix_produit_simulation=?,duree_simulation=?,type_taux_simulation=?,tauxinteret_simulation=?,montant_remise_simulation=?,frequence_simulation=?,assurance_deces_simulation=? WHERE id_simulation = ?", 
  [simulation.prix_produit_simulation,simulation.duree_simulation,simulation.type_taux_simulation,simulation.tauxinteret_simulation,simulation.montant_remise_simulation,simulation.frequence_simulation,simulation.assurance_deces_simulation, id],
   function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Simulateur.delete = function(id, result){
     dbConn.query("DELETE FROM simulation_credit WHERE id_simulation = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Simulateur;
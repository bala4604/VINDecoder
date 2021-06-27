const client = require("../config/db_config");
exports.signin = (req, resl) => {
  try {
    console.log("hello")
    let user1 = req.body;
    
    client.query(
      "SELECT * FROM login where email='" +user1.username +"' AND password='"+user1.password+"'",
      (err, res) => {
        
        if(res.rowCount>0){
                resl.status(200).send({
                 code:200,
                 first_name:res.rows[0].first_name,
                 last_name:res.rows[0].last_name,
                 user_id:res.rows[0].id
                });
              }
        
         else {
          resl.status(200).json({ code: 404 });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.signup = (req, resl) => {
  try {
    console.log("hello")
    let user1 = req.body;
    
    client.query("insert into login(email,first_name,last_name,password) Values( '" +user1.username +"','"+user1.firstname+"','" +user1.lastname +"','"+user1.password+"')",
      (err, res) => {
        
        if(res.rowCount>0){
                resl.status(200).send({
                 code:200
                });
              }
        
         else {
          resl.status(200).json({ code: 404 });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};


exports.storeVINHistory = (req, resl) => {
  try {
    console.log("hello")
    let user1 = req.body;
    console.log("insert into vin_history(vin_no) Values( '" +user1.vin_no +"')")
    client.query("insert into vin_history(vin_no) Values( '" +user1.vin_no +"')",
      (err, res) => {
        
      
          resl.status(200).json({ code: 200 });
        
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.fetchVINHistory = (req, resl) => {
  try {
    console.log("hello")
    let user1 = req.body;
    
    client.query(
      "SELECT * FROM vin_history ORDER BY created_at DESC limit 10 ",
      (err, res) => {
        
     
          resl.status(200).json(res.rows);+986
      
      }
    );
  } catch (error) {
    console.log(error);
  }
};

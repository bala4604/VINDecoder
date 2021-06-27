const controller = require("../controller/user_controller");
const cors = require('cors');


module.exports = function(app) {
  
app.post("/users/login",cors(),  controller.signin);

app.post("/users/connect",cors(),  controller.signup);

app.post("/users/storeVINHistory",cors(),  controller.storeVINHistory);

app.get("/users/fetchVINHistory",cors(),  controller.fetchVINHistory);


}
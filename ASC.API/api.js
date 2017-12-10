const express = require('express');
const router = express.Router();
const logic = require('./controllers/conversion');

// Home page route
router.get('/numbers', function (req, res) {
  const response = logic.all();

  console.log("dsfsdf"+ response);
  response.then(function (result) {res.send(result)});
  //res.send(response);
  //const response = logic.all()
 

});

module.exports = router;

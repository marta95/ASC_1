const express = require('express');
const router = express.Router();
const logic = require('./controllers/conversion');

// Home page route
router.get('/numbers', function (req, res) {
  const response = logic.generateNumber();

  console.log("dsfsdf"+ response);
  //response.then(function (result) {res.send(result)});
  res.send(response);
 
});

module.exports = router;

const express = require('express');
const router = express.Router();
const logic = require('./controllers/conversion');

// Home page route
router.get('/numbers', function (req, res) {
  const response = logic.all();
  console.log(response);
  
  res.send(response);
  //const response = logic.all()
 

});

module.exports = router;

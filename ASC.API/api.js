const express = require('express');
const router = express.Router();
const logic = require('./controllers/conversion');

// Home page route
router.get('/numbers', function (req, res) {
  const response = logic.all();
  
  //console.log(response.length);
 // console.log(response[3]);
  res.send(response);
});

module.exports = router;

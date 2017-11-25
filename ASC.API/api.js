const express = require('express');
const router = express.Router();

// Home page route
router.get('/numbers', function (req, res) {
  res.send('home page');
});

module.exports = router;

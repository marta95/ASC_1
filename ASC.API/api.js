const express = require('express');
const logic = require('./controllers/conversion');
var bodyParser = require('./node_modules/body-parser');
const router = express.Router();

//router.use(bodyParser.urlencoded({extended: true}));
var urlencodedParser =bodyParser.urlencoded({extended: true}); 
router.use(bodyParser.json({ type: 'application/json' }))

router.use(bodyParser.json());


router.get('/numbers', function (req, res) {
  const response = logic.generateNumber();
  console.log(response);
  //response.then(function (result) {res.send(result)});
  res.send(response);
});

router.get('/toAdd',function(req,res){
  console.log(req.query);
  const response = logic.adder(req.query.a, req.query.b);
  const result = logic.number2bcd8421(response);
  console.log(result);
 var add = {
    modular: result, 
  }
  console.log(add);
  res.send(add);
});

router.get('/result', function(req,res){

});



module.exports = router;

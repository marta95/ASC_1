const express = require('express');
const logic = require('./controllers/conversion');
const router = express.Router();

router.get('/numbers', function (req, res) {
  const response = logic.generateNumber();
  console.log(response);
  //response.then(function (result) {res.send(result)});
  res.send(response);
});

router.get('/toAdd', function (req, res) {
  console.log(req.query);
  const response = logic.adder(req.query.a, req.query.b);
  const convertToModular = logic.modularRecord(response);
  const convertToOpposite = logic.oppositeRecord(response);
  const convertToObjective = logic.objectiveRecord(response);
  convertToObjective.then(function (response) {
    var add = {
      modular: convertToModular,
      opposite: convertToOpposite,
      objective: convertToObjective,
    }
    console.log(add);
    res.send(add);
  });
});

router.get('/toExcess', function(req, res){
  console.log(req.query);  
  const response = logic.adder(req.query.a, req.query.b);
  const convertToModular = logic.modularRecordExcess(response);
  const convertToOpposite = logic.oppositeRecordExcess(response);
  const convertToObjective = logic.objectiveRecordExcess(response);
  convertToObjective.then(function (response) {
    var add = {
      modular: convertToModular,
      opposite: convertToOpposite,
      objective: convertToObjective,
    }
    console.log(add);
    res.send(add);
  });
});

router.get('/result', function (req, res) {

});



module.exports = router;

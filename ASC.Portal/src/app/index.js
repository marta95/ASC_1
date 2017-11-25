import Test from './components/test';
import React from 'react';
import ReactDOM from 'react-dom';

var logic = require('./logic')

ReactDOM.render(<Test />, document.getElementById('root'));


console.log(logic.adder(4.7, 5.2));
console.log(logic.number2bcd8421(4));
console.log(logic.number2Excess3(4));
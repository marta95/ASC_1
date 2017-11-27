import Test from './components/test';
import React from 'react';
import ReactDOM from 'react-dom';

// var number2bcd8421 = function (...args) {
//     const arrayOfDigits = [];
//     console.log(args.length);
//     for (var i = 0; i < args.length; i++) {
//         if (args[i] === '0')
//             array.push("0000");
//         else if (args[i] === '1')
//             array.push("0001");
//         else if (args[i] === '2')
//             array.push("0010");
//         else if (args[i] === '3')
//             array.push("0011");
//         else if (args[i] === '4')
//             array.push("0100");
//         else if (args[i] === '5')
//             array.push("0101");
//         else if (args[i] === '6')
//             array.push("0110");
//         else if (args[i] === '7')
//             array.push("0111");
//         else if (args[i] === '8')
//             array.push("1000");
//         else if (args[i] === '9')
//             array.push("1001");
//         else if (args[i] === '.')
//             array.push(".");
//         else if (args[i] === '-')
//             array.push("0.");
//     }
//     return arrayOfDigits.toString().split(" ");
//     console.log(arrayOfDigits);
// }
//console.log(number2bcd8421(['1']));
ReactDOM.render(<Test />, document.getElementById('root'));

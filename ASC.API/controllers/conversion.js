/* function to generating random numbers */
const randomNumber = function (low, high) {
    return Math.random() * (high - low) + low;
}

/* function with parameters representing numerical interval
   from which numbers are generated with added precision to
   two places after decimal */
const generateNumber = function () {
    var number = randomNumber(-50, 50).toFixed(2);
    return number;
}

/* function which adds two numbers */
const adder = function (a, b) {
    return ((+a) + (+b)).toFixed(2);
}

/* function which splits generated numbers into separate digits
   and convert every separate digit to its equivalent in BCD 8421 code
   function returns array of converted numbers */
const number2bcd8421 = function (args) {
    var digits = args.toString().split('');
    const arrayOfDigits = [];
    if (digits[0] == "-") {
        arrayOfDigits.push("1.");
    } else {
        arrayOfDigits.push("0.")
    }
    for (var i = 0; i < digits.length; i++) {
        if (digits[i] == 0)
            arrayOfDigits.push("0000");
        else if (digits[i] == 1)
            arrayOfDigits.push("0001");
        else if (digits[i] == 2)
            arrayOfDigits.push("0010");
        else if (digits[i] == 3)
            arrayOfDigits.push("0011");
        else if (digits[i] == 4)
            arrayOfDigits.push("0100");
        else if (digits[i] == 5)
            arrayOfDigits.push("0101");
        else if (digits[i] == 6)
            arrayOfDigits.push("0110");
        else if (digits[i] == 7)
            arrayOfDigits.push("0111");
        else if (digits[i] == 8)
            arrayOfDigits.push("1000");
        else if (digits[i] == 9)
            arrayOfDigits.push("1001");
        else if (digits[i] == '.')
            arrayOfDigits.push(".");
    }
    console.log(arrayOfDigits);
    return arrayOfDigits.toString().split(" ");
}

/* function which splits generated numbers into separate digits
   and convert every separate digit to its equivalent in BCD Excess-3 code
   function returns array of converted numbers */
const number2Excess3 = function (args) {
    var digits = args.toString().split('');
    const arrayOfDigits = [];
    if (digits[0] == "-") {
        arrayOfDigits.push("1.");
    } else {
        arrayOfDigits.push("0.")
    }
    for (var i = 0; i < digits.length; i++) {
        if (digits[i] == 0)
            arrayOfDigits.push("0011");
        else if (digits[i] == 1)
            arrayOfDigits.push("0100");
        else if (digits[i] == 2)
            arrayOfDigits.push("0101");
        else if (digits[i] == 3)
            arrayOfDigits.push("0110");
        else if (digits[i] == 4)
            arrayOfDigits.push("0111");
        else if (digits[i] == 5)
            arrayOfDigits.push("1000");
        else if (digits[i] == 6)
            arrayOfDigits.push("1001");
        else if (digits[i] == 7)
            arrayOfDigits.push("1010");
        else if (digits[i] == 8)
            arrayOfDigits.push("1011");
        else if (digits[i] == 9)
            arrayOfDigits.push("1100");
        else if (digits[i] == '.')
            arrayOfDigits.push(".");
    }
    console.log(arrayOfDigits);
    return arrayOfDigits.toString().split(" ");
}

const modularRecord = function (args) {
    const digits = args.toString().split('');
    let Bcd8421 = [];
    Bcd8421 = number2bcd8421(digits);
    console.log(Bcd8421);
    const arrayConverted = [];
    if (Bcd8421[0] == "0.") {
        arrayConverted.push(Bcd8421);
    } else {
        for (var i = 0; i < Bcd8421.length; i++) {
            if (Bcd8421[i] == "0000")
                arrayConverted.push("0110");
            else if (Bcd8421[i] == "0001")
                arrayConverted.push("0111");
            else if (Bcd8421[i] == "0010")
                arrayConverted.push("1000");
            else if (Bcd8421[i] == "0011")
                arrayConverted.push("1001");
            else if (Bcd8421[i] == "0100")
                arrayConverted.push("1010");
            else if (Bcd8421[i] == "0101")
                arrayConverted.push("1011");
            else if (Bcd8421[i] == "0110")
                arrayConverted.push("1100");
            else if (Bcd8421[i] == "0111")
                arrayConverted.push("1101");
            else if (Bcd8421[i] == "1000")
                arrayConverted.push("1110");
            else if (Bcd8421[i] == "1001")
                arrayConverted.push("1111");
            else if (Bcd8421[i] == '.')
                arrayConverted.push(".");
        }
    }
    console.log(arrayConverted);
    return arrayConverted.toString().split(" ");
}

const oppositeRecord = function(args){

}

const objectiveRecord = function(args){
    
}

const all = function () {
    const a = generateNumber();
    console.log(a);
    const b = generateNumber();
    console.log(b);
    const add = adder(a, b);
    console.log(add);
    //const digits = number2bcd8421(add);
    //const convertedEx = number2Excess3(add);
    const convertToModular = modularRecord(add);
    console.log("dupa2");

    const array = [];
    array.push(a);
    array.push(b);
    array.push(add);
    array.push(digits);
    array.push(convertedEx);
    array.push(convertToModular);
    //array.push(converted);
    return array;
}

module.exports = {
    number2bcd8421: number2bcd8421,
    number2Excess3: number2Excess3,
    adder: adder,
    randomNumber: randomNumber,
    generateNumber: generateNumber,
    modularRecord:modularRecord,
    all: all
}
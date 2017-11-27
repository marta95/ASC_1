
var number2bcd8421 = function (args) {
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

var number2Excess3 = function (args) {
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

var randomNumber = function (low, high) {
    return Math.random() * (high - low) + low;
}

var generateNumber = function () {
    var number = randomNumber(-50, 50).toFixed(2);
    return number;
}

var adder = function (a, b) {
    return ((+a) + (+b)).toFixed(2);
}


const all = function () {
    const a = generateNumber();
    console.log(a);
    const b = generateNumber();
    console.log(b);
    const add = adder(a, b);
    console.log(add);
    const digits = number2bcd8421(add);
    const convertedEx = number2Excess3(add);
    console.log("dupa2");
    //console.log(digits);


    const array = [];
    array.push(a);
    array.push(b);
    array.push(add);
    array.push(digits);
    array.push(convertedEx);
    //array.push(converted);
    return array;
}

module.exports = {
    number2bcd8421: number2bcd8421,
    number2Excess3: number2Excess3,
    adder: adder,
    randomNumber: randomNumber,
    generateNumber: generateNumber,
    all: all
}
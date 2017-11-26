
var number2bcd8421 = function (...args) {
    const arrayOfDigits = [];
    for (var i = 0; i < args.length; i++) {
        if (args[i] === 0)
            array.push("0000");
        else if (args[i] === 1)
            array.push("0001");
        else if (args[i] === 2)
            array.push("0010");
        else if (args[i] === 3)
            array.push("0011");
        else if (args[i] === 4)
            array.push("0100");
        else if (args[i] === 5)
            array.push("0101");
        else if (args[i] === 6)
            array.push("0110");
        else if (args[i] === 7)
            array.push("0111");
        else if (args[i] === 8)
            array.push("1000");
        else if (args[i] === 9)
            array.push("1001");
        else if (args[i] === '.')
            array.push(".");
        else if (args[i] === '-')
            array.push("0.");
    }
    return arrayOfDigits.toString().split(" ");
}

var number2Excess3 = function (number) {
    if (number === 0)
        return "0011";
    else if (number === 1)
        return "0100";
    else if (number === 2)
        return "0101";
    else if (number === 3)
        return "0110";
    else if (number === 4)
        return "0111";
    else if (number === 5)
        return "1000";
    else if (number === 6)
        return "1001";
    else if (number === 7)
        return "1010";
    else if (number === 8)
        return "1011";
    else if (number === 9)
        return "1100";
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

const splitNumbers = function (a) {
    var digits = a.toString().split('');
    return digits;
}

const convert2bcd8421 = function (...args) {
    var array
    for (var i = 0; i < args.lenght; i++) {
        console.log(args.lenght);
    }
}

const all = function () {
    const a = generateNumber();
    console.log(a);
    const b = generateNumber();
    console.log(b);
    const add = adder(a, b);
    console.log(add);
    const digits = splitNumbers(add);
    console.log(digits);
    const converted = convert2bcd8421(digits);
    console.log(converted);

    const array = [];
    array.push(a);
    array.push(b);
    array.push(add);
    array.push(digits);
    array.push(converted);
    return array;
}

module.exports = {
    number2bcd8421: number2bcd8421,
    number2Excess3: number2Excess3,
    adder: adder,
    randomNumber: randomNumber,
    generateNumber: generateNumber,
    splitNumbers: splitNumbers,
    convert2bcd8421: convert2bcd8421,
    all: all
}
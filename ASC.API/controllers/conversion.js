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
    return new Promise((resolve, reject) => {
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
        resolve(arrayOfDigits);
    });
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

const modularRecord = async function (args) {
    try {
        var Bcd8421 = [];
        Bcd8421 = await number2bcd8421(args);
        const arrayConverted = [];
        if (Bcd8421[0] == "0.") {
            arrayConverted.push(Bcd8421);
        } else {
            arrayConverted.push(Bcd8421);
        }
        return arrayConverted.toString().split(" ");
    } catch (err) {
        console.log(err);
    }
}

const preperToOpposite = async function (args) {
    return new Promise((resolve, reject) => {
        var Bcd8421 = [];
        Bcd8421 = args;
        console.log(args);
        const arrayConverted = [];
        if (Bcd8421[0] == "0.") {
            arrayConverted.push(Bcd8421);
            resolve(arrayConverted.toString().split(","));
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
                else if (Bcd8421[i] == '1.')
                    arrayConverted.push("1.");
            }
        }
        //console.log(arrayConverted);
        resolve(arrayConverted);
    });
}

const oppositeRecord = async function (args) {
    try {
        var array = [];
        var preparedArray = [];
        preparedArray = await number2bcd8421(args);
        console.log(preparedArray);
        var arrayConverted = [];
        arrayConverted = await preperToOpposite(preparedArray);
        console.log(arrayConverted);
    } catch (err) { }

    return new Promise((resolve, reject) => {
        if (arrayConverted[0] == "0.") {
            resolve(arrayConverted);
            console.log("duppp")
            console.log(arrayConverted);
        } else {
            for (var i = 0; i < arrayConverted.length; i++) {
                if (arrayConverted[i] == "0000")
                    array.push("1111");
                else if (arrayConverted[i] == "0001")
                    array.push("1110");
                else if (arrayConverted[i] == "0010")
                    array.push("1101");
                else if (arrayConverted[i] == "0011")
                    array.push("1100");
                else if (arrayConverted[i] == "0100")
                    array.push("1011");
                else if (arrayConverted[i] == "0101")
                    array.push("1010");
                else if (arrayConverted[i] == "0110")
                    array.push("1001");
                else if (arrayConverted[i] == "0111")
                    array.push("1000");
                else if (arrayConverted[i] == "1000")
                    array.push("0111");
                else if (arrayConverted[i] == "1001")
                    array.push("0110");
                else if (arrayConverted[i] == "1010")
                    array.push("0101");
                else if (arrayConverted[i] == "1011")
                    array.push("0100");
                else if (arrayConverted[i] == "1100")
                    array.push("0011");
                else if (arrayConverted[i] == "1101")
                    array.push("0010");
                else if (arrayConverted[i] == "1110")
                    array.push("0001");
                else if (arrayConverted[i] == "1111")
                    array.push("0000");
                else if (arrayConverted[i] == ".")
                    array.push(".");
                else if (arrayConverted[i] == "1.")
                    array.push("1.");
            }
        }
        resolve(array);
    });
}

const objectiveRecord = async function (args) {
    try {
        var arrayOpposite = [];
        arrayOpposite = await oppositeRecord(args);
        console.log("dupa check 1");
        console.log(arrayOpposite);
        var array = [];
        console.log(arrayOpposite.length);
    } catch (err) { }
    if (arrayOpposite[0] == "0.") {
        array.push(arrayOpposite);
        return array.toString().split(",");
    } else {
        for (var i = 0; i < arrayOpposite.length - 1; i++) {
            console.log("hyyyy")
            array.push(arrayOpposite[i]);
        }
        if (i = arrayOpposite.length - 1) {
            if (arrayOpposite[i] == "0000")
                array.push("0001");
            else if (arrayOpposite[i] == "0001")
                array.push("0010");
            else if (arrayOpposite[i] == "0010")
                array.push("0011");
            else if (arrayOpposite[i] == "0011")
                array.push("0100");
            else if (arrayOpposite[i] == "0100")
                array.push("0101");
            else if (arrayOpposite[i] == "0101")
                array.push("0100");
            else if (arrayOpposite[i] == "0110")
                array.push("0111");
            else if (arrayOpposite[i] == "0111")
                array.push("1000");
            else if (arrayOpposite[i] == "1000")
                array.push("1001");
            else if (arrayOpposite[i] == "1001")
                array.push("1010");
            else if (arrayOpposite[i] == "1010")
                array.push("1011");
            else if (arrayOpposite[i] == "1011")
                array.push("1100");
            else if (arrayOpposite[i] == "1100")
                array.push("1101");
            else if (arrayOpposite[i] == "1101")
                array.push("1110");
            else if (arrayOpposite[i] == "1110")
                array.push("1111");
            else if (arrayOpposite[i] == "1111")
                array.push("0000");
        }

        console.log(array);
        return array;
    }
}

const all = async function () {
    try {
        const a = generateNumber();
        //console.log(a);
        const b = generateNumber();
        //  console.log(b);
        const add = adder(a, b);
        // console.log(add);
        //const digits = number2bcd8421(add);
        //const convertedEx = number2Excess3(add);
        //const convertToModular = modularRecord(add);
        //console.log(convertToModular);
        //const convertToOpposite = oppositeRecord(add);
        //convertToOpposite.then(function (response) { console.log(response) });


        const convertToObjective = objectiveRecord(add);
        convertToObjective.then(function (response) { console.log(response) });

        const array = [];
        array.push(a);
        array.push(b);
        array.push(add);
        //array.push(digits);
        //array.push(convertedEx);
        //array.push(convertToModular);
        //array.push(convertToOpposite);

        //array.push(converted);
        return array;
    } catch (err) { }
}

module.exports = {
    number2bcd8421: number2bcd8421,
    number2Excess3: number2Excess3,
    adder: adder,
    randomNumber: randomNumber,
    generateNumber: generateNumber,
    modularRecord: modularRecord,
    preperToOpposite: preperToOpposite,
    oppositeRecord: oppositeRecord,
    objectiveRecord: objectiveRecord,
    all: all
}
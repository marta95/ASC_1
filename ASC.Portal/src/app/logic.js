var number2bcd8421 = function (number){
    if (number === 0)
        return "0000";
    else if (number === 1)
        return "0001";
    else if(number === 2)
		return "0010";
	else if(number === 3)
		return "0011";
	else if(number === 4)
		return "0100";
	else if(number === 5)
		return "0101";
	else if(number === 6)
		return "0110";
	else if(number === 7)
		return "0111";
	else if(number === 8)
		return "1000";
	else if(number === 9)
		return "1001";
}

var number2Excess3 = function (number){
    if (number === 0)
        return "0011";
    else if (number === 1)
        return "0100";
    else if(number === 2)
		return "0101";
	else if(number === 3)
		return "0110";
	else if(number === 4)
		return "0111";
	else if(number === 5)
		return "1000";
	else if(number === 6)
		return "1001";
	else if(number === 7)
		return "1010";
	else if(number === 8)
		return "1011";
	else if(number === 9)
		return "1100";
}

var adder = function(a,b){
    return a+b;
}

module.exports = {
    number2bcd8421: number2bcd8421,
    number2Excess3: number2Excess3,
    adder: adder
}
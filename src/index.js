module.exports = function toReadable(number) {
    // library of numbers
    const zero = 'zero';
    const one = 'one';
    const two = 'two';
    const three = 'three';
    const four = 'four';
    const five = 'five';
    const six = 'six';
    const seven = 'seven';
    const eight = 'eight';
    const nine = 'nine';

    const ten = 'ten';
    const eleven = 'eleven';
    const twelve = 'twelve';
    const thirteen = 'thirteen';
    const fourteen = 'fourteen';
    const fifteen = 'fifteen';
    const sixteen = 'sixteen';
    const seventeen = 'seventeen'
    const eighteen = 'eighteen';
    const nineteen = 'nineteen';

    const twenty = 'twenty';
    const thirty = 'thirty';
    const forty = 'forty';
    const fifty = 'fifty';
    const sixty = 'sixty';
    const seventy = 'seventy';
    const eighty = 'eighty';
    const ninety = 'ninety';

    const hundred = 'hundred';
    const thousand = 'thousand';

    //variables
    let previousRemainder;
    let result = '';
    let tenPowers = 1;
    let remainder;

    //function
    do {
        remainder = number % 10;
        if (tenPowers == 1) {
            switch (remainder) {
                case 0:
                    result += zero;
                    break;
                case 1:
                    result += one;
                    break;
                case 2:
                    result += two;
                    break;
                case 3:
                    result += three;
                    break;
                case 4:
                    result += four;
                    break;
                case 5:
                    result += five;
                    break;
                case 6:
                    result += six;
                    break;
                case 7:
                    result += seven;
                    break;
                case 8:
                    result += eight;
                    break;
                case 9:
                    result += nine;
                    break;
            }
        } else if (tenPowers == 2) {
            switch (remainder) {
                case 0:
                    break;
                case 1:
                    switch (previousRemainder) {
                        case 0:
                            result = result.replace(zero, ten);
                            break;
                        case 1:
                            result = result.replace(one, eleven);
                            break;
                        case 2:
                            result = result.replace(two, twelve);
                            break;
                        case 3:
                            result = result.replace(three, thirteen);
                            break;
                        case 4:
                            result = result.replace(four, fourteen);
                            break;
                        case 5:
                            result = result.replace(five, fifteen);
                            break;
                        case 6:
                            result = result.replace(six, sixteen);
                            break;
                        case 7:
                            result = result.replace(seven, seventeen);
                            break;
                        case 8:
                            result = result.replace(eight, eighteen);
                            break;
                        case 9:
                            result = result.replace(nine, nineteen);
                            break;
                    }
                    break;
                case 2:
                    if (previousRemainder == 0) {
                        result = result.replace(zero, twenty)
                        break;
                    } else {
                        result += ' ' + twenty;
                        break;
                    }
                case 3:
                    if (previousRemainder == 0) {
                        result = result.replace(zero, thirty)
                        break;
                    } else {
                        result += ' ' + thirty;
                        break;
                    }
                case 4:
                    if (previousRemainder == 0) {
                        result = result.replace(zero, forty)
                        break;
                    } else {
                        result += ' ' + forty;
                        break;
                    }
                case 5:
                    if (previousRemainder == 0) {
                        result = result.replace(zero, fifty)
                        break;
                    } else {
                        result += ' ' + fifty;
                        break;
                    }
                case 6:
                    if (previousRemainder == 0) {
                        result = result.replace(zero, sixty)
                        break;
                    } else {
                        result += ' ' + sixty;
                        break;
                    }
                case 7:
                    if (previousRemainder == 0) {
                        result = result.replace(zero, seventy)
                        break;
                    } else {
                        result += ' ' + seventy;
                        break;
                    }
                case 8:
                    if (previousRemainder == 0) {
                        result = result.replace(zero, eighty)
                        break;
                    } else {
                        result += ' ' + eighty;
                        break;
                    }
                case 9:
                    if (previousRemainder == 0) {
                        result = result.replace(zero, ninety)
                        break;
                    } else {
                        result += ' ' + ninety;
                        break;
                    }
            }
        } else if (tenPowers === 3) {
            switch (remainder) {
                case 0:
                    break;
                case 1:
                    if (result == zero) {
                        result = result.replace(zero, "");
                        result += hundred + ' ' + one;
                        break;
                    }
                    result += ' ' + hundred + ' ' + one;
                    break;
                case 2:
                    if (result == zero) {
                        result = result.replace(zero, "");
                        result += hundred + ' ' + two;
                        break;
                    }
                    result += ' ' + hundred + ' ' + two;
                    break;
                case 3:
                    if (result == zero) {
                        result = result.replace(zero, "");
                        result += hundred + ' ' + three;
                        break;
                    }
                    result += ' ' + hundred + ' ' + three;
                    break;
                case 4:
                    if (result == zero) {
                        result = result.replace(zero, "");
                        result += hundred + ' ' + four;
                        break;
                    }
                    result += ' ' + hundred + ' ' + four;
                    break;
                case 5:
                    if (result == zero) {
                        result = result.replace(zero, "");
                        result += hundred + ' ' + five;
                        break;
                    }
                    result += ' ' + hundred + ' ' + five;
                    break;
                case 6:
                    if (result == zero) {
                        result = result.replace(zero, "");
                        result += hundred + ' ' + six;
                        break;
                    }
                    result += ' ' + hundred + ' ' + six;
                    break;
                case 7:
                    if (result == zero) {
                        result = result.replace(zero, "");
                        result += hundred + ' ' + seven;
                        break;
                    }
                    result += ' ' + hundred + ' ' + seven;
                    break;
                case 8:
                    if (result == zero) {
                        result = result.replace(zero, "");
                        result += hundred + ' ' + eight;
                        break;
                    }
                    result += ' ' + hundred + ' ' + eight;
                    break;
                case 9:
                    if (result == zero) {
                        result = result.replace(zero, "");
                        result += hundred + ' ' + nine;
                        break;
                    }
                    result += ' ' + hundred + ' ' + nine;
                    break;
            }
        } else if (tenPowers == 4) {
            switch (remainder) {
                case 0:
                    break;
                case 1:
                    result += ' ' + thousand + ' ' + one;
                    break;
                case 2:
                    result += ' ' + thousand + ' ' + two;
                    break;
                case 3:
                    result += ' ' + thousand + ' ' + three;
                    break;
                case 4:
                    result += ' ' + thousand + ' ' + four;
                    break;
                case 5:
                    result += ' ' + thousand + ' ' + five;
                    break;
                case 6:
                    result += ' ' + thousand + ' ' + six;
                    break;
                case 7:
                    result += ' ' + thousand + ' ' + seven;
                    break;
                case 8:
                    result += ' ' + thousand + ' ' + eight;
                    break;
                case 9:
                    result += ' ' + thousand + ' ' + nine;
                    break;
            }
        } else if (tenPowers === 5) {
            switch (remainder) {
                case 0:
                    break;
                case 1:
                    switch (previousRemainder) {
                        case 0:
                            result += ten;
                            break;
                        case 1:
                            result = result.replace(/one$/, eleven);
                            break;
                        case 2:
                            result = result.replace(/two$/, twelve);
                            break;
                        case 3:
                            result = result.replace(/three$/, thirteen);
                            break;
                        case 4:
                            result = result.replace(/four$/, fourteen);
                            break;
                        case 5:
                            result = result.replace(/five$/, fifteen);
                            break;
                        case 6:
                            result = result.replace(/six$/, sixteen);
                            break;
                        case 7:
                            result = result.replace(/seven$/, seventeen);
                            break;
                        case 8:
                            result = result.replace(/eight$/, eighteen);
                            break;
                        case 9:
                            result = result.replace(/nine$/, nineteen);
                            break;
                    }
                    break;
                case 2:
                    result += ' ' + twenty;
                    break;
                case 3:
                    result += ' ' + thirty;
                    break;
                case 4:
                    result += ' ' + forty;
                    break;
                case 5:
                    result += ' ' + fifty;
                    break;
                case 6:
                    result += ' ' + sixty;
                    break;
                case 7:
                    result += ' ' + seventy;
                    break;
                case 8:
                    result += ' ' + eighty;
                    break;
                case 9:
                    result += ' ' + ninety;
                    break;
            }
        } else if (tenPowers == 6) {
            switch (remainder) {
                case 0:
                    break;
                case 1:
                    result += ' ' + hundred + ' ' + one;
                    break;
                case 2:
                    result += ' ' + hundred + ' ' + two;
                    break;
                case 3:
                    result += ' ' + hundred + ' ' + three;
                    break;
                case 4:
                    result += ' ' + hundred + ' ' + four;
                    break;
                case 5:
                    result += ' ' + hundred + ' ' + five;
                    break;
                case 6:
                    result += ' ' + hundred + ' ' + six;
                    break;
                case 7:
                    result += ' ' + hundred + ' ' + seven;
                    break;
                case 8:
                    result += ' ' + hundred + ' ' + eight;
                    break;
                case 9:
                    result += ' ' + hundred + ' ' + nine;
                    break;
            }
        } else {
            return "Overflow Error";
        }
        number = Math.floor(number / 10);
        previousRemainder = remainder;
        tenPowers += 1;
    } while (number != 0);

    let reverseResult = result.split(" ").reverse().join(" ");
    return reverseResult;
}
const sumAll = function(intA, intB) {

    let total = 0;

    // Errors
    if (intA < 0 || intB < 0) {
        return 'ERROR';
    }

    if (typeof intA != 'number' || typeof intB != 'number'){
        return 'ERROR';
    }

    // distinguish which int is higher or lower
    if (intA < intB) {
        firstInt = intA;
        lastInt = intB;
    }
    else if (intA > intB) {
        firstInt = intB;
        lastInt = intA;
    }

    // find number of inters to sum
    let num = (lastInt - firstInt) + 1;

    // sum integers
    for (var i = 0; i < num; i++) {
        total += firstInt + i;
    }

    return total;
}

module.exports = sumAll

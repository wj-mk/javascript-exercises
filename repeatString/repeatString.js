const repeatString = function(string, repeats) {
    if (repeats < 0) {
        return 'ERROR';
    }
    else {
        let run = 0;
        let output = '';

        while (run < repeats) {
            output += string;
            run += 1;
        };

        return output;
    }
}

module.exports = repeatString

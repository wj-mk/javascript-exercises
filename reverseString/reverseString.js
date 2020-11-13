const reverseString = function(string) {
    let index = string.length - 1;
    let reverse = '';

    while (index >= 0) {
        reverse += string.charAt(index)
        index -= 1;
    };

    return reverse;
}

module.exports = reverseString

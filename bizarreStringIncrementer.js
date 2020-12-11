// Start your implementation here
function bizarreStringIncrementer(str) {
    let number = 0,
        index = getIndex(str);
    number = Number(str.substring(index + 1, str.length));
    if (isNaN(number)) number = 0;
    if (number > 0) {
        // check for leading zero if so then move forward
        if (number.toString() !== str.substring(index + 1, str.length)) {

            index += str.substring(index + 1, str.length).indexOf(number);
            // check if starting number is 9 then one step back
            if (number.toString()[0] == '9') {
                index -= 1;
            }
        }
    }
    return str.substring(0, index + 1) + (number + 1);
}

function getIndex(str) {
    for (var ind = str.length - 1; ind > -1; ind--) {
        if (isNaN(str[ind])) {
            return ind;
        }
    }
    return str.length - 1;
}

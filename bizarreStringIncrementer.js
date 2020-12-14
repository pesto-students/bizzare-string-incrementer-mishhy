// Start your implementation here
export function bizarreStringIncrementer(str) {
    let number = 0,
        index = getLastNumberIndex(str);
    number = Number(str.substring(index + 1, str.length));
    if (isNaN(number)) number = 0;
    if (number > 0) {
        // check for leading zero if so then move forward
        if (number.toString() !== str.substring(index + 1, str.length)) {
            index += str.substring(index + 1, str.length).indexOf(number);
            // if number is of form 999... then take one step aback
            if (number.toString()[0] === '9' && number.toString()[0] != (number + 1).toString()[0]) {
                index -= 1;
            }
        }
    }
    return str.substring(0, index + 1) + (number + 1);
}

function getLastNumberIndex(str) {
    for (let ind = str.length - 1; ind > -1; ind--) {
        if (isNaN(str[ind])) {
            return ind;
        }
    }
    return -1;
}

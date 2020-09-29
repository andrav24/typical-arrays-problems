
exports.min = function min (array) {
    if (arguments.length === 0 || array.length === 0) return 0;
    return array.reduce((acc,val) => val < acc ? val : acc, array[0]);
}

exports.max = function max (array) {
    if (arguments.length === 0 || array.length === 0) return 0
    return array.reduce((acc,val) => val > acc ? val : acc, array[0])
}

exports.avg = function avg (array) {
    if (arguments.length === 0 || array.length === 0) return 0
    return array.reduce((acc,val) => acc + val, 0) / array.length
}

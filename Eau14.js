function getArgument() {
    const argument = process.argv.slice(2)
    return argument
}

function checkArgumentLength(nombreArgument) {
    const argument = process.argv.slice(2).length
    if (argument < nombreArgument) {
        return true
    } else {
        return false
    }
}

function getSortByCodeAscii(argument) {
    for (let i = 0; i < argument.length; i++) {
        let imin = i
        for (let j = i; j < argument.length; j++) {
            if (argument[j].charCodeAt(0) < argument[imin].charCodeAt(0)) {
            [argument[imin], argument[j]] = [argument[j], argument[imin]];
            }
        }
    }
    return argument
}

function resolution() {
    if (checkArgumentLength(2)) {
        console.log("Error")
    } else {
        console.log(getSortByCodeAscii(getArgument()))
    }
}

resolution()


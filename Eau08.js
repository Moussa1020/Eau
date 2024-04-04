function getArgument() {
    const argument = process.argv.slice(2)
    return argument
}

function checkArgumentLength(nombreArgument) {
    const argument = process.argv.slice(2).length
    if (argument === nombreArgument) {
        return true
    } else {
        return false
    }
}

function onlyNumber(argument) {
    let isOnlyNumber = true
    for (let i = 0; i < argument.length; i++) {
        let argumentCodeAscii = argument[i].charCodeAt(0)
        if (argumentCodeAscii <= 47 || argumentCodeAscii >= 58) {
            isOnlyNumber = false
        }
    }
    return isOnlyNumber
}

function resolution() {
    if (!checkArgumentLength(1)) {
        console.log("Error")
    } else {
        console.log(onlyNumber(getArgument()))
    }
}

resolution()
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

function isString(parametre) {
    let isString = false
    for (let i = 0; i < parametre.length; i++) {
        if (isNaN(parametre[i])) {
            return true
        }
    } 
    return isString
}

function sortBySelection(argument) {
    for (let i = 0; i < argument.length; i++) {
        let imin = i
        for (let j = i; j < argument.length; j++) {
            if (parseInt(argument[j]) < parseInt(argument[imin])) {
            [argument[imin], argument[j]] = [argument[j], argument[imin]];
            }
        }
    }
    return argument
}

function resolution() {
    if (checkArgumentLength(2)) {
        console.log("Error")
    } else if (isString(getArgument())) {
        console.log("Veuillez Entrer que des chiffres SVP")
    } else {
        console.log(sortBySelection(getArgument()))
    }
}

resolution()
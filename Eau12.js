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
    for (let i = 0; i = parametre.length; i++) {
        if (isNaN(parametre[i])) {
        return true
    } else{
        return false
        }
    } 
}

function bubbleSort(argument) {
    const newArgument = argument
    for (let i = newArgument.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (parseInt(newArgument[j+1]) < parseInt(newArgument[j])) {
                [newArgument[j], newArgument[j+1]] = [newArgument[j+1], newArgument[j]]
            }
        }
    }
    return newArgument
}

function resolution() {
    if (checkArgumentLength(2)) {
        console.log("Error")
    } else if (isString(getArgument())) {
        console.log("Veuillez Entrer que des chiffres SVP")
    } else {
        console.log(bubbleSort(getArgument()))
    }
}

resolution()
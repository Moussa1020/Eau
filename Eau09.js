function getArgument() {
    const argument = process.argv.slice(2)
    return argument
}

function isString(parametre) {
    if (!isNaN(parametre[0]) || !isNaN(parametre[1])) {
        return true
    } else{
        return false
    }
}

function checkArgumentLength(nombreArgument) {
    const argument = process.argv.slice(2).length
    if (argument === nombreArgument) {
        return true
    } else {
        return false
    }
}

function getMinMax(argument) {
    const newArgument = argument
    let a = parseInt(newArgument[0])
    let b = parseInt(newArgument[1])
    if (a > b) {
        a = parseInt(newArgument[1])
        b = parseInt(newArgument[0])
    } 
    return [a, b]
}

function betweenMinMax(argument) {
    let betweenMinMax = [parseInt(argument[0])]
    for (let i = 1; i < argument[1] - argument[0]; i++) {
        betweenMinMax.push(parseInt(argument[0]) + i)
    }
    return betweenMinMax
}

function resolution() {
    if (!checkArgumentLength(2)) {
        console.log("Error")
    } else if (isString(getArgument())) {
        console.log("Veuillez Entrer que des chiffre SVP!!!")
    } else {
        console.log(betweenMinMax(getMinMax(getArgument())))
    }
}

resolution()
function getArgument() {
    const argument = process.argv[2]
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

function isString(parametre) {
    let isString = false
    for (let i = 0; i < parametre.length; i++) {
        if (isNaN(parametre[i])) {
            return true
        }
    } 
    return isString
}

function getFirstCaraterInCapital(argument) {
    let newArgument = argument
    let capitalCarater = ""
    for (let i = 0; i < newArgument.length; i++) {
        if (i === 0) {
            if (newArgument[i].charCodeAt(0) >= 65 && newArgument[i].charCodeAt(0) <= 90) {
                capitalCarater += newArgument[i]
            } else {
                capitalCarater += String.fromCharCode(newArgument[i].charCodeAt(0) - 32)
            }
        }
        else{
            if (newArgument[i].charCodeAt(0) >= 65 && newArgument[i].charCodeAt(0) <= 90) {
                capitalCarater += String.fromCharCode(newArgument[i].charCodeAt(0) + 32)
            } else {
                capitalCarater += newArgument[i]
            }
            
        }
    }
    return capitalCarater
}

function capitalLetter(parametre) {
    let newArgument = parametre.split(' ');
    let result = []
    for (let i = 0; i < newArgument.length; i++) {
        result.push(getFirstCaraterInCapital(newArgument[i]))
    }
    return result.join(' ')
        
}

function resolution() {
    if (!checkArgumentLength(1)) {
        console.log("Error, Veuillez entre 1 seul argument svp")
    } else if (!isString(getArgument())) {
        console.log("Error, Veuillez n'est pas entrer de chiffre svp")
    } else {
        console.log(capitalLetter(getArgument()))
    }
}

resolution()
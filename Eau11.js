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

function getDifferenceMin(argument) {
    const newArgument = argument
    let differenceMin = [1000000]
    for (let i = 0; i < newArgument.length; i++) {    
       for (let j = i+1; j < newArgument.length; j++) {
        let result = 0
        if (parseInt(newArgument[i]) > parseInt(newArgument[j])) {
            result = parseInt(newArgument[i]) - parseInt(newArgument[j])
        }else{
            result = parseInt(newArgument[j]) - parseInt(newArgument[i])
        }
        if (result < differenceMin[0]) {
            differenceMin[0] = result
        }
       } 
    }
    return differenceMin[0]
}

function resolution() {
    if (checkArgumentLength(2)) {
        console.log("Error")
    } else if (isString(getArgument())){
        console.log("Veuillez entre que des chiffre SVP")
    } else {
        console.log(getDifferenceMin(getArgument()))
    }
}

resolution()
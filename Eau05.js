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

function isStringInString(parametre) {
    const firstArgument = parametre[0];
    const SecondArgument = parametre[1]
    const stringInStringRegex = new RegExp(SecondArgument, "gi")
    const test = stringInStringRegex.test(firstArgument)
    if (test) {
        return true
    } else {
        return false
    }
}

function resolution() {
    if (!checkArgumentLength(2)) {
        console.log("Error veuillez entrer 2 argument")
    } else if (isString(getArgument())) {
        console.log("Error veuillez n'est pas entrer de chiffre SVP")
    } else {
        console.log(isStringInString(getArgument()))
    }
}


resolution()




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

function getIndexWanted(parametre) {
    const firstArgument = parametre.slice(0, -1);
    const SecondArgument = parametre.slice(-1)
    const indexRegex = new RegExp(SecondArgument)
    let indexWanted = 0
    for (let i = 0; i < firstArgument.length; i++) {
        if (indexRegex.test(firstArgument[i])) {
            break
        }
        indexWanted += 1
        if (i === firstArgument.length - 1) {
            indexWanted = -1
        }
    }
    return indexWanted
}

function resolution() {
    if (checkArgumentLength(2)) {
        console.log("Veuillez entrer au moin 2 argument")
    } else {
        console.log(getIndexWanted(getArgument()))
    }
}

resolution()




function getArgument() {
    const argument = process.argv[2]
    return argument
}

function isString(parametre) {
    if (isNaN(parametre)) {
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

function checkArgumuent(argument) {
    const newArgument = argument
    let isCorrectArgument = true
    for (let i = 0; i < newArgument.length; i++) {
        let argumentAsciiCode = newArgument.charCodeAt(i)
        if (argumentAsciiCode <= 64 ||argumentAsciiCode >= 91 && argumentAsciiCode <= 96 || argumentAsciiCode >= 123) {
            isCorrectArgument = false
        }
    }
    return isCorrectArgument
}

function capitalLetterOnTwo(argument) {
    let newArgument = argument.split('');
    for (let i = 0; i < newArgument.length; i++) {
        let argumentAsciiCode = newArgument[i].charCodeAt(0)
        if (i % 2 === 0) {
            if (argumentAsciiCode >= 65 && argumentAsciiCode <= 90) {
                newArgument[i] = newArgument[i]
            } else {
                let charcode = String.fromCharCode(newArgument[i].charCodeAt(0) - 32)
                newArgument[i] = charcode
            }
            
        }else{
            if (argumentAsciiCode >= 65 && argumentAsciiCode <= 90) {
                let charcode = String.fromCharCode(newArgument[i].charCodeAt(0) + 32)
                newArgument[i] = charcode
            } else {
                newArgument[i] = newArgument[i]
            }
        }
    }
    return newArgument.join('')
        
}


function resolution() {
    if (!checkArgumentLength(1)) {
        console.log("Error, Veuillez entre 1 seul argument svp")
    } else if (!isString(getArgument())) {
        console.log("Error, Veuillez n'est pas entrer de chiffre svp")
    } else {
        console.log(capitalLetterOnTwo(getArgument()))
    }
}
resolution()
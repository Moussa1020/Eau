function getArgument() {
    const argument = process.argv.slice(2)
    return parseInt(argument)
}

function checkArgument(argument) {
    if (argument < 0 || isNaN(argument)) {
        return true;
    } else {
        return false;
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

function nextPrimeNumber(argument) {
    let newArgument = argument + 1
    let isPrime = true
    let primeNumber = 0
    for (let i = newArgument; i < newArgument + 1; i++) {
        for (let j = 2; j < newArgument; j++) {
            if (i % j === 0) {
                isPrime = false
                newArgument = newArgument + 1
                break
            }
            isPrime = true
        }
        if (isPrime) {
            primeNumber = i
        }
    }
    return primeNumber
}

function resolution() {
    if (!checkArgumentLength(1)){
        console.log("Veuillez entrer qu'un seul argument SVP!!!")
    } else if (checkArgument(process.argv[2])) {
        console.log("Error")
    } else {
        console.log(nextPrimeNumber(getArgument()))
    }
}

resolution()


function fibonacci() {
    const suiteFibonacci = [0, 1]
    for (let i = 0; i < 100; i++) {
        for (let j = i+1; j < i+2; j++) {
            let nextSequenceFibonacci = suiteFibonacci[i] + suiteFibonacci[j]
            suiteFibonacci.push(nextSequenceFibonacci)
        }
    }
    return suiteFibonacci
}

function checkArgument(argument) {
    if (argument < 0 || isNaN(argument) || argument.lenght > 1) {
        return true;
    } else {
        return false;
    }
}

function getArgument() {
    const argument = process.argv.slice(2)
    return argument
}

// gestion d'erreur
function fibonacciN_eme() {
    if (checkArgument(process.argv[2])) {
        console.log("-1")
    } else {
        const suiteFibonacci = fibonacci()
        console.log(suiteFibonacci[getArgument()]) 
    }
}

fibonacciN_eme()

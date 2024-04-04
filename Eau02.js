function reverseParams(parametre) {
    const newParametre = parametre
    for (let i = newParametre.length; i > 0; i--) {
        console.log(newParametre[i-1])
    }
}

function checkArgument(argument) {
    if (argument.length <= 0) {
        return false
    } else {
        return true
    }
}

function getParametre() {
    const parametre = process.argv.slice(2)
    return parametre
}

// Gestion d'erreur
if (!checkArgument(["1", "2"])) {
    console.log("Error");
    return
}

// Resolution et Affichage
console.log(reverseParams(getParametre()))


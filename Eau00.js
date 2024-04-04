function getCombinaisonOfTree() {
    let combinaison = []
    for (let i = 48; i < 58; i++) {
        for (let j = i+1; j < 58; j++) {
            for (let k = j+1; k < 58; k++) {
                if (i === j && j === k) {
                    combinaison = combinaison
                } else if (i === j || j === k || i === k) {
                    combinaison = combinaison
                } else {
                    let test = String.fromCharCode(i,j,k)
                    combinaison.push(test)
                }  
            }
        }
    }
    return combinaison
}


console.log(getCombinaisonOfTree())


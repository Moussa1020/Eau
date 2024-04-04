function getCombinaisonOfTwo() {
    let combinaison = []
    for (let i = 48; i < 58; i++) {
        for (let j = 48; j < 58; j++) {
            for (let k = i; k < 58; k++) {
                for (let l = j+1; l < 58; l++) {
                    let test = String.fromCharCode(i,j)+" "+String.fromCharCode(k,l)
                    combinaison.push(test)
                }
            }
        }
    }
    return combinaison.join(" ")
}

console.log(getCombinaisonOfTwo())

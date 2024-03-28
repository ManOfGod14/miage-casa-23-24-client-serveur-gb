let tab = [];
console.log(tab);

// ajout d'élement dans tab
tab.push("Hello"); // indice 0
tab.push("Bonjour"); // indice 1
tab.push("Test"); // indice 2
console.log(tab);

/**
 * la méthode splice :
 * splice(debut, nbrAsupprimer[elem1[, element2[, ]]])
 * debut : c'est l'indice à partir duquel commencer à changer le tableau ()
 * nbrAsupprimer : un entir indiquant le nombre d'anciens éléments à remplacer
 */
tab.splice(1, 1);
console.log(tab);

// bonus
// tab.splice(1, 1, "Remplace");
// console.log(tab);

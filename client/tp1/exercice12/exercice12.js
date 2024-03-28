const nbr1 = parseFloat(prompt("Veuillez saisir le 1er nombre : "));
const nbr2 = parseFloat(prompt("Veuillez saisir le 2ème nombre : "));
// console.log(nbr1, nbr2);

if (nbr1 > 0 && nbr2 > 0) {
  console.log("les deux nombres sont positifs");
} else if (nbr1 < 0 || nbr2 < 0) {
  console.log("Au moins l'un des deux nombres est négatif");
} else {
  console.log("Au moin l'un des deux nombres nuls");
}

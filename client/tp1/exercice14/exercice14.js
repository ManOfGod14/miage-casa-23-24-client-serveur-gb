const mois = parseInt(prompt("Veuillez saisir le numéro du mois"));

switch (mois) {
  case 1:
  case 2:
  case 12:
    console.log("Nous sommes en Hiver");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Nous sommes en Printemps");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Nous sommes en Eté");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Nous sommes en Automne");
    break;
  default:
    alert("Le numéro du mois saisi n'est pas valide");
}

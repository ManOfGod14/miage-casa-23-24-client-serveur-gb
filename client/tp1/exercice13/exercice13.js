const jour = parseInt(prompt("Veuillez saisir le numéro du jour"));

switch (jour) {
  case 1:
    console.log("Nous sommes Lundi");
    break;
  case 2:
    console.log("Nous sommes Mardi");
    break;
  case 3:
    console.log("Nous sommes Mercredi");
    break;
  case 4:
    console.log("Nous sommes Jeudi");
    break;
  case 5:
    console.log("Nous sommes Vendredi");
    break;
  case 6:
    console.log("Nous sommes Samedi");
    break;
  case 7:
    console.log("Nous sommes Dimanche");
    break;
  default:
    alert("Le numéro du jour saisi n'est pas valide");
}

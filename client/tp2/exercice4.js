// déclaration d"une classe
class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }
}

// création d'une instance de classe Personne
const personne1 = new Personne("Alice", 30);
// affichage de l'objet personne1
console.log(personne1);

// affichage des propriétés de l'objet personne1
console.log("Nom : " + personne1.nom);
console.log("Age : " + personne1.age);

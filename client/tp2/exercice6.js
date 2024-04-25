// classe Personne
class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

// classe Etudiant
class Etudiant extends Personne {
  constructor(n, a, niv) {
    super(n, a);

    // ajout de la propriété niveau
    this.niveau = niv;
  }
}

const etudiant1 = new Etudiant("Diodio", 18, "2ème Année");
console.log(etudiant1); // affichage de l'objet etudiant1

console.log("Nom :", etudiant1.nom);
console.log("Age :", etudiant1.age);
console.log("Niveau :", etudiant1.niveau);

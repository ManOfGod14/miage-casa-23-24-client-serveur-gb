class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

class Etudiant extends Personne {
  constructor(n, a, niv) {
    super(n, a);
    this.niveau = niv;
  }

  // Polymorphisme (surcharge de la méthode afficherDetails
  afficherDetails() {
    super.afficherDetails();
    console.log(`je suis en ${this.niveau}.`);
  }
}

// création d'une instance de la classe Etudiant
const alice = new Etudiant("Alice", 30, "TS2-DI-CS");
alice.afficherDetails();

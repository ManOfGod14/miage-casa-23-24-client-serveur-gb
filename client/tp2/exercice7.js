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

  afficherNiveau() {
    console.log(`Niveau : ${this.niveau}`);
  }
}

const etudiant1 = new Etudiant("Diodio", 18, "2ème Année");
etudiant1.afficherDetails();
etudiant1.afficherNiveau();

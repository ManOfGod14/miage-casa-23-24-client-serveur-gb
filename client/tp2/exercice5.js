// déclaration d"une classe
class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

// création d'une instance de classe Personne
const maliki = new Personne("Maliki TCHEROU", 30);
maliki.afficherDetails();

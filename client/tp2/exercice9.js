// classe Personne
class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  /**
   * { nom: "Maliki", age: 30 }
   */
  static creerPersonne(pers) {
    return new Personne(pers.nom, pers.age);
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this._age} ans.`);
  }
}

// const maliki = new Personne("Maliki", 30);

const maliki = Personne.creerPersonne({ nom: "Maliki", age: 30 });
maliki.afficherDetails();

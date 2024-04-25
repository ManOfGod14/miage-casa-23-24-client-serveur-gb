// classe Personne
class Personne {
  constructor(n, a) {
    this.nom = n;
    this._age = a;
  }

  getAge() {
    return this._age;
  }

  setAge(nouvelAge) {
    if (nouvelAge > 0) {
      this._age = nouvelAge;
    } else {
      console.error("L'age ne doit pas être nédatif !");
    }
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this._age} ans.`);
  }
}

const maliki = new Personne("Maliki", 30);

console.log("Age avant modification", maliki.getAge()); // récupération
maliki.afficherDetails();

maliki.setAge(31); // modification
console.log("Age après modification", maliki.getAge()); // affichage de l'age actuel
maliki.afficherDetails();

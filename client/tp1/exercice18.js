const personne = {
  nom: "TCHEROU",
  prenom: "Maliki",
  age: 32,
  message: function () {
    // utilisation de la concatenation
    console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et j'ai " + this.age + " ans.");

    // utilisation des bactic
    // console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans`);
  },
};

personne.message();

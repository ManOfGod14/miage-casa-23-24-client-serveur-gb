// Récupération des élements champs
const elementInputNom = document.querySelector("#nom");
const elementInputPrenom = document.querySelector("#prenom");
const elementInputEmail = document.querySelector("#email");

// les autres elements
const elementForm = document.querySelector("#myForm");
const elementMsgErreur = document.querySelector("#msgErreur");
const elementContenu = document.querySelector("#contenu");

elementForm.addEventListener("submit", () => {
  if (elementInputNom.value.trim() == "" || elementInputPrenom.value.trim() == "" || elementInputEmail.value.trim() == "") {
    elementMsgErreur.textContent = "Veuillez remplir tous les champs";
  } else {
    elementContenu.innerHTML = `
    Données vlaidées avec succès :<br/>
    Nom : ${elementInputNom.value}<br/>
    Prénom : ${elementInputPrenom.value}<br/>
    E-mail : ${elementInputEmail.value}
    `;

    // réinitialiser les champs du formulaire
    elementForm.reset();
  }
});

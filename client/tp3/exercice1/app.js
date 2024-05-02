/**
 * Observation du super objet window et de l'objet document
 */
// affichage de l'objet wondow
// console.log(window);

// affichage d'une alert
// console.log(window.alert("Mon premier alert en JavaScript"));
// console.log(alert("Mon deuxième alert en JavaScript"));

// affichage de l'objet document
// console.log(window.document);
// console.log(document);

/**
 * Correction de l'exercice 1
 */

// récupération de l'élement p par son id avec la méthode getElementById
const elementP = document.getElementById("paraId");
// console.log(elementP);

// récupération de l'élement buttoon par son id avec la méthode querySelector
const elementBtn = document.querySelector("#btnId");
// console.log(elementBtn);

// écoute d'évènement de clic sur l'élement button
elementBtn.addEventListener("click", function (evt) {
  //   console.log(evt);
  elementP.textContent = "Le message a été modifié avec succès !";

  // Bonus
  // changeons la couleur du text de l'élement p
  elementP.style.color = "red";

  // augmentons la taille du text de l'élement p
  elementP.style.fontSize = "22px";
});

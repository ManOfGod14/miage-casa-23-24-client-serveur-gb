// récupération de l'élement p avec la fonction querySelector
const elementP = document.querySelector("p");
// console.log(elementP);

const elementBtn = document.querySelector("button");
// console.log(elementBtn);

// // récupération de l'élement button avec la fonction getElementsByName
// const elementBtn1 = document.getElementsByName("button");
// console.log(elementBtn1);

// // récupération de l'élement button avec la fonction getElementsByTagName
// const elementBtn2 = document.getElementsByName("button");
// console.log(elementBtn2);

/**
 * écoute d'évenement de click sur le bouton
 */
// utilisation d'une fonction callback nommée
// elementBtn.addEventListener("click", fnAfficherMasquer);
// function fnAfficherMasquer() {}

// utilisation d'une fonction callback anonyme
// elementBtn.addEventListener("click", function (e) {});

// utilisation d'une fonction callback flechée
elementBtn.addEventListener("click", (e) => {
  //   console.log("J'ai cliqué sur le bouton voici l'event : ", e);
  if (elementP.style.display == "none") {
    elementP.style.display = "block";
  } else {
    elementP.style.display = "none";
  }

  // utilisation de condition ternaire
  //   elementP.style.display = elementP.style.display == "none" ? "block" : "none";
});

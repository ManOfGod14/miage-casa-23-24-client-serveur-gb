function estPair2(nbr) {
  //   solution 1
  //   if (nbr % 2 === 0) {
  //     console.log("Le nombre est pair");
  //   } else {
  //     console.log("Le nombre est impair");
  //   }

  // solution 2 (condition ternaire)
  return nbr % 2 === 0 ? console.log("Le nombre est pair") : console.log("Le nombre est impair");
}

estPair2(20);
estPair2(17);

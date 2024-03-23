function estPair(nbr) {
  // solution 1
  //   if (nbr % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // solution 2 (condition ternaire)
  //   return nbr % 2 === 0 ? true : false;

  // solution 3
  return nbr % 2 === 0;
}

// tester
console.log(estPair(5));
console.log(estPair(16));

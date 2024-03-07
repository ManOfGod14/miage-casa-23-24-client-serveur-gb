function comparaisonNombre(a, b) {
  if (a > b) {
    return a + " est plus grand que " + b;
  } else if (a < b) {
    return a + " est plus petit que " + b;
  } else {
    return a + " et " + b + " sont égaux";
  }
}

// tester
console.log(comparaisonNombre(8, 9));
console.log(comparaisonNombre(-98, 19));
console.log(comparaisonNombre(15, 15));

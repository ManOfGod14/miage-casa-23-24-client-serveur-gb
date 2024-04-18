/**
 * Exo 1 : fonction nommée
 */
function addition(a, b) {
  return a + b;
}

console.log(addition(6, 9));

/**
 * Exo 2 : fonction anonyme
 */
const multiplication = function (x, y) {
  return x * y;
};

console.log(multiplication(4, 8));

/**
 * Exo 3 : fonction flechée
 */
const division = (numerateur, denominateur) => {
  if (denominateur !== 0) {
    return numerateur / denominateur;
  } else {
    return "Division par zéro impossible !";
  }
};

console.log(division(9, 0));
console.log(division(9, 3));

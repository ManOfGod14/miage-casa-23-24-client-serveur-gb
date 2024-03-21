function verifierAge(age) {
  if (age >= 18) {
    return "Accès autorisé";
  } else {
    return "Accès interdit";
  }

  //   return age >= 18 ? "Accès autorisé" : "Accès interdit";
}

console.log(verifierAge(15));
console.log(verifierAge(36));

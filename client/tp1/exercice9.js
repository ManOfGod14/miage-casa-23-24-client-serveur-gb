function compareChaines(chaine1, chaine2) {
  if (chaine1 === chaine2) {
    return "Les deux chaines sont identiques";
  } else {
    return "Les deux chaines ne sont pas identiques";
  }
}

console.log(compareChaines("222", 222));
console.log(compareChaines("Hello", "hello"));
console.log(compareChaines("Hello", "Hello"));

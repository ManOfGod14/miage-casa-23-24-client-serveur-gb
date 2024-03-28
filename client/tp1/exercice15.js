const fruits = ["Banane", "Orange", "Ananas", "Mangue", "Fraise"];

// boucle for
console.log("Boucle for - start");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("Boucle for - end\n");

// boucle while
console.log("Boucle while - start");
let j = 0;
while (j < fruits.length) {
  console.log(fruits[j]);
  j++;
}
console.log("Boucle while - end\n");

// boucle do while
console.log("Boucle do while - start");
let h = 0;
do {
  console.log(fruits[h]);
  h++;
} while (h < fruits.length);
console.log("Boucle do while - end");

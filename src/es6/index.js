function newFuction(name, age, country) {
  var name = name || "Diego";
  var age = age || 32;
  var country = country || "Bo";
  console.log(name, age, country);
}

// es6
function newFunction2(name = "Diego", age = 32, country = "Bo") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Ricando", "23", "Co");

let hello = "hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =
  "Qui consequatur. Commodi. Ipsum vel duis \n" +
  "otra frase epica que necesitamos.";

// es6

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "Diego",
  age: 28,
  country: "Bo",
};

console.log(person.name, person.age);

let { name, age } = person;
console.log(name, age);

let team1 = ["Diego", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global var";
}

{
  let globalLet = "Global let";
  console.log(globalLet);
}

console.log(globalVar);

const a = "b";

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

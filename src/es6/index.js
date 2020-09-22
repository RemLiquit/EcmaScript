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

//es6
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

let name = "diego";
let age = 28;

obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

const names = [
  { name: "Diego", age: 32 },
  { name: "Ylizera", age: 20 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name,age,country) => {
  ...
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num:

const helloPromise = () => {
  return new Promise ((resolve, reject) => {
    if (true) {
      resolve('Hey!')
    } else {
      reject('Ups!!')
    }
  });
}

helloPromise()
.then(response => console.log(response))
// .then(() => console.log('Hola'))
.catch(error => console.log(error));


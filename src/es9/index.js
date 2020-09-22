const obj = {
  name: "Diego",
  age: 28,
  country: "BO",
};

// let { name, ...all } = obj;
// console.log(name, all);

let { country, ...all } = obj;
console.log(all);

const obj = {
  name: "Diego",
  age: 28,
};

const obj1 = {
  ...obj,
  country: "BO",
};

console.log(obj1);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setInterval(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .then((reject) => console.log(error))
  .finally(() => console.log("Finalizo"));

const regexData = /([0-9]{4}-([0-9]{2}-[0-9]{2}))/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year);
console.log(year, month, day);

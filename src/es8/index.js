const data = {
  frontend: "Oscar",
  backend: "Isabel",
  desing: "Ana",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.lenght);

const data = {
  frontend: "Oscar",
  backend: "Isabel",
  desing: "Ana",
};

const values = Object.values(data);
console.log(values);
console.log(values.lenght);

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " ----------"));
console.log("food".padEnd(12, " --------"));

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFuction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFuction();

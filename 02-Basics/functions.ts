function addTwo(num: number): number {
  return num + 2; // OK
}
addTwo(2); // 4

function getUpper(str: string) {
  return str.toUpperCase();
}
getUpper("hello"); // 'HELLO'

function signUpUser(name: string, email: string, isPaid: boolean) {
  return;
}
signUpUser("John", "john@gmail.com", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  return;
};
loginUser("John", "john@gmail.com", true);

const getHello = (s: string): string => {
  return "Hello";
};
// const heros = ["Superman", "Batman", "Ironman"];
const heros = [1, 2, 3];
heros.map((hero): string => `${hero} is a Hero!`);

function consoleError(message: string): void {
  console.error(message);
}
function handleError(message: string): never {
  throw new Error(message);
}

export {};

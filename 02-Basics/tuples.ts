const user: [number, string] = [1, "Steve"];
// It is important to note that the order of the elements in the tuple is fixed. If you try to change the order of the elements, TypeScript will throw an error.

let tUser: [number, string];
tUser = [1, "Steve"]; // OK

let rgb: [number, number, number] = [255, 0, 0]; // Red

type User = [number, string, boolean];

const newUser: User = [1, "Steve", true];
newUser[1] = "John";

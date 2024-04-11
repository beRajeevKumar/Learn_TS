let score: number | string = 10;

score = "10";
score = 10;

type User = {
  name: string;
  id: number;
};
type Admin = {
  userName: string;
  id: number;
};

let john: User | Admin = {
  name: "John",
  id: 1,
};
john = { userName: "John", id: 2 };

// function getDbId(id: number | string) {
//   // Making some API call
//   console.log(`ID: ${id}`);
// }
getDbId(10);
getDbId("10");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    return id;
  }
}

// Arrays
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ["1", "2", "3"];
const arr3: (number | string | boolean)[] = [1, 2, 3, "4", true];

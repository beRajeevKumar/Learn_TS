/*
// Object
const user = {
  name: "John",
  email: "john@gmail.com",
  isPaid: true,
};

function createUser(user: { name: string; isPaid: boolean }) {
  return user;
}
let newUser = { name: "John", email: "john@gmail.com", isPaid: true };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return {
    name: "TypeScript",
    price: 0,
  };
}

export {};
*/

/*
// Type alias
type User = { name: string; email: string; isPaid: boolean };
function createUser(user: User): User {
  return { name: "John", email: "jonh@gmail.com", isPaid: true };
}
createUser({ name: "John", email: "jonh@gmail.com", isPaid: true });
*/

// Read-only and optional properties
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creaditCard?: number;
};
let myUser: User = {
  _id: "123",
  name: "John",
  email: "john@gmail.com",
  isActive: true,
};

type cardNumber = {
  creaditCardNumber: number;
};
type cardDate = {
  creaditCardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    creaditCardCVV: number;
  };

myUser.email = "john12@gmail.com";
myUser.isActive = false;
// myUser._id = "456"; // Error

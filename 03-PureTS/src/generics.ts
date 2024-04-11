const score: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ["John", "Doe", "Jane", "Doe"];

function identityOne(arg: string | boolean): string | boolean {
  return arg;
}

function identityTwo(arg: any): any {
  return arg;
}
function identityThree<Type>(arg: Type): Type {
  return arg;
}
identityThree(true);

function identityFour<T>(arg: T): T {
  return arg;
}

interface Bottle {
  name: string;
  price: number;
  color: string;
}

identityFour<Bottle>({
  name: "Tupperware",
  price: 1000,
  color: "Green",
});

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

function getSearchProducts<T>(search: T[]): T {
  const indexOfArray = Math.floor(Math.random() * search.length);
  return search[indexOfArray];
}

const getSearchProducts1 = <T>(search: T[]): T => {
  const indexOfArray = Math.floor(Math.random() * search.length);
  return search[indexOfArray];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

type DatabaseType = {
  connection: string;
  username: string;
  password: string;
};

function getProperty<T, K extends Database>(obj: T, key: K): object {
  return {
    obj,
    key,
  };
}
getProperty(30, {
  connection: "localhost",
  username: "root",
  password: "root",
});

interface Quiz {
  question: string;
  answer: string;
}

interface QuizType {}

class Sellable<T> {
  public cart: T[] = [];

  public addCart(item: T): void {
    this.cart.push(item);
  }
}

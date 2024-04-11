// class User {
//   private email: string;
//   private password: string;
//   public name: string;
//   readonly city: string = "Delhi";
//   constructor(email: string, password: string, name: string) {
//     this.email = email;
//     this.password = password;
//     this.name = name;
//   }
// }

class User {
  protected _courseCount: number = 1;

  readonly city: string = "Delhi";
  constructor(
    public email: string,
    private password: string,
    public name: string
  ) {
    this.email = email;
    this.password = password;
    this.name = name;
  }
  private deleteToken() {
    console.log("Deleting Token");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(couseNum) {
    if (couseNum <= 1) {
      throw new Error("Invalid! Course count should be greater than 1");
    }
    this._courseCount = couseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCouseCount() {
    this._courseCount = 10;
  }
}

const user = new User("john@gmail.com", "123456", "John Doe");
user.city;
// user.city = "Mumbai"; // Error: Cannot assign to 'city' because it is a read-only property.
// user.deleteToken(); // Error: Property 'deleteToken' is private and only accessible within class 'User'.

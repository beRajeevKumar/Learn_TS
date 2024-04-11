"use strict";
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
    constructor(email, password, name) {
        this.email = email;
        this.password = password;
        this.name = name;
        this._courseCount = 1;
        this.city = "Delhi";
        this.email = email;
        this.password = password;
        this.name = name;
    }
    deleteToken() {
        console.log("Deleting Token");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
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
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCouseCount() {
        this._courseCount = 10;
    }
}
const user = new User("john@gmail.com", "123456", "John Doe");
user.city;
// user.city = "Mumbai"; // Error: Cannot assign to 'city' because it is a read-only property.
// user.deleteToken(); // Error: Property 'deleteToken' is private and only accessible within class 'User'.

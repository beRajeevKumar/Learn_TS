"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2; // OK
}
addTwo(2); // 4
function getUpper(str) {
    return str.toUpperCase();
}
getUpper("hello"); // 'HELLO'
function signUpUser(name, email, isPaid) {
    return;
}
signUpUser("John", "john@gmail.com", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return;
};
loginUser("John", "john@gmail.com", true);
var getHello = function (s) {
    return "Hello";
};
// const heros = ["Superman", "Batman", "Ironman"];
var heros = [1, 2, 3];
heros.map(function (hero) { return "".concat(hero, " is a Hero!"); });
function consoleError(message) {
    console.error(message);
}
function handleError(message) {
    throw new Error(message);
}

"use strict";
const score = [1, 2, 3, 4, 5];
const names = ["John", "Doe", "Jane", "Doe"];
function identityOne(arg) {
    return arg;
}
function identityTwo(arg) {
    return arg;
}
function identityThree(arg) {
    return arg;
}
identityThree(true);
function identityFour(arg) {
    return arg;
}
identityFour({
    name: "Tupperware",
    price: 1000,
    color: "Green",
});
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function getSearchProducts(search) {
    const indexOfArray = Math.floor(Math.random() * search.length);
    return search[indexOfArray];
}
const getSearchProducts1 = (search) => {
    const indexOfArray = Math.floor(Math.random() * search.length);
    return search[indexOfArray];
};
function getProperty(obj, key) {
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
class Sellable {
    constructor() {
        this.cart = [];
    }
    addCart(item) {
        this.cart.push(item);
    }
}

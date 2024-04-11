"use strict";
// function detectType(value: number | string) {
//   return typeof value === "string" ? value.toLowerCase() : value + 3;
// }
function detectType(value) {
    return typeof value === "string" ? value.toLowerCase() : value + 3;
}
function isAdminAccount(user) {
    if ("isAdmin" in user) {
        return user.isAdmin;
    }
    // return "isAdmin" in user ? user.isAdmin : false;
    // return (user as Admin).isAdmin !== undefined;
}

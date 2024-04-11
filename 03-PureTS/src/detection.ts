// function detectType(value: number | string) {
//   return typeof value === "string" ? value.toLowerCase() : value + 3;
// }
function detectType(value: number | string) {
  return typeof value === "string" ? value.toLowerCase() : value + 3;
}

interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(user: User | Admin) {
  if ("isAdmin" in user) {
    return user.isAdmin;
  }
  // return "isAdmin" in user ? user.isAdmin : false;
  // return (user as Admin).isAdmin !== undefined;
}

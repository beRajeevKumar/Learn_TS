interface User {
  readonly dbId: number;
  email: string;
  UserId: number;
  name: string;
  googleId?: string;
  startTrial(): string;
  getCoupon(coupon_name: string): number;
}
interface User {
  gitHubToken: string;
}

interface Admin extends User {
  role: "admin" | "superadmin" | "user";
}

const user: Admin = {
  dbId: 1,
  email: "john@gmail.com",
  UserId: 1,
  gitHubToken: "1234",
  role: "superadmin",
  name: "John",
  startTrial() {
    return "Trial Started";
  },
  getCoupon(c_name: string) {
    return 10;
  },
};

export {};

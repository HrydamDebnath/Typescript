interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;

    startTrial(): string;
    getCoupon(couponName: string, value: number): number;
}

interface User {
    githubToken: string;
}

interface Admin extends User {
    role: "admin" | "mentor" | "student";
}

const hrydam: Admin = {
    dbId: 20,
    email: "hrydam@gmail.com",
    userId: 2001,
    role: "admin",
    githubToken: "github_hrydam",

    startTrial: () => {
        return "trial started";
    },

    getCoupon: (couponName: string, value: number) => {
        return value;
    }
};

hrydam.email = "hrydam.dev@gmail.com";

// hrydam.dbId = 25
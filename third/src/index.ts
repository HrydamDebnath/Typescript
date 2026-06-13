class User {
    protected _courseCount = 1;

    readonly city: string = "Agartala";

    constructor(
        public email: string,
        public name: string
    ) {}

    private deleteToken(): void {
        console.log("Token deleted");
    }

    get getPortfolioEmail(): string {
        return `portfolio_${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }

        this._courseCount = courseNum;
    }
}

class StudentUser extends User {
    isStudent: boolean = true;

    changeCourseCount(): void {
        this._courseCount = 4;
    }
}

const studentUser = new User(
    "hrydam@gmail.com",
    "Hrydam"
);

console.log(studentUser.email);
console.log(studentUser.name);
console.log(studentUser.city);

export {};
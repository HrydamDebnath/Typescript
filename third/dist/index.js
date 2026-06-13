"use strict";

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Agartala";
    }

    deleteToken() {
        console.log("Token deleted");
    }

    get getPortfolioEmail() {
        return `portfolio_${this.email}`;
    }

    get courseCount() {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }

        this._courseCount = courseNum;
    }
}

class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isStudent = true;
    }

    changeCourseCount() {
        this._courseCount = 4;
    }
}

const hrydam = new User(
    "hrydam@gmail.com",
    "Hrydam"
);

// hrydam.name
// hrydam.deleteToken()
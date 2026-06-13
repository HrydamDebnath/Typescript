function detectValue(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }

    return val + 5;
}

function provideUsername(username: string | null) {
    if (!username) {
        console.log("Please provide username");
        return;
    }

    username.toLowerCase();
}

function printUsers(users: string | string[] | null) {
    if (users) {
        if (typeof users === "object") {
            for (const user of users) {
                console.log(user);
            }
        } else if (typeof users === "string") {
            console.log(users);
        }
    }
}

interface Developer {
    name: string;
    email: string;
}

interface Mentor {
    name: string;
    email: string;
    isMentor: boolean;
}

function isMentorAccount(account: Developer | Mentor) {
    if ("isMentor" in account) {
        return account.isMentor;
    }
}

function logInfo(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Student = {
    study: () => void;
};

type Teacher = {
    teach: () => void;
};

function isStudent(person: Student | Teacher): person is Student {
    return (person as Student).study !== undefined;
}

function getRole(person: Student | Teacher) {
    if (isStudent(person)) {
        return "Student";
    } else {
        return "Teacher";
    }
}

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    length: number;
    width: number;
}

type Shape = Circle | Square | Rectangle;

function getShapeArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}

function calculateArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return shape.side * shape.side;

        case "rectangle":
            return shape.length * shape.width;

        default:
            const neverShape: never = shape;
            return neverShape;
    }
}

export {};
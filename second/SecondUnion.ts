let score: number | string = 20;

score = 30;
score = "40";

type Employee = {
    name: string;
    id: number;
};

type Manager = {
    username: string;
    id: number;
};

let hrydam: Employee | Manager = {
    name: "Hrydam",
    id: 101
};

hrydam = {
    username: "hrydam_dev",
    id: 101
};

function getEmployeeId(id: number | string) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }

    return id;
}

getEmployeeId(5);
getEmployeeId("5");

const marks: number[] = [85, 90, 95];
const subjects: string[] = ["Math", "Science", "English"];
const mixedData: (string | number | boolean)[] = ["Hrydam", 20, true];

let accessLevel: "admin" | "user" | "guest";

accessLevel = "admin";

export {};
function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (
    name: string,
    email: string,
    isPaid: boolean = false
) => {};

let myValue = addTwo(20);

getUpper("Hrydam");

signUpUser("Hrydam", "hrydam@gmail.com", false);

loginUser("Hrydam", "hrydam@gmail.com");

const getMessage = (text: string): string => {
    return "";
};

const developers = ["Hrydam", "Rahul", "Aman"];

developers.map((developer): string => {
    return `Developer is ${developer}`;
});

function consoleError(errorMessage: string): void {
    console.log(errorMessage);
}

function handleError(errorMessage: string): never {
    throw new Error(errorMessage);
}

export {};
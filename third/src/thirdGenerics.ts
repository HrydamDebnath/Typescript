const marks: Array<number> = [];
const developers: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

// identityThree("Hrydam")

function identityFour<T>(val: T): T {
    return val;
}

interface Laptop {
    brand: string;
    ram: number;
}

// identityFour<Laptop>({})

function getSearchCourses<T>(courses: T[]): T {
    // do some database operations
    const myIndex = 0;
    return courses[myIndex];
}

const getMoreSearchCourses = <T,>(courses: T[]): T => {
    // do some database operations
    const myIndex = 0;
    return courses[myIndex];
};

interface Database {
    connection: string;
    username: string;
    password: string;
}

function anotherFunction<T, U extends Database>(
    valOne: T,
    valTwo: U
): object {
    return {
        valOne,
        valTwo
    };
}

// anotherFunction(20, {})

interface Project {
    name: string;
    technology: string;
}

interface Course {
    name: string;
    instructor: string;
    topic: string;
}

class Store<T> {
    public cart: T[] = [];

    addToCart(item: T): void {
        this.cart.push(item);
    }
}

export {};
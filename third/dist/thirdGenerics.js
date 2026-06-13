"use strict";

const marks = [];
const developers = [];

function identityOne(value) {
    return value;
}

function identityTwo(value) {
    return value;
}

function identityThree(value) {
    return value;
}

// identityThree("Hrydam")

function identityFour(value) {
    return value;
}

// identityFour({})

function getSearchCourses(courses) {
    // do some database operations
    const myIndex = 2;

    return courses[myIndex];
}

const getMoreSearchCourses = (courses) => {
    // do some database operations
    const myIndex = 1;

    return courses[myIndex];
};

function anotherFunction(firstValue, secondValue) {
    return {
        firstValue,
        secondValue
    };
}

class StoreItems {
    constructor() {
        this.cart = [];
    }

    addToCart(item) {
        this.cart.push(item);
    }
}
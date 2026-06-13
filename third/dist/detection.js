"use strict";

function detectName(name) {
    // return name.toLowerCase()
}

function provideName(name) {
    if (!name) {
        console.log("Provide Name");
        return;
    }

    name.toLowerCase();
}

function printUsers(users) {
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

printUsers("Hrydam");

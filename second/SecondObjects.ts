type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
};

let myUser: User = {
    _id: "HRY123",
    name: "Hrydam",
    email: "hrydam@gmail.com",
    isActive: true
};

type CardNumber = {
    cardNumber: string;
};

type CardDate = {
    cardDate: string;
};

type CardDetails = CardNumber & CardDate & {
    cvv: number;
};

myUser.email = "hrydam.dev@gmail.com";

// myUser._id = "NEW123"; // Error: Cannot assign to '_id' because it is readonly

export {};
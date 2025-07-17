// Optional types 
//----------------

// used when value is optional
function generateError(message?: string){ // optional
    throw new Error(message);
}
generateError("Something went wrong!");
generateError();

// optional parameters
//----------------------

type employee = {
    name: string,
    age: number,
    role?: "admin" | "guest", // optional
}

let employee1: employee = {
    name: "Max",
    age: 30,
    role: "admin"
}

// Nullish coalescing operator
//----------------------------
let userInput = '';
let didProvideInput = userInput ?? false;
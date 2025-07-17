// function definition with types
function add (num1: number, num2: number){
    return num1 + num2;
}
console.log(add(2, 2));

// never type 
//-------------

// this function will never return a value
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

// function as a parameter
//----------------------------

// perform job function will take a function as a parameter and return nothing
function performJob (cb: () => void) {
    cb();
}

// perform job function will take a function that takes a string as a parameter and return nothing
function jobDone(cb: (m: string) => void){
    cb("Job done!");
};

type loginUser = {
    name: string;
    email: string;
    isPaid: boolean;
    greet: () => string;
}

let loggedInUser: loginUser = {
    name: "Max",
    email: "max@me.com",
    isPaid: true,
    greet: () => {
        return "Hello";
    }
}


// Functions
//------------

// Function with parameter types and return type
function add(a: number, b: number): number {
    return a + b;
}

// Function with return type
function greet(name: string) : string {
    return "Hello " + name;
}

// Void function
function logDetails(userId: string, item: string) {
    console.log(`User ${userId} purchased ${item}`);
} 

// Union type
//------------

function displayAndPrintId(id: string | number) : string | number {
    console.log("ID:", id);
    if (typeof id === "string") {
        return id.toString();
    }
    return id;
}

// Void / Never / Unknown
//------------------------

// Void function
function logMessage(message: string) : void {
    console.log("Message:", message);
}

// Never function
function throwError(errorMsg: string) : never {
    throw new Error(errorMsg);
}

// Unknown type
function myFunction(){
    return "Hello";
}
let unknownValue: unknown = myFunction();

// Assertion with 'as' keyword
//-----------------------------

let valueInString: string = unknownValue as string;
console.log("Value in String:", valueInString);  

// Types of functions
//-------------------

let multiply: (x: number, y: number) => number;

let user : {
    firstName: string;
    lastName: string;
    getFullName: () => string;
}

user = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// Optional Parameter
function buildName(firstName: string, lastName?: string) : string {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

// Default Parameter
function buildNameWithDefault(firstName: string, lastName: string = "Doe") : string {
    return firstName + " " + lastName;
}

// Rest Parameter
function sumAtleastTwo(firstNum: number, secondNum: number, ...restNums: number[]) : number {
    let total = firstNum + secondNum;
    for (let num of restNums) {
        total += num;
    }
    return total;
}




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



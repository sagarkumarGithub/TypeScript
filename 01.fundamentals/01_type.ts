// String / Boolean / Number
//---------------------------

let password: string = "Sagar";
let isWorking: boolean = true;
let salary: number = 50000;

console.log(typeof salary); // number
console.log(typeof isWorking); // boolean
console.log(typeof password); // string

// Null / Undefined / Any
//------------------------

let data:null = null; // we do this intentionally
let value:undefined = undefined; // we do this unintentionally if we don't assign any value to a variable
let apiResponse:any = "Something"; // we can skip the type checking by using 'any' type (try to avoid any type)

console.log(typeof data); // object
console.log(typeof value); // undefined
console.log(typeof apiResponse); // string

// Array
//-------

let fruits: string[] = ["Apple", "Banana", "Orange"];
let numbers: number[] = [1, 2, 3, 4, 5];
let mixed: (string | number)[] = ["Hello", 42];

console.log(typeof fruits); // object
console.log(typeof numbers); // object
console.log(typeof mixed); // object

// Object
//--------

let person: { 
    name: string; 
    age: number; 
    isWorking: boolean
} = {
    name: "Abhishek",
    age: 25,
    isWorking: true
};

console.log(typeof person); // object

// Union Types
//--------------

let userId: string | number;

userId = "user_123"; // valid
userId = 456; // valid

// Tuple
//-------

// same as array but fixed size and same types in same positions
let employee: [number, string, boolean] = [1, "John Doe", true];
let rgba: [number, number, number, number] = [255, 0, 0, 1];

// optional tuple elements
let rgb: [number, number, number, number?] = [255, 0, 0];

// Enum
//------

enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

console.log(Days.Monday); // 1

enum orderStatus {
    PENDING = "pending",
    SHIPPED = "shipped",
    DELIVERED = "delivered"
}

console.log(orderStatus.DELIVERED); // "delivered"

// Literal Types
//---------------

let direction: "up" | "down" | "left" | "right";

direction = "up"; // valid
// direction = "forward"; // invalid









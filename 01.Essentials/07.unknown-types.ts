// unknown type
//---------------
let unknownTypeVariable : unknown;
unknownTypeVariable = "Max";
unknownTypeVariable = 30;
unknownTypeVariable = true;
unknownTypeVariable = [];
unknownTypeVariable = {};

// function with unknown type
function processNumber(val: unknown){
    if(typeof val === "number") {
        console.log(val.toFixed(2));
    }

    if(typeof val === "string") {
        console.log(val.toUpperCase());
    }

    if(typeof val === "boolean") {
        console.log(val);
    }

    if(typeof val === "object") {
        console.log(val);
    }

    if(typeof val === "function") {
        console.log(val());
    }
}
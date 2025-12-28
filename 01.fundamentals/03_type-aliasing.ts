// Type aliases
//--------------

// example:
type StringOrNumber = string | number;
type booleanOrString = boolean | string;

let sampleVar1: StringOrNumber;
let sampleVar2: booleanOrString;

// example:
type Order = {
    orderId: number;
    product: string;
    quantity: number;
    price: number;
}

let sampleOrder: Order = {
    orderId: 101,
    product: "Laptop",
    quantity: 2,
    price: 1500
};



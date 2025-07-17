let hobbies = ["Sports", "Cooking"];
// hobbies.push(5);

// type inference with arrays
//----------------------------
let users: string[];
users = ["Max", "Manuel"];

// type inference with arrays and union
//--------------------------------------
let person: (string | number)[] = [];
person.push("Max");
person.push(30);

// generic types
//---------------
let student: Array<string | number> = [];
student.push("Max");
student.push(30);

// tuples 
//--------
let role: [number, string];
role = [1, "author"];

// objects 
//---------
let userData: {
    name: string; 
    age: number | string;
    role: {
        title: string;
        level: number;
    }
} = { 
    name: "Max", 
    age: 30,
    role: {
        title: "Admin",
        level: 1
    }
 };

// not null and undefined
//------------------------
//  let car: { name: string, price: number } = null;
//  let car2: { name: string, price: number } = undefined;

// Record ( key , value )
//------------------------
let data: Record<string, string | number>;
data = {
    name : "sagar",
    age: 50
}

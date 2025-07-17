// enum type
//----------
enum Roles {
    Admin,
    Buyer,
    Seller,
    Guest
}

let userRole: Roles = 0;
// later on we can change the role
userRole = Roles.Buyer

// literal types
//---------------
let Role: "Admin" | "Buyer" | "Seller" | "Guest";
Role = "Buyer"

let possibleNumbers: [1 | -1 , 2 | -2]
possibleNumbers = [1, 2]

// aliase types
//--------------
type adminRoles = "Apmc admin" | "Samb admin" | "Spoc admin";
let adminRole: adminRoles = "Samb admin"

type user = {
    name: string;
    age: number;
    role: adminRoles
    permissions: string[]
}

let user: user = {
    name: "Max",
    age: 30,
    role: "Samb admin",
    permissions: ["read", "write"]
}
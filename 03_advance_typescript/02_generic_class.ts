// GENERIC CLASSES
//------------------

class MyProgram<T>{
    user: T | undefined;
    displayDetails(){
        console.log(this.user);
        console.log(typeof this.user);
    }
}

interface User{
    name: string;
    age: number;
}

let ob: MyProgram<string> = new MyProgram();
ob.user = "Hello, World!";
ob.displayDetails(); // Hello, World! , string

let ob1: MyProgram<number> = new MyProgram();
ob1.user = 42;
ob1.displayDetails(); // 42 , number

let ob2: MyProgram<User> = new MyProgram();
ob2.user = {name: "Bob", age: 30};
ob2.displayDetails(); // { name: 'Bob', age: 30 } , object
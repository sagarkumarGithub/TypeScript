class Demo {
    static college: string = "ABC College";
    name: string = "Static Example";

    static myMethod() {
        console.log("calling static method");
    }

    myStaticTest(){
        console.log(this.name);
        console.log(Demo.college); // accessing static property inside non-static method
    }
} 

let obj1 = new Demo();
obj1.name = "Instance 1";
obj1.myStaticTest();

let obj2 = new Demo();
obj2.name = "Instance 2";


// Static method and property can be accessed without creating object
Demo.myMethod();
console.log("College Name is:", Demo.college);
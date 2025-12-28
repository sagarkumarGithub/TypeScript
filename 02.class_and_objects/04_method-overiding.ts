class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    // Overriding the greet method
    greet() {
        console.log("Hello from Child");
    }
}

let childInstance = new Child();
childInstance.greet(); // Output: Hello from Child
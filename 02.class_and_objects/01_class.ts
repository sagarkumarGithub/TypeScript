class Car {
    // properties
    private model: string; // private property
    color: string; // public property
    protected year: number = 2024; // protected property
    readonly brand: string = "Generic Motors"; // readonly property

    // constructor
    constructor(model:string, color:string){
        this.model = model;
        this.color = color; 
    }

    // getter 
    get getModel() : string {
        return this.model;
    }

    // setter
    set setModel(model: string) {
        this.model = model;
    }

    // method ( with return type )
    getModelNumber() : string{
        console.log("Model Number is: 2024");
        return this.model;
    }

    // method ( without return type )
    printColor () {
        console.log("Car Color is:", this.color);
    }
}

// creating object 1
let car1: Car = new Car("Hyundai Creta", "Blue");
console.log("Car 1 :", car1);
car1.setModel = "Hyundai Tucson";
car1.getModel;
console.log("Car Model:", car1.getModelNumber());

// creating object 2
let car2: Car = new Car("Kia Seltos", "Black");
console.log("Car 2 :", car2);
car2.setModel = "Kia Carnival";
car2.getModel;
console.log("Car Model:", car2.getModelNumber());

//Readonly property test
console.log("Car 1 Brand:", car1.brand);
console.log("Car 2 Brand:", car2.brand);
// car1.brand = "New Brand"; // This line would cause an error because 'brand' is readonly
// SUPER KEYWORD
//---------------

class Employee {
    name: string;
    empId: string;

    constructor(name: string, empId: string) {
        this.name = name;
        this.empId = empId;
    }

    displayDetails() {
        console.log(`Employee Name: ${this.name}, Employee ID: ${this.empId}`);
    }
}

class Manager extends Employee {
    task: string;
    constructor(name: string, empId: string, task: string) {
        super(name, empId); // calling parent class constructor
        this.task = task;
    }

    displayAllDetails() {
        super.displayDetails(); // calling parent class method
        console.log(`Manager Task: ${this.task}`);
    }
}

let emp = new Manager("Robert", "M456", "Project Management");
emp.displayAllDetails();
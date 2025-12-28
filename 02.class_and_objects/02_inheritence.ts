// INHERITENCE
//--------------

class Employee{
    name: string = "John";
    phone: string  = "999-888-7777";
    empId: string = "E123";
    address: string = "456 Elm St";

    displayName(){
        console.log("Employee Name is:", this.name);
    }
}

class Manager extends Employee{
    managerTask: string = "Oversee project development";
    displayManagerTask(){
        this.displayName();
        console.log("Manager Task is:", this.managerTask);
    }
}

class Developer extends Employee{
    technology: string = "TypeScript";
    project: string = "Web Application";

    displayProjectWithName() {
        this.displayName();
        console.log("Developer Project is:", this.project);
    }
}

let androidDeveloper = new Developer();
androidDeveloper.name = "Alice";
androidDeveloper.phone = "123-456-7890";
androidDeveloper.empId = "E001";
androidDeveloper.address = "123 Main St";
androidDeveloper.technology = "Java";
androidDeveloper.project = "Android App";

androidDeveloper.displayProjectWithName();
androidDeveloper.displayName();



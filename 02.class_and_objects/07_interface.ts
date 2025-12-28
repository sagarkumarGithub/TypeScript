interface Employee{
    empName: string;
    empId: string;
    phone: number;
    getInfo: () => string;
}

class Manager implements Employee{
    empName: string;
    empId: string;
    phone: number;

    constructor(name: string, id: string, phone: number){
        this.empName = name;
        this.empId = id;
        this.phone = phone;
    }

    getInfo = () => {
        console.log("getting value from manager");
        return `${this.empName} - ${this.empId} - ${this.phone}`;
    }
}

function getInformation(employee: Employee){
    console.log("name : " + employee.empName);
    console.log("id : " + employee.empId);
    console.log("phone : " + employee.phone);
    employee.getInfo();
}

let manager = new Manager("Alice", "M456", 9876543210);
getInformation(manager);




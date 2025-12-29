// CONSTRAINTS IN GENERICS TYPESCRIPT
//-------------------------------------


// CLASS WITH GENERIC CONSTRAINTS

class Employee{
    name: string;
    email: string;

    constructor(){
        this.name = "John Doe";
        this.email = "TtQ0M@example.com";
    }
}

class Manager extends Employee{}
class Developer extends Employee{}
class Intern extends Employee{}

function getEmployeeInfo<T extends Employee>(ob: T){
    console.log(ob);
}

getEmployeeInfo(new Manager());
getEmployeeInfo(new Developer());
getEmployeeInfo(new Intern());

// INTERFACE WITH GENERIC CONSTRAINTS

interface Pair<U,V>{
    value1: U;
    value2: V;
}

function getPairInfo(pair: Pair<string,string>){
    console.log(pair);
}

function getPairInfo1(pair: Pair<string,number>){
    console.log(pair);
}

getPairInfo({value1: "Hello", value2: "World"});
getPairInfo1({value1: "Age", value2: 30});
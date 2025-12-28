
// Abstract class
//----------------

abstract class Animal{
    abstract eat() : string;

    display(){
        console.log("This is display method from Animal class");
    }
}

class Dog extends Animal{
    eat(): string {
        return "Dog is eating";
    }
}

let anim = new Dog();
anim.display();
console.log(anim.eat());
// STACK IMPLEMENTATION USING GENERICS IN TYPESCRIPT
//---------------------------------------------------

class Stack<T>{
    items: T[] = [];
    size: number;

    constructor(size: number){
        this.size = size;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    isFull(){
        return this.items.length === this.size;
    }

    insert(element: T){
        if(!this.isFull()){
            this.items.push(element);
        }
        else{
            console.log("Stack is full!");
        }
    }

    remove(): T{
        if(!this.isEmpty()){
            return this.items.pop() as T;
        }
        else{
            throw new Error("Stack is empty!");
        }
    }

    display(){
        this.items.forEach((item) => console.log(item));
    }
}

let stack: Stack<number> = new Stack<number>(4);

stack.insert(10);
stack.insert(20);
stack.insert(30);
stack.insert(40);
stack.insert(50);

stack.display();

console.log("Removed item: " + stack.remove());
console.log("Removed item: " + stack.remove());

stack.display();
// GENERIC FUNCTION
//------------------

interface MyType{
    name:string;
}

interface MyType1{
    email:string;
}

// generic function
function getInfo<T>(numbers: T[]){
    return numbers[0];
}

getInfo<MyType>([{name:"John"}]); // OK
getInfo<number>([1,2,3]); // OK
getInfo<string>(["a","b","c"]); // OK
getInfo<boolean>([true,false,true]); // OK

function mergeObjects<MyType,MyType1>(obj1:MyType, obj2:MyType1){
    return {
        ...obj1,
        ...obj2
    }
}

const merged = mergeObjects<MyType,MyType1>({name:"Alice"},{email:"f7TbD@example.com"});
console.log(merged.name); // Alice
console.log(merged.email); // f7TbD@example.com
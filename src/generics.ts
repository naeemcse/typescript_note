// <T,V>

function  identity <T,V> (arg1: T, arg2: V): void{

    console.log(`arg1: ${arg1} and type is ${typeof arg1} ||  arg2: ${arg2 }  and type is ${typeof arg2}`);

}
identity(10,"naeem vai ")


// Example of intrface with generic
interface GenericIdentityFn <T> {
value : T;
}
class MyClass implements GenericIdentityFn<number>{
    value : number = 10;
}
class myClass2 implements GenericIdentityFn<string>{
    value : string = "Najmul";
}

// Example for making class

class GenericClass <T,V>{
    value1 : T;
    item : V
    constructor(value1 : T, item : V){
        this.value1 = value1;
        this.item = item;
    }
}

const item1 = new GenericClass(10,"Najmul");
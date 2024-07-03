// Class
class Person{

    // private can be assign to protect the data for using this class outside of this class this variable can not be acccessed
    // protected can be accessed by the child class
    // public can be accessed by all
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
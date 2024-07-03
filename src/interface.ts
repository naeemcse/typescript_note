// Interface is like type but something is different
// 1. here is no need '=' sign
/* Interface mostly helpt to make fixed class.
* when we need to make a class with fixed property then we can use interface
* after implementing a interface we can't add any extra property in that class
* Interface is a contract between two class
* Interface is a group of related properties and methods that describe an object
* Interface is a custom type
*  Interface has some limitition , like type can be union type but interface can't
* ex: type Movies = "horror" | "comedy" | "action";
*
*  */

interface Man {
    name : string ;
    age : number,
    isMale : boolean,
    address?:string
}

const student3 = {
    name : 'Najmul',
    age : 20,
    isMale : true,
    address : 'Dhaka'
}
const student4 :Man= {

    name : 'Rahim',
    age : 21,
    isMale : true,
}

// Example for making union type
interface A {
    name :string
}
interface B {
    age : number
}

type AB = A |  B; //
type AB1 = A & B; //

// Interface can be used for making class
// এখানে ইন্টারফেস এর বদলে type ও ব্যাবহার করা যাবে কোন সমস্যা হবে না।
class Employee implements Man {
    // যেই ইন্টারফেস থেকে আসছে , শুধু মাত্র সেই সেই প্রপার্টি গুলো থাকতে হবে । নতুন কিছু যোগ করা যাবে না। যোগ করতে হলে, ইন্টারফেস এর মধ্যে আগে যোগ করতে হবে।
    name : string ;
    age : number;
    isMale : boolean;
    constructor(name : string, age : number, isMale : boolean){
        this.name = name;
        this.age = age;
        this.isMale = isMale;
    }
}
let count :number = 100 ;
let Name :string = 'Najmul Islam Naeem ' ;
let  address :string = 'Dhaka , Bangladesh' ;
let male : boolean = true ;

// any is for all type of data but not recommended
// extreme case only when i don't know about type
let x : any = 10 ;

// Multi type
let multiType : number | string= "Hello" ;
/*
//check type
if (typeof Name !== "string") {
    console.log('Name is not a string')
} else {
    console.log('Name is a string')
}

// instanceof

class  Car  {
    name : string ;
   constructor(input:string) {
   this.name= input ;
   }
}
class Human{
    name : string ;
    constructor(input:string) {
        this.name = input ;
    }
}

let bmw = new Car('BMW') ;
let najmul = new Human('Najmul') ;
if(najmul instanceof Car){
    console.log('This is a Car')
} else {
    console.log('This is not a Car')
}

// Type Casting

let str : any = ' I ama string' ;
// Type Casting mehtod 1
let strLength = (str as string).length ;

// Type Casting mehtod 2
let strLength2:number = (<string>str).length
console.log(typeof str)
*/
// Array

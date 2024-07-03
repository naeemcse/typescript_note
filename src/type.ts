// Most used types container
type People = {
    name : string ;
    age : number,
    isMale : boolean,
    address?:string
}
// ? is used for optional

const student1 : People = {
    name : 'Najmul',
    age : 20,
    isMale : true,
    address : 'Dhaka'
}

const student2 : People = {
    name : 'Rahim',
    age : 21,
    isMale : true,
}

//  Custom Type
type Department =  {
    name: string,
    students : People[]
}

const CSE :Department={
    name   : 'CSE',
    students : [student1,student2]
}
console.log(CSE);

// Composite Type

type ISBN = number | string;
type Book = {
    isbn: ISBN,
    title: string,
    pages: number}

const book1 : Book = {
    isbn: 1234,
    title: 'JavaScript',
    pages: 200
}
const book2 : Book = {
    isbn: '1234',
    title: 'Asp.Net',
    pages: 200
}

type writter ={
    name : string,
    age : number,
    address:string
}

type BookWritter = Book & writter;

const bookWritter1 : BookWritter = {
    isbn: 1234,
    title: 'JavaScript',
    pages: 200,
    // First 3 data comes from book and second data comes from writter
    name: 'Najmul',
    age: 20,
    address: 'Dhaka'
}
console.log(bookWritter1);



// Making a type with letter or number means templete literal

type startWithLWS = `LWS${string}`;

const summitSaha : startWithLWS = "LWSsummit vai"
// LWS এখানে অবশ্যই থাকতে হবে এই লেটারগুলো এবং এর পরে যেকোনো স্ট্রিং থাকতে পারে।
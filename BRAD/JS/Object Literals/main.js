const person={
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies:['movies','music','sports'],
    address:{
        House:'277 Road 4',
        Postcode:'1206',
        State:'Dhaka'


    }

}
// console.log(person);
// console.log(person.hobbies[1]);
// console.log(firstName);
const {firstName,lastName,address:{
    State
}}=person;
console.log(firstName);
console.log(State);
//document.write(person);
person.email='john@gmail.com';
console.log(person);
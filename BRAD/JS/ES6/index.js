class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullyear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const person=new Person('John','Doe','11-18-1991');
console.log(person.getFullName());
console.log(person.getBirthYear());
//Problem needs to be corrected
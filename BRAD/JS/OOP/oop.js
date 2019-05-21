function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    //this.dob=dob;
    //to get actual date we can write
    this.dob=new Date(dob);
    // this.getBirthYear=function(){
    //     return this.dob.getFullYear();
    // }
    // this.getfullName=function(){
    //     return this.firstName  +this.lastName;
    // }

}
Person.prototype.getBirthYear()=function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
//instantiate an object

const personone=new Person('John','Doe','11-18-1991');
// console.log(personone.firstName);
// console.log(personone.dob);
//to get full year
console.log(personone.getBirthYear());
console.log(personone.getfullName( ) );
//document.write(personone);
//Need to check the prototype
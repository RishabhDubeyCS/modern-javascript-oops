class Person {
     constructor (name){
        this.name = name ;

     }
     greet (){
        console.log(`Hello, my name is ${this.name}` );
     }

}
class student extends Person {
    constructor (name , branch ){
        super (name );
        this.branch = branch ;
    }
}
const s1 = new student ("Rishabh", "CSE");
s1.greet();
console.log(s1.branch);



// Method Overriding Example 

class User{
    login (){
        console.log("User logged in "

        )
    }
}
class Admin extends User {
    login(){
        console.log("Admin Logged in with full access ");

    }
}
const admin = new Admin ()
const user = new User ();
user.login();
admin.login();


// Real World : Employee System 

class Employee{
    constructor ( name , salary)
{
    this.name = name ;
    this.salary = salary ;
}
getAnnualSalary (){
    return this.salary *12 ;

}

}

class Manager extends Employee {
    constructor (name , salary, bonus ){
        super (name , salary );
        this.bonus = bonus;
    }
    getAunualSalary(){
        return  super.getAnnualSalary() +this.bonus;
    }
}
const mgr= new Manager ("Rishabh", 4000, 1000);
console.log( mgr.name  , mgr.getAnnualSalary()   );

// Protected-Style Access 
class Account {
  constructor(balance) {
    this._balance = balance; // "_" means internal use
  }
}

class SavingAccount extends Account {
  addInterest(rate) {
    this._balance += this._balance * rate;
  }
}

const acc = new SavingAccount(1000);
acc.addInterest(0.05);
console.log(acc._balance);


// Multi-Level Inheritance Example
class Vehicle {
    start (){
        console.log("Vehicle Started");
    }

}
class Car extends Vehicle 
{
    drive () {
        console.log("Car is driving ")
    }
}
class ElectricCar extends Car {
    charge (){
        console.log("Electric Car is charging");
    }
}
const tesla = new ElectricCar ();
tesla.start();
tesla.drive ();
tesla.charge();

// Inheritance with Private Data
class Bank {
    #bankName= "KotakBank";
    getBankName(){
        return this.#bankName;

    }

}
class Customer extends Bank{};
const c = new Customer ();
console.log(c.getBankName ());

//  Interview-Perfect Minimal Example 
class A {
    show (){
        console.log("Parent class ")

    }
}
  class B extends A {}

new B ().show();

// Inheritance allows a class to acquire properties and methods of another class using extends
//   Polymorphism means the same method name behaves differently depending on the object or context.
// Method overriding

// Dynamic typing

// Function behavior based on input

// Duck typing

class User{
    login(){
        console.log("User logged in ");
    }

}
class Admin extends User {
    login (){
        console.log("Admin logged in with full access");

    }
}
const u = new User ();
const a = new Admin ();

u.login();
a.login();
//  Same method login()
//  Different behavior
//  Classic polymorphism

// Polymorphism via Parent Reference
class Shape {
    area (){
        console.log("Area not defined")
    }

}
class Rectangle extends Shape{
    area(){
        console.log("Area = Length * Width");
    }
}
class Circle extends Shape{
    area (){
        console.log("Area = π * r * r");
    }
}
function calculateArea (shape){
    shape.area();
}

calculateArea(new Rectangle());
calculateArea(new Circle());
// Interview likes this pattern

// Function Polymorphism (Dynamic Typing)
function add (a, b){
    return a + b ;
}
console.log(add (2, 3)); // 5
console.log(add ("Hello ", "World")); // Hello World
console.log(add ([1, 2], [3, 4])); // [1,2,3,4]


//  Same function
//  Different behavior
//  JavaScript-specific polymorphism

// Duck Typing


class FileLogger {
  log() {
    console.log("Logging to file");
  }
}

class ConsoleLogger {
  log() {
    console.log("Logging to console");
  }
}

function writeLog(logger) {
  logger.log(); // only method matters
}

writeLog(new FileLogger());
writeLog(new ConsoleLogger());



class Payment {
  pay() {
    throw new Error("Method not implemented");
  }
}

class UPI extends Payment {
  pay() {
    console.log("Paid using UPI");
  }
}

class Card extends Payment {
  pay() {
    console.log("Paid using Card");
  }
}

function processPayment(payment) {
  payment.pay();
}

processPayment(new UPI());
processPayment(new Card());




class Employee {
  getRole() {
    return "Employee";
  }
}

class Manager extends Employee {
  getRole() {
    return super.getRole() + " Manager";
  }
}

const m = new Manager();
console.log(m.getRole());



class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

let animal = new Dog();
animal.sound();

// ricky Interview Question 

class A {
  show() {
    console.log("A");
  }
}

class B extends A {
  show() {
    console.log("B");
  }
}

const obj = new A();
obj.show(); // A

// Polymorphism only works when object is of child class

// Key Interview Points (Say These!)

//  “Method overriding enables runtime polymorphism”
//  “JavaScript supports polymorphism through dynamic typing”
//  “Duck typing is a common JS polymorphism pattern”
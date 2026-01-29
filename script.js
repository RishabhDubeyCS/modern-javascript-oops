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


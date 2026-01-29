// // What is an Object?
// Object = data + behavior together
//  Used to represent real-world entities

const student ={
    name : "Rishabh dubey",
    branch : "CSE",
    year : 3
}
console.log(student);

// Object with Method

const user = {
     username : "Rishabh",
      login(){
        console.log(this.username="Logged In");
      }


}
user.login();

// Object Created Empty (Dynamic Data)
const product ={};
product.name = "Laptop";
product.price= 45000;
console.log(product);

// Used when data comes from form / API



// Nested Object (Real-World)
const employee = {
    name : "Risahbh",
     age : 19,
        designation : "Developer",


        address:{
        city : "Chhindware",
        pincode : 480001
        }
}
console.log(employee);

// Array of Objects (MOST IMPORTANT )

const students = [
    {
        name: "Rishabh",
        age: 21,
        branch : "CSE"

    },
     {
        name : "Bhavesh foley",
        age : 20,
        branch : "CSE"
     }
]
console.log(students[1].name);

// Object Destructuring (Industry Style)

const car = {
    brand: "BMW",
    price : 6000000,
    color : "Black"

}
const{brand, price, color} = car;
console.log(brand, price, color );


// Object with Function Property
 const calculator= {
    add (a, b){
        return a + b;
    },
    sub(a, b){
        return a - b;
    }
}
console.log(calculator.add (10, 3 ));
console.log(calculator.sub(20, 3 ));

// Object.freeze()  =>  Prevent Modification

const config ={
    app: {
        Name :"myApp"
    }
};
Object.freeze(config);
// config.appName = "Hack";
console.log(config.app.Name);


// Object.keys / values / entries (Interview )
const userInfo ={
    name : "Rishabh",
    role:"Student",

};
console.log(Object.keys(userInfo));
console.log(Object.values(userInfo));


// Object with Boolean Logic

const account = {
    name : "Rishabh",
     balance: 1000,
      isActive: true

};
if (account.isActive){
    console.log(` ${account.name} Account is Active `);
}

// Object = data + behavior stored as key–value pairs
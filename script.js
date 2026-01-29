
// JavaScript Classes User Class Most common 

class User {
    constructor (id , name , role ){
        this.id = id ;
        this.name = name;
        this.role = role ;

    }
    getProfile (){
        return `${this.name } (${this.role})`;

    }

}
const user1 = new User(1, "Rishabh ", "Student"
);
console.log(user1.getProfile());

const user2 = new User(2, "Bhavesh", "Student");
console.log(user2.getProfile());

// Used in: Auth, dashboards, profiles

// Bank Account Class ( Encapsulatin + Real app)
class BankAccount {
    #balance;
    constructor (initialBalance = 0 ){
        this.#balance = initialBalance;

    }
    deposit (amount){
        this.#balance  += amount;
        
    }
withdraw (amount ){
    if (amount <=this.#balance){
        this.#balance -= amount;
    }

}
getBalance(){
    return this.#balance;
}

}

const acc = new BankAccount (500);
acc.deposit (200);
console.log (acc.getBalance());
acc.withdraw (100);
console.log (acc.getBalance());

// Used in: Banking, wallets, fintech  


// Product Class (E-commerce Pattern)

class Product {
     constructor (id, name , price ){
        this.id = id ;
        this.name =name;
        this.price = price ;

     }
     applyDiscount(precent){
        this.price -= (this.price *precent)/100;

     }


}
const p= new Product (1, "Laptop", 50000);
p.applyDiscount(20);

console.log (p.price);

// Shopping apps, carts


// Employee Class (HR Systems)

class Employee{
    constructor (id, name, position, salary){
        this.id  =id ;
        this.name = name ;
        this.position = position ;
        this.salary = salary || 0 ;
    }
    getAnnualSalary(){
        return this.salary *12;

    }
}

const emp = new Employee (1, "Rishabh", "Developer", 4000);

console.log (emp.getAnnualSalary());


// Used in: Payroll, HR tools

// Logger Class (Utility Pattern)

class Logger {
    static log (message){
        console.log(`[LOG]: ${message}`);
    }
}
Logger.log ("This is a log message");

// Used in: Debugging, monitoring
//  Interview keyword: static method

// Cart Class (State Management)

class Cart{

    constructor (){
        this.items =[];
    }
    addItem(item){
        this.items.push(item);

    }
    getItems(){
        return this.items;
    }
}

const cart = new Cart ();
cart.addItem ("Laptop");
cart.addItem ("Mouse");
console.log (cart.getItems());

// React state, backend APIs

// Config Class (Read Only Pattern0

class AppConfig{
    static API_URL = "https://api.example.com";
    static TIMEOUT = 5000;
}
console.log (AppConfig.API_URL);
console.log (AppConfig.TIMEOUT);
// What is Encapsulation? (1-line interview answer)

// Encapsulation means hiding internal data and allowing access only through controlled methods.


class BankAccount {
    #balance =0;
deposit (amount){
    if (amount >0){
        this.#balance += amount;
    }
}
getBalance(){
    return this.#balance;
}


}

const acc = new BankAccount();
console.log(acc.getBalance()); //  1000
// console.log(acc.#balance);  ERROR

// Industry use: Banking, wallets, payments
//  Interview keyword: #private


// Encapsulation with Validation

class User {
    #password;
    setPassword(pwd){
        if (pwd.length >= 8){
            this.#password =pwd;
        }else{
            console.log("Password to short ");
        }
    }

    checkPassword(){
        return this.#password ? "Password set ": "Not set";


    }
}
const u = new User();
u.setPassword("12");
u.setPassword("secure1243"); // Password too short
console.log(u.checkPassword());

// Used in auth systems


// Getter & Setter Interview Favorite 

class Employee{
    #salary;
    constructor (salary){
        this.#salary = salary ;
    }
    get salary (){
        return this.#salary;
    }
    set salary (amount ){
        if (amount >0){
            this.#salary = amount;
        }
    }
}

const emp = new Employee (30000);
emp.salary = 35000;
console.log(emp.salary);

// Very common interview question



// Encapsulation Using Underscore
class Account {
    constructor (balance){
        this._balance = balance; // "_" means internal use
    }
    getBalance (){
        return this._balance;
    }
}
const accc  = new Account (5000);
console.log(accc.getBalance());

// Encapsulation with Business Logic (Real App)

class Order {
    #status = "Pending";
    /**
     * Method to update the order status to "Completed"
     * This function modifies the private status property of the class
     */
    completeOrder(){
        // Set the status property to "Completed"
        this.#status = "Completed";
    }
    getStatus(){
        return this.#status;
    }
}
const order = new Order ();
order.completeOrder ();
console.log(order.getStatus()); // Completed


// Encapsulatino Using Closure (Advanced Interview)

function createCounter (){
    let count = 0;
 return {
    increment (){
        count++;
    },
    getCount (){
        return count ;
    }
 };

}

const counter = createCounter();
counter.increment ();
counter.increment ();
counter.increment ();
console.log(counter.getCount())
// Asked in advanced JS interviews
// “Encapsulation improves security and control”

// “Private fields prevent direct access”

// “Business logic is exposed through methods only”



// Abstraction = show only what is needed, hide how it works
// Abstraction helps in hiding implementation details and exposing only essential functionality, making code scalable and maintainable.

// The user of your code should know WHAT to use, not HOW it works internally.

// You use ATM → you don’t know how bank servers work

// You use API → you don’t know database logic

// Step 1 : Create an abstract class layer 

class PaymentGateway{
    pay(amount){
        throw new Error("Method not implemented");
    }
}
class UpiPayment extends PaymentGateway {
    pay(amount){
        console.log(`Payment done through UPI for amount ${amount}`);
    }

}

class CardPayment extends PaymentGateway{
    pay(amount){
        console.log(`Payment done through Card for amount ${amount}`);
    }
}

// Each class handles its own internal logic 
function processPayment(paymentMethod, amount){
    paymentMethod.pay(amount);
}

//usage ;
const upi = new UpiPayment ();
const Card = new CardPayment ();
processPayment (upi, 1000);
processPayment (Card, 2000);

// Why This is INDUSTRY READY
// You can add NetBanking / Wallet / Crypto without changing existing code
// Follows Open–Closed Principle
//  Used in:

// Payment systems

// Notification services

// Database layers

// APIs

// Microservices

// Same Concept in Functional Style
function createPayment (method){
    return {
        pay(amount){
            console.log(`Payment done through ${method} for amount ${amount}`);
        }
    }
}
const upii =createPayment ("UPI");
const Cardd =createPayment ("Card");
upii.pay (1000);
Cardd.pay (2000);

// This is modern JavaScript abstraction
// You’ll use abstraction in:

// API service layers

// Auth services

// Payment modules

// AI model wrappers

// Database repositories



// Example 4: Notification System (Real SaaS Example)
//  Problem

// Send notification via:

// Email

// SMS

// WhatsApp

// Push

class Notifier{
    send (msg){
        throw new Error("Not implemented");
    }
}
class EmailNotifier extends Notifier{
    send(msg){
        console.log(`Email sent: ${msg}`);
    }
}
class whatsAppNotifier extends Notifier {
    send (msg){
        console.log(`WhatsApp message sent: ${msg}`);
    }
}

function notifyUser (notifier , msg){
    notifier.send(msg);
}


notifyUser(new EmailNotifier(), "Hello");
notifyUser(new whatsAppNotifier(), "Hello");

// Logger (Small but Professional)
class Logger {
  log(message) {
    throw new Error("log() must be implemented");
  }
}

class ConsoleLogger extends Logger {
  log(message) {
    console.log(message);
  }
}

class FileLogger extends Logger {
  log(message) {
    console.log("Saved to file:", message);
  }
}

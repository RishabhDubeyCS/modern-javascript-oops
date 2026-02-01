# JavaScript OOPS Basics 🚀

This repository contains my **JavaScript OOPS practice code** with multiple **class-based examples**.  
The goal of this repository is to understand **core object-oriented programming concepts** and write **clean, structured, and industry-style JavaScript code**.

---

## 📌 What is OOPS?

**Object-Oriented Programming System (OOPS)** is a programming paradigm based on **objects** that contain:
- **Data (properties)**
- **Behavior (methods)**

OOPS helps developers build applications that are:
- Modular
- Scalable
- Easy to maintain
- Easy to extend

It is widely used in **frontend development**, **backend services**, **APIs**, and **enterprise-level applications**.

---

## 🧠 Topics Covered

- Classes  
- Objects  
- Encapsulation  
- Inheritance  
- Polymorphism  
- Abstraction  

Each topic is implemented using **simple, readable, and practical examples**.

---

## 1️⃣ Classes & Objects

A **class** is a blueprint, and an **object** is an instance of that class.

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getDetails() {
    return `${this.name} - ${this.email}`;
  }
}

const user1 = new User("Rishabh", "test@gmail.com");
console.log(user1.getDetails());


# Encapsulation

Encapsulation means hiding internal data and allowing access only through controlled methods.

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

Protects sensitive data
Used in banking and authentication systems

# Inheritance

Inheritance allows a class to reuse functionality from another class.
class Employee {
  work() {
    console.log("Employee is working");
  }
}

class Developer extends Employee {
  code() {
    console.log("Developer is writing code");
  }
}

# Polymorphism

Polymorphism allows the same method to behave differently depending on the object.
class Notification {
  send() {
    console.log("Sending notification");
  }
}

class EmailNotification extends Notification {
  send() {
    console.log("Sending Email");
  }
}
# Interview Tip
OOPS helps in organizing code by modeling real-world entities, making applications easier to maintain and scale





---

If you want next (highly recommended ):
- Add **TypeScript OOPS examples**
-  Add **mini real-world project**
-  Add **interview questions & answers**
-  Improve README for **internship shortlisting**

Just tell me 
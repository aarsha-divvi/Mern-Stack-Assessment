"use strict";
class BankAcc {
    constructor() {
        this.balance = 1000;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    displayBalance() {
        console.log("Balance =", this.balance);
    }
}
let acc = new BankAcc();
acc.deposit(500);
acc.withdraw(200);
acc.displayBalance();

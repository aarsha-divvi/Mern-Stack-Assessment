"use strict";
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    showBalance() {
        console.log("Balance:", this.balance);
    }
}
let account = new BankAccount(100000000, s);
account.deposit(500000);
account.showBalance();

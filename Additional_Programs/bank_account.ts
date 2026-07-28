class BankAcc {
    balance = 1000;
    deposit(amount: number) {
        this.balance += amount;
    }
    withdraw(amount: number) {
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
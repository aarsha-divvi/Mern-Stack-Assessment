class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    showBalance(): void {
        console.log("Balance:", this.balance);
    }
}

let account = new BankAccount(100000000s);
account.deposit(500000);
account.showBalance();

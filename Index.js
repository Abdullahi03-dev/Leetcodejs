class Bank {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposit successful. New balance is ${this.balance}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  checkBalance() {
    console.log(`Your current balance is ${this.balance}`);
  }
}

class Savings extends Bank {
  constructor(accountNumber, accountHolder, balance = 0, interestRate) {
    super(accountNumber, accountHolder, balance);
    this.interestRate = interestRate;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawal successful. New balance is ${this.balance}`);
    } else {
      console.log("Insufficient balance or invalid withdrawal amount");
    }
  }

  addInterest() {
    const interest = this.balance * this.interestRate / 100;
    this.balance += interest;
    console.log(`Interest added. New balance is ${this.balance}`);
  }
}

class Current extends Bank {
  constructor(accountNumber, accountHolder, balance = 0, overdraftLimit) {
    super(accountNumber, accountHolder, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (amount > 0 && this.balance + this.overdraftLimit >= amount) {
      this.balance -= amount;
      console.log(`Withdrawal successful. New balance is ${this.balance}`);
    } else {
      console.log("Insufficient balance or invalid withdrawal amount");
    }
  }
}

// Example usage:
const savingsAccount = new Savings("SAV123", "John Doe", 1000, 5);
savingsAccount.checkBalance();
savingsAccount.deposit(500);
savingsAccount.checkBalance();
savingsAccount.withdraw(200);
savingsAccount.checkBalance();
savingsAccount.addInterest();
savingsAccount.checkBalance();

const currentAccount = new Current("CUR456", "Jane Doe", 500, 1000);
currentAccount.checkBalance();
currentAccount.deposit(1000);
currentAccount.checkBalance();
currentAccount.withdraw(800);
currentAccount.checkBalance();
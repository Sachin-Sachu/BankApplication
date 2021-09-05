class Bank {
    static getAccountDetails() {
        var accountDetails = {
            1001: { name: "user1", acno: 1001, pin: 4387, password: "userone", balance: 3000 },
            1002: { name: "user2", acno: 1002, pin: 1234, password: "usertwo", balance: 2500 },
            1003: { name: "user3", acno: 1003, pin: 4895, password: "userthree", balance: 5000 },
            1004: { name: "user4", acno: 1004, pin: 2589, password: "userfour", balance: 8900 },
            1005: { name: "user5", acno: 1005, pin: 2555, password: "userfive", balance: 10000 },
        }
        return accountDetails
    }
    static login() {
        var acno = document.querySelector("#acno").value;
        var password = document.querySelector("#pwd").value;
        try {
            if (isNaN(acno)) throw "Not a valid account Number";
        }
        catch (err) {
            alert(err)
        }

        let data = Bank.getAccountDetails()
        if (acno in data) {
            let pwd = data[acno].password
            if (pwd == password) {
                alert("Successfull login");
                window.open("userdashboard.html");
            }
            else {
                alert("Incorrect Username or Password");
                
            }
        }
  
    }
    static deposit() {
        var accnum = document.querySelector("#acno").value;
        var pinnum = document.querySelector("#pin").value;
        var amount = Number(document.querySelector("#amt").value);
        var data = Bank.getAccountDetails();
        if (accnum in data) {
            let mpin = data[accnum].pin;
            if (pinnum == mpin) {
                data[accnum].balance += amount;
                alert("Account has been credited");
                alert(data[accnum].balance);
            }
        }

    }
    static withdraw() {
        var wacno = document.querySelector("#wacno").value;
        var wpin = document.querySelector("#wpin").value;
        var wamt = Number(document.querySelector("#wamt").value);
        var data = Bank.getAccountDetails()
        if (wacno in data) {
            var mpin = data[wacno].pin
            if (wpin == mpin) {
                data[wacno].balance -= wamt;
                alert('Account has been debited');
                alert(data[wacno].balance);
            }
        }
        else {
            alert("Incorrect Account Details")
        }

    }
// Display Account Details on Deposit Page
static viewbal() {
    var x = document.getElementById('acno').value;
    var data = Bank.getAccountDetails();
    if (x in data) {
        let dname = data[x].name;
        let dbal = data[x].balance;
        document.getElementById('dname').innerHTML = "Hello, " + dname + "!";
        document.getElementById('dbal').innerHTML = "Your current balance is ₹" + dbal + ".";
    }
}
}

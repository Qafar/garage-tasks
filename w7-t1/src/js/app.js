/**
 * TASK #1
 */

function changeBodyBackgroundColor() {
    let text = "Press ok.";
    if (confirm(text) == true) {
        document.body.style.backgroundColor = "black";
        document.getElementById("task").style.color = "white";
        document.getElementById("task0").style.color = "white";
        document.getElementById("task1").style.color = "white";
        document.getElementById("notification").style.color = "white";
        document.getElementById("printFullname").style.color = "white";
    }
}

/**
 * TASK #2
 */

function checkYourAge() {
    let age = prompt("Please enter your age");
    if (Number(age) != null && Number(age) >=18) {
      document.getElementById("notification").innerHTML = "Congratulation. Your are confirmed!";
    } else {
        document.getElementById("notification").innerHTML = "Sorry. Your are not confirmed!";
    }
}

/**
 * TASK #3
 */

class User {
    constructor(firstname, lastname, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
    }

    fullName() {
        return this.firstname + " " + this.lastname
    }    
}

const user1 = new User("Gafar", "Akhmedov", "Shifre123");

function printFullname() {
    const fullname = user1.fullName();
    document.getElementById("printFullname").innerHTML = fullname.toUpperCase();
}
printFullname();
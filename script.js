// Javascript File
let day;
let age;
let s;

document.getElementById("enter").addEventListener("click", activity);

function activity() {
    day = new Date().getDay();
    age = document.getElementById("age").value;
    s = document.getElementById("day");
    if (day == 1 || day == 2) {
        document.getElementById("response").textContent = "Time to relax for the weekend!";
    }
    else if (age >= 18) {
        document.getElementById("response").textContent = "Time to go to work!";
    }
    else {
        document.getElementById("response").textContent = "Time to go to school!";
    }
    switch (new Date().getDay()) {
    case 0:
        s.textContent = "It's Sunday!";
        break;
    case 1:
        s.textContent = "It's Monday!";
        break;
    case 2:
        s.textContent = "It's Tuesday!";
        break;
    case 3:
        s.textContent = "It's Wednesday!";
        break;
    case 4:
        s.textContent = "It's Thursday!";
        break;
    case 5:
        s.textContent = "It's Friday!";
        break;
    case 6:
        s.textContent = "It's Saturday!";
        break;
    }
}
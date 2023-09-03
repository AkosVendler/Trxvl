
//   Created by Vendler Ákos on 24/03/2023.

const loginCard = document.getElementById("login");
const regCard = document.getElementById("reg");
const loginBtn = document.getElementById("ki");
const regBtn = document.getElementById("be");

function myFunction() {
    document.getElementById("login").style.display = "none";
    document.getElementById("reg").style.display = "flex";
}

function myFunction2() {
    document.getElementById("login").style.display = "flex";
    document.getElementById("reg").style.display = "none";
}

function admin() {
    const admindata = { 
        username: 'Admin', 
        password: 'admin123', 
    };
    sessionStorage.setItem("Admin", JSON.stringify(admindata));
}

const form = document.getElementById("reg-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("mail").value;
            const pass = document.getElementById("pwd").value;
            const data = { 
            username: name, 
            email: email, 
            password: pass, 
        };
        sessionStorage.setItem(data.username, JSON.stringify(data));
        });

        const login = document.getElementById("login-form");
        login.addEventListener("submit", (event) => {
            event.preventDefault();
            const cheatuser = 'Admin';
            const cheatpass = 'admin123';
            const username = document.getElementById("username").value;
            const pass = document.getElementById("password").value;

            const legit = sessionStorage.getItem(username);
            if(legit == null){
                alert("Rossz felhasználónév vagy jelszó!");
            } else {
                const data = JSON.parse(legit);
            if(username == data.username && pass == data.password ){
                alert("Sikeres bejelentkezés!");
                window.location.href = "index.html";
            } 
            else {
                alert("Rossz felhasználónév vagy jelszó!");
            }
        }
    });












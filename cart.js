//   Created by Vendler Ákos on 09/04/2023.

let product_img = document.querySelector('.slider-img');
let Iphone11 = 222900

function addCart(name) {
    localStorage.setItem(name, 1);
    location.reload();
}


function cart() {
    var list = "";
    var ossz = 0;
    var menny = 0;
    var key = "";

    if (localStorage.length === 0) {
        list = "<tr><th class=\"table-header\">A kosarad üres</th></tr>\n";
    } else {
        list += "<tr><th class=\"table-header\">Termék </th><th class=\"table-header\">Mennyiség </th><th class=\"table-header\">Ár </th></tr>\n";

        for (var i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            menny = Number(localStorage.getItem(key));
            list += "<tr class=\"table-var\"><td class=\"table-var\">" + key + "</td><td class=\"table-var\">" + "<button class=\"remove-button\" id=\"gombb\" onclick='ModifyItem(\"" + key + "\", " + "prompt(\"Írjon be egy összeget\")" + ")'>" + menny + "</button>" + "</td><td class=\"table-var\">" + (window[key] * menny) + " Ft" + "</td><td>" + "<button class=\"table-button\" onclick='töröl(\"" + key + "\")'>X</button>" + "</td></tr>";
            ossz += window[key] * menny;
        }

        list += "<tr> <th>Fizetendő </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>";
    }

    document.getElementById('tabla').innerHTML = list;
}

function termekek() {
    var dbszam = 0;
    var key = "";

    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        console.log(key);
        dbszam += Number(localStorage.getItem(key));
    }

    document.getElementById("darabszam").innerHTML = dbszam;
}

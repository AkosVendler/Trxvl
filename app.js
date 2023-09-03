
//   Created by Vendler Ákos on 24/03/2023.

var slider_img = document.querySelector('.slider-img');
var images = ['iphone11.png', 'iphone11-2.png', 'iphone11-3.png'];
var i = 0;




function prev(){
    if(i <= 0 ) i = images.length;
    i--;
    return setImg();
}

function next(){
    if (i >= images.length -1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'img/' + images[i]);
}

var myDiv = document.getElementById("cart");
var button = document.getElementById("button");
var close = document.getElementById("close");
button.addEventListener("click", function() {
  myDiv.classList.add("active");
});
close.addEventListener("click", function() {
    myDiv.classList.remove("active");
  });
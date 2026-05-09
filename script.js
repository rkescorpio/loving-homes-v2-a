document.addEventListener("DOMContentLoaded", function(){

let form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("msg").innerText =
"Message sent successfully!";

});

}

});
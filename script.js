const body = document.querySelector('body');
const nightMode = document.querySelector(".nMode");
nightMode.onclick = function() {
  body.classList.toggle('night-mode');    
    if (nightMode.innerHTML === "Night Mode") {
        nightMode.innerHTML = "Day Mode";
        nightMode.classList.remove('nMode');
        nightMode.classList.add('dMode');
        navbar.classList.add('dayMode');
    } else {
      nightMode.innerHTML = "Night Mode";
      nightMode.classList.remove('dMode');
      nightMode.classList.add('nMode');
      navbar.classList.remove('dayMode');
    }
}

window.onscroll = function() {myFunction()};

const navbar = document.getElementById("navbar");

const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
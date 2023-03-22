// User Interface Logic
window.onload = function() {
  let body = document.querySelector("body");
  button1.onclick = function() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  };
  button2.onclick = function() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  };
  let image = document.querySelector("image");
  button3.onclick = function () { 
  document.getElementById("image").style.display = "none";
  }
  button4.onclick = function () { 
  document.getElementById("image").style.display = "";
    }
  
};
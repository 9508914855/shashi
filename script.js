window.addEventListener("scroll", function() {
  var header = document.getElementById("myHeader");
  if (window.pageYOffset > 100) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});

var popupButton = document.getElementById("popupButton");
var overlay = document.getElementById("overlay");
var popupContainer = document.getElementById("popupContainer");

popupButton.addEventListener("click", function() {
  overlay.style.display = "block";
  popupContainer.style.display = "block";
});

overlay.addEventListener("click", function() {
  overlay.style.display = "none";
  popupContainer.style.display = "none";
});

function openPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popupContainer").style.display = "block";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popupContainer").style.display = "none";
  document.getElementById("iframePopup").src = ""; // Clear the iframe source
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closePopup();
  }
});
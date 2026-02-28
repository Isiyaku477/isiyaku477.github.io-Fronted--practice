const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", function() {
  sidebar.classList.toggle("closed");
});
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form submitted successfully!");
});

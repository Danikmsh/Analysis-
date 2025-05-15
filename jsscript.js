// Show greeting based on time
window.addEventListener("DOMContentLoaded", () => {
  const greeting = document.createElement("p");
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) message = "Good morning!";
  else if (hour < 18) message = "Good afternoon!";
  else message = "Good evening!";

  greeting.textContent = message;
  greeting.style.fontWeight = "bold";
  document.body.prepend(greeting); // Adds at top
});
// Contact Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const status = document.getElementById("formStatus");

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      status.textContent = "Invalid email format.";
      status.style.color = "red";
    } else if (!phoneRegex.test(phone)) {
      status.textContent = "Invalid phone number.";
      status.style.color = "red";
    } else {
      status.textContent = "Form submitted successfully!";
      status.style.color = "green";
      contactForm.reset();
    }
  });
}

function toggleDetails(id) {
  const elem = document.getElementById(id);
  elem.style.display = elem.style.display === "none" ? "block" : "none";
}
// Input focus styling
document.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("focus", () => {
    input.style.border = "2px solid blue";
  });
  input.addEventListener("blur", () => {
    input.style.border = "";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");

  // Check and apply saved theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Add click listener
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});




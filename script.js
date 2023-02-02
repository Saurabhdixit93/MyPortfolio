
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('click', function() {
    this.classList.toggle('open');
  });
});

window.onscroll = function() {
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer");
    if (window.pageYOffset > 0) {
      header.classList.add("scrolled");
      footer.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      footer.classList.remove("scrolled");
    }
  };
// Get the main content and the scroll indicator element
let scrollIndicator = document.querySelector(".scroll-indicator");
let scrollBar = document.querySelector(".scroll-bar");

window.addEventListener("scroll", function() {
  let percentage = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 100;
  scrollBar.style.width = percentage + "%";
});

// PreLoader Of Web

 window.onload = function() {
    setTimeout(function() {
      document.querySelector(".loader-container").style.display = "none";
    }, 3000);
  };

// Theme Toggle
const toggle = document.querySelector("input[type='checkbox']");

toggle.addEventListener("change", function() {
  document.body.classList.toggle("dark");
});

  

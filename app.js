// JavaScript code can be added here for any additional functionality you require

document.getElementById('navbar-toggle').addEventListener('click', function() {
    var navbarMenu = document.getElementById('navbar-menu');
    navbarMenu.classList.toggle('active');
  });

  // JavaScript code for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  


  
  
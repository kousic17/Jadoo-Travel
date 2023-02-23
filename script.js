const navToggle = document.querySelector('#nav-toggle');
const navbarCollapse = document.querySelector('.navbar-collapse');

navToggle.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
  this.classList.toggle('active'); 
  if (this.classList.contains('active')) {
    this.style.backgroundColor = "#f1a501";
  } else {
    this.style.backgroundColor = "";
  }
});

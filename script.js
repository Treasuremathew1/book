let menu = document.querySelector('#menu-icon');
let user = document.querySelector('#user');
let closebox = document.querySelector('#closebox');
let joinclose = document.querySelector('#joinclose');
let signinclose = document.querySelector('#signinclose');
let moonbox = document.querySelector('#moonbox');
let navbar = document.querySelector('.navbar');
let login = document.querySelector('.login-container');
let joinbtn = document.querySelector('.join-member-btn');
let join = document.querySelector('.join');
let signin = document.querySelector('.signin');
let link = document.querySelector('.link');
let links = document.querySelector('.links');
 


  menu.addEventListener('click', () =>{
    navbar.classList.toggle('active');
  });

  user.addEventListener('click', () => {
    login.classList.toggle('active');
  });

closebox.addEventListener('click', () => {
  login.classList.remove('active');
});

joinbtn.addEventListener('click', () => {
  join.classList.toggle('active');
});

joinclose.addEventListener('click', () => {
  join.classList.remove('active');
});

link.addEventListener('click', () => {
  signin.classList.toggle('active');
  join.classList.remove('active');
});

signinclose.addEventListener('click', () => {
  signin.classList.remove('active');
});

moonbox.onclick = () =>{
  if (moonbox.classList.contains('fa-moon')) {
    moonbox.classList.replace('fa-moon', 'fa-sun');
    home.classList.add('color');
  } else {
    moonbox.classList.replace('fa-sun', 'fa-moon');
    home.classList.remove('color');
  }
}


let header2 = document.querySelector('.header-2');

document.addEventListener('scroll', () =>{
    header2.classList.toggle('shadow', window.scrollY > 0);
});

window.onscroll = () =>{
  
    if(window.scrollY > 80){
      document.querySelector('.header-2').classList.add('active');
      document.querySelector('.navbar').classList.remove('active');
    }else{
      document.querySelector(' .header-2').classList.remove('active');
      document.querySelector('.navbar').classList.remove('active');
    }
  
  }

  // Scroll smoothly to sections
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
  });
}


// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = this.getAttribute('href');
      scrollToSection(targetSection);
  });
});

  window.onload = () =>{

    if(window.scrollY > 80){
      document.querySelector('.header-2').classList.add('active');
    }else{
      document.querySelector('.header-2').classList.remove('active');
    }
  }